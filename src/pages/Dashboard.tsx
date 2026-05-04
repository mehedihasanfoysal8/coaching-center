import * as React from "react";
import { useAuth } from "../components/AuthContext";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Clock, CheckCircle, TrendingUp, AlertCircle, Star } from "lucide-react";
import { format } from "date-fns";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "../lib/utils";

export default function Dashboard() {
  const { user, profile } = useAuth();
  const [enrollments, setEnrollments] = React.useState<any[]>([]);
  const [results, setResults] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        const enrollQuery = query(collection(db, "enrollments"), where("studentId", "==", user.uid));
        const enrollSnap = await getDocs(enrollQuery);
        const enrollData = enrollSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        setEnrollments(enrollData);

        const resultQuery = query(collection(db, "results"), where("studentId", "==", user.uid), orderBy("date", "asc"));
        const resultSnap = await getDocs(resultQuery);
        setResults(resultSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const activeCourses = enrollments.filter(e => e.status === "active").length;
  const completedCourses = enrollments.filter(e => e.status === "completed").length;

  const chartData = results.map(r => ({
    name: r.examName,
    score: (r.score / r.totalMarks) * 100
  }));

  if (loading) return <div className="flex items-center justify-center min-h-screen text-slate-400 font-bold italic animate-pulse">লোড হচ্ছে...</div>;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">স্বাগতম, {profile?.displayName || "ছাত্র"}!</h1>
            <p className="text-lg text-slate-500 font-medium">আপনার ক্লাসের অগ্রগতি এবং রেজাল্ট এখান থেকে দেখে নিন।</p>
          </div>
          <Link to="/courses">
            <Button size="lg" className="rounded-2xl px-8 h-14 bg-brand-green hover:bg-brand-green/90 font-bold shadow-xl shadow-brand-green/10">
              নতুন কোর্স দেখুন
            </Button>
          </Link>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg rounded-3xl bg-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-brand-blue/10 text-brand-blue rounded-2xl">
                  <BookOpen className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">চলমান কোর্স</p>
                  <p className="text-3xl font-black text-slate-900">{activeCourses}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg rounded-3xl bg-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-brand-green/10 text-brand-green rounded-2xl">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">সম্পূর্ণ কোর্স</p>
                  <p className="text-3xl font-black text-slate-900">{completedCourses}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg rounded-3xl bg-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-brand-red/10 text-brand-red rounded-2xl">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">গড় স্কোর</p>
                  <p className="text-3xl font-black text-slate-900">
                    {results.length > 0 ? (results.reduce((acc, r) => acc + (r.score / r.totalMarks), 0) / results.length * 100).toFixed(1) : 0}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <Card className="border-0 shadow-lg rounded-[2.5rem] bg-white overflow-hidden">
              <CardHeader className="p-10 pb-0">
                <CardTitle className="text-2xl font-bold flex items-center gap-4 text-slate-900">
                  <TrendingUp className="h-7 w-7 text-brand-green" />
                  পারফরম্যান্স ওভারভিউ
                </CardTitle>
                <CardDescription className="font-medium text-slate-400">আপনার পরীক্ষার রেজাল্টের গ্রাফিকাল রিপোর্ট।</CardDescription>
              </CardHeader>
              <CardContent className="h-80 p-10 pt-4">
                {results.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                      <XAxis dataKey="name" fontSize={12} stroke="#cbd5e1" fontWeight="bold" />
                      <YAxis domain={[0, 100]} fontSize={12} stroke="#cbd5e1" fontWeight="bold" />
                      <Tooltip />
                      <Line type="monotone" dataKey="score" stroke="#008751" strokeWidth={4} dot={{ r: 8, fill: "#008751", strokeWidth: 3, stroke: "#fff" }} />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-300 space-y-4">
                    <AlertCircle className="h-16 w-16 opacity-20" />
                    <p className="font-bold text-lg">এখনো কোনো রেজাল্ট পাওয়া যায়নি।</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 px-2 flex items-center gap-3">
                <GraduationCap className="h-7 w-7 text-brand-blue" />
                আপনার আমন্ত্রিত কোর্সসমূহ
              </h2>
              <div className="space-y-6">
                {enrollments.length > 0 ? enrollments.map((enroll) => (
                  <Card key={enroll.id} className="border-0 shadow-lg rounded-3xl bg-white overflow-hidden hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="flex items-center gap-6">
                          <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                            <BookOpen className="h-7 w-7 text-brand-green" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-slate-900 uppercase">কোর্স আইডি: {enroll.courseId}</h4>
                            <p className="text-xs text-brand-blue font-black uppercase tracking-widest mt-1">
                              ব্যাচ: সকাল (ক)
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-8 w-full md:w-auto">
                          <div className="flex flex-col items-end">
                            <span className={cn(
                              "text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full mb-1 border shadow-xs",
                              enroll.paymentStatus === "paid" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-red-50 text-brand-red border-red-100"
                            )}>
                              {enroll.paymentStatus === "paid" ? "পরিশোধিত" : "বাকি"}
                            </span>
                            <span className="text-xs text-slate-400 font-bold">
                              ভর্তি: {format(new Date(enroll.enrolledAt), 'dd MMM, yyyy')}
                            </span>
                          </div>
                          <Button variant="outline" className="rounded-xl border-slate-200 font-bold hover:bg-slate-50">অ্যাক্সেস করুন</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )) : (
                  <div className="text-center py-24 bg-white border-2 border-dashed border-slate-100 rounded-[2.5rem] space-y-6 shadow-sm">
                    <div className="mx-auto h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-10 w-10 text-slate-200" />
                    </div>
                    <p className="text-slate-400 font-bold text-lg">আপনি এখনো কোনো কোর্সে ভর্তি হননি।</p>
                    <Link to="/courses">
                      <Button variant="outline" className="rounded-xl font-bold border-brand-green text-brand-green hover:bg-brand-green/5">কোর্স দেখতে এখানে ক্লিক করুন</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            <Card className="bg-slate-900 border-none text-white overflow-hidden relative rounded-[2.5rem] shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Clock className="h-32 w-32" />
              </div>
              <CardHeader className="p-10 pb-0">
                <CardTitle className="text-xl font-bold">পরবর্তী ক্লাস</CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-6 relative z-10">
                <div className="p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 space-y-1">
                  <p className="text-[16px] font-bold text-brand-green">ক্রিকেট কমেন্ট্রি বেসিক</p>
                  <p className="text-sm text-slate-400 font-medium">আজ, বিকাল ৪:০০ - ৫:৩০</p>
                </div>
                <div className="p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 space-y-1">
                  <p className="text-[16px] font-bold text-brand-green">ভয়েস মড্যুলেশন</p>
                  <p className="text-sm text-slate-400 font-medium">আগামীকাল, সকাল ১০:০০ - ১১:৩০</p>
                </div>
                <Button className="w-full h-14 rounded-2xl bg-brand-green hover:bg-brand-green/90 font-bold text-lg shadow-lg">সম্পূর্ণ শিডিউল</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-[2.5rem] bg-white overflow-hidden">
              <CardHeader className="p-10 pb-0">
                <CardTitle className="text-xl font-bold text-slate-900">অ্যাচিভমেন্ট</CardTitle>
              </CardHeader>
              <CardContent className="p-10 flex flex-wrap gap-4">
                <div className="h-14 w-14 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center border border-yellow-100 shadow-sm" title="প্রথম ক্লাস সম্পন্ন">
                  <Star className="h-7 w-7 fill-yellow-600" />
                </div>
                <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 opacity-20" title="কোর্স সমাপ্ত">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <div className="h-14 w-14 bg-red-50 text-brand-red rounded-2xl flex items-center justify-center border border-red-100 opacity-20" title="শীর্ষ ১%">
                  <TrendingUp className="h-7 w-7" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
