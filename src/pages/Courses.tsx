import * as React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { Search, Filter, BookOpen } from "lucide-react";
import { Input } from "../components/ui/Input";

const staticCourses = [
  {
    id: "primary",
    title: "প্রাথমিক (১-৫)",
    description: "বাংলা, ইংরেজি ও গণিতের মজবুত ভিত্তি গড়ার জন্য আমাদের বিশেষ প্রোগ্রাম। প্রতিটি শিশুর জন্য রয়েছে যত্নশীল মেন্টরশিপ।",
    price: "১৫০০",
    duration: "মাসিক",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "junior",
    title: "জুনিয়র (৬-৮)",
    description: "সৃজনশীল পদ্ধতিতে বাংলা, ইংরেজি, গণিত ও বিজ্ঞানের নিরবচ্ছিন্ন প্রস্তুতি। আইসিটি ও সাধারণ জ্ঞানের বিশেষ ক্লাস।",
    price: "২০০০",
    duration: "মাসিক",
    thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "secondary",
    title: "সেকেন্ডারি (৯-১০)",
    description: "এসএসসি পরীক্ষার পূর্ণাঙ্গ প্রস্তুতি। পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান ও উচ্চতর গণিতের জটিল বিষয়গুলোর সহজ সমাধান।",
    price: "২৫০০",
    duration: "মাসিক",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "higher-secondary",
    title: "উচ্চ মাধ্যমিক (১১-১২)",
    description: "এইচএসসি ও এডমিশন প্রস্তুতির এক নির্ভরযোগ্য ঠিকানা। একাডেমিক সিলেবাসের পাশাপাশি ইউনিভার্সিটি ও মেডিকেল এডমিশন গাইডেন্স।",
    price: "৩০০০",
    duration: "মাসিক",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Courses() {
  const [courses, setCourses] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    const fetchCourses = async () => {
      try {
        const snap = await getDocs(collection(db, "courses"));
        const fetched = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCourses(fetched.length > 0 ? fetched : staticCourses);
      } catch (err) {
        console.error(err);
        setCourses(staticCourses);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">একাডেমিক কোর্সসমূহ</h1>
            <p className="text-lg text-slate-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis">১ম থেকে দ্বাদশ শ্রেণী পর্যন্ত প্রতিটি শিক্ষার্থীর জন্য আধুনিক শিখন পদ্ধতি।</p>
          </div>
          <div className="relative max-w-sm w-full mx-auto md:mx-0">
            <Input 
              placeholder="সার্চ করুন..." 
              className="pl-12 h-14 rounded-2xl border-slate-200 bg-white shadow-sm focus:ring-brand-green text-slate-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-4.5 h-5 w-5 text-slate-400" />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map(i => (
              <div key={i} className="h-96 bg-white animate-pulse rounded-3xl shadow-sm border border-slate-100" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.length > 0 ? filteredCourses.map((course) => (
              <Card key={course.id} className="group overflow-hidden flex flex-col h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl bg-white">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={course.thumbnail || `https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400`} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    ৳ {course.price}
                  </div>
                </div>
                <CardContent className="p-8 flex-1 flex flex-col pt-8 bg-white group-hover:bg-slate-50 transition-colors">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-green transition-colors">{course.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1">
                    {course.description}
                  </p>
                  <div className="mt-auto space-y-6">
                    <div className="flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest border-t border-slate-50 pt-6">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        ১২টি মডিউল
                      </div>
                      <div className="flex items-center gap-2 text-brand-blue">
                        {course.duration || "৩ মাস"}
                      </div>
                    </div>
                    <Link to={`/courses/${course.id}`} className="block">
                      <Button className="w-full rounded-2xl h-12 bg-brand-green hover:bg-brand-green/90 font-bold shadow-md active:scale-95 transition-transform">বিস্তারিত দেখুন</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )) : (
              <div className="col-span-full py-20 text-center space-y-6">
                <div className="mx-auto bg-slate-100 p-6 rounded-full w-fit">
                  <Search className="h-16 w-16 text-slate-300" />
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-slate-900">দুঃখিত, কোনো কোর্স পাওয়া যায়নি</p>
                  <p className="text-slate-500 font-medium">আপনার সার্চ প্রকিয়াটি ভিন্নভাবে চেষ্টা করুন।</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
