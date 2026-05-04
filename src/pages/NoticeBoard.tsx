import * as React from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Bell, Calendar, ChevronRight, Info } from "lucide-react";
import { cn } from "../lib/utils";
import { format } from "date-fns";

const staticNotices = [
  {
    id: "n1",
    title: "নতুন বছরে ভর্তি চলছে - ২০২৪ সেশন",
    content: "উচ্চ মাধ্যমিক (এইচএসসি) ও এসএসসি কোর্সে নতুন ব্যাচে ভর্তি শুরু হয়েছে। আগাম ভর্তিতে ২০% বিশেষ ছাড়! আবেদনের শেষ সময় ৩০শে ডিসেম্বর।",
    priority: "high",
    createdAt: new Date().toISOString()
  },
  {
    id: "n2",
    title: "মডেল টেস্ট পরীক্ষার রুটিন প্রকাশ",
    content: "নবম ও দশম শ্রেণীর প্রি-টেস্ট মডেল টেস্টের পূর্ণাঙ্গ রুটিন আমাদের ওয়েবসাইট ও নোটিশ বোর্ডে প্রকাশ করা হয়েছে।",
    priority: "medium",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: "n3",
    title: "ইংরেজি স্পেশাল গ্রামার ওয়ার্কশপ",
    content: "শাহ্-জালাল স্যারের পরিচালনায় আগামী শুক্রবার একটি বিশেষ 'Grammar Hack' কর্মশালার আয়োজন করা হয়েছে। সকল ছাত্রের উপস্থিতি কাম্য।",
    priority: "medium",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString()
  }
];

export default function NoticeBoard() {
  const [notices, setNotices] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchNotices = async () => {
      try {
        const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        const fetched = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNotices(fetched.length > 0 ? fetched : staticNotices);
      } catch (err) {
        console.error(err);
        setNotices(staticNotices);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-16 text-slate-900 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="mx-auto bg-brand-green/10 p-5 rounded-3xl w-fit mb-6 shadow-xl shadow-brand-green/5">
            <Bell className="h-10 w-10 text-brand-green animate-bounce" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">অফিসিয়াল নোটিশ বোর্ড</h1>
          <div className="h-1.5 w-24 bg-brand-red mx-auto rounded-full" />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium transition-colors">
            একাডেমির সর্বশেষ সংবাদ, পরীক্ষার সময়সূচী এবং ছুটির আপডেট দেখতে নিয়মিত এখানে চোখ রাখুন।
          </p>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[1,2,3].map(i => (
              <div key={i} className="h-32 bg-white animate-pulse rounded-3xl shadow-sm border border-slate-100" />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {notices.length > 0 ? notices.map((notice) => (
              <Card key={notice.id} className={cn(
                "group transition-all overflow-hidden border-0 shadow-lg rounded-3xl bg-white",
                notice.priority === "high" && "ring-2 ring-brand-red/20"
              )}>
                <CardContent className="p-0">
                  <div className="flex">
                    <div className={cn(
                      "w-3 shrink-0",
                      notice.priority === "high" ? "bg-brand-red" : notice.priority === "medium" ? "bg-brand-blue" : "bg-brand-green"
                    )} />
                    <div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 w-full">
                      <div className="space-y-4 flex-1">
                        <div className="flex items-center gap-4">
                          <h3 className="text-2xl font-bold text-slate-900 leading-tight">{notice.title}</h3>
                          {notice.priority === "high" && (
                            <span className="flex items-center gap-2 bg-red-100 text-brand-red px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                              <Info className="h-3.5 w-3.5" />
                              জরুরি
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 leading-relaxed font-medium text-lg transition-colors">
                          {notice.content}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end gap-3 shrink-0">
                        <div className="flex items-center gap-2 text-slate-400 font-bold text-sm bg-slate-50 px-4 py-2 rounded-xl">
                          <Calendar className="h-4.5 w-4.5" />
                          {format(new Date(notice.createdAt), 'dd MMMM, yyyy')}
                        </div>
                        <div className="text-[10px] text-brand-blue font-black uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                          রেফ: #CC-{notice.id.slice(-4).toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )) : (
              <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-slate-100 shadow-sm transition-colors">
                <p className="text-slate-400 font-bold text-lg">এই মুহূর্তে কোনো নতুন নোটিশ নেই।</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-20 p-10 bg-gradient-to-br from-brand-green to-emerald-700 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-brand-green/20">
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-2xl font-bold">অ্যাপ ডাউনলোড করুন</h4>
            <p className="text-emerald-50 font-medium text-lg opacity-90">আমাদের মোবাইল অ্যাপের মাধ্যমে তাৎক্ষণিক নোটিফিকেশন পান।</p>
          </div>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-brand-green h-14 px-10 rounded-2xl font-bold text-lg transition-all shadow-xl">
            অ্যাপটি ডাউনলোড করুন
          </Button>
        </div>
      </div>
    </div>
  );
}
