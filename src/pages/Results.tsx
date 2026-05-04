import * as React from "react";
import { Trophy, Star, TrendingUp, Users, GraduationCap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";
import { motion } from "motion/react";

const successStories = [
  {
    name: "তানজিম আহমেদ",
    batch: "ব্যাচ - ২০১৮ (এসএসসি)",
    result: "GPA 5.00 (Golden)",
    institution: "নটর ডেম কলেজ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "কমেন্টারি কোচিং সেন্টারের গাইডেন্স ছাড়া আমি আজ নটর ডেম কলেজে পড়ার সুযোগ পেতাম না।"
  },
  {
    name: "নুসরাত জাহান",
    batch: "ব্যাচ - ২০১৯ (এইচএসসি)",
    result: "ঢাকা বিশ্ববিদ্যালয় (খ-ইউনিট)",
    institution: "DU - ইংরেজি বিভাগ",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    quote: "এখানে ভর্তির পর ইংরেজি গ্রামারের ওপর আমার যে কনফিডেন্স এসেছে তা অবিশ্বাস্য ছিল।"
  },
  {
    name: "ফয়সাল মাহমুদ",
    batch: "ব্যাচ - ২০২১ (এসএসসি)",
    result: "GPA 5.00",
    institution: "রাজউক উত্তরা মডেল কলেজ",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    quote: "গণিত ও বিজ্ঞানের জটিল বিষয়গুলো শাহ্-জালাল স্যার অনেক সহজ করে বুঝিয়ে দিতেন।"
  }
];

const yearlyResults = [
  { year: "২০২৩", gpa5: "১০২ জন", success_rate: "১০০%" },
  { year: "২০২২", gpa5: "৮৫ জন", success_rate: "৯৯.৫%" },
  { year: "২০২১", gpa5: "৭২ জন", success_rate: "১০০%" },
  { year: "২০২০", gpa5: "৬০ জন", success_rate: "৯৮%" },
];

export default function Results() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 text-slate-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-black uppercase tracking-widest"
          >
            <Trophy className="h-4 w-4" />
            সাফল্য গাঁথা
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-brand-blue tracking-tighter leading-tight"
          >
            আমাদের শিক্ষাথীদের সাফল্য
          </motion.h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium transition-colors">
            ২০১৬ সাল থেকে শত শত শিক্ষার্থী আমাদের হাত ধরে পৌঁছে গেছে তাদের স্বপ্নের গন্তব্যে।
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { label: "সফল ছাত্র", value: "৫০০+", icon: Users, color: "bg-emerald-100 text-brand-green shadow-emerald-100/50" },
            { label: "GPA 5 Achievers", value: "২৫০+", icon: Star, color: "bg-blue-100 text-brand-blue shadow-blue-100/50" },
            { label: "মোট ব্যাচ", value: "৪০+", icon: Trophy, color: "bg-red-100 text-brand-red shadow-red-100/50" },
            { label: "সাফল্যের হার", value: "৯৯%", icon: TrendingUp, color: "bg-purple-100 text-purple-600 shadow-purple-100/50" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white text-center space-y-4 transition-colors"
            >
              <div className={`mx-auto h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="pt-2">
                <div className="text-4xl font-black text-brand-blue tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Yearly Breakdown Table */}
        <div className="mb-24">
          <div className="bg-brand-blue rounded-[3rem] p-10 lg:p-20 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-black tracking-tighter leading-tight italic">গত কয়েক বছরের <br />ফলাফলের পরিসংখ্যান</h2>
                <p className="text-blue-100 text-lg font-medium opacity-80 leading-relaxed">
                  আমরা কেবল পড়াই না, আমরা নিশ্চিত করি যেন প্রতিটি শিক্ষার্থী তার সর্বোচ্চ মেধা ব্যবহার করে শ্রেষ্ঠ ফলাফল অর্জন করতে পারে।
                </p>
                <div className="h-1 w-20 bg-brand-green rounded-full"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="p-6 text-sm font-black uppercase tracking-widest italic">বছর</th>
                      <th className="p-6 text-sm font-black uppercase tracking-widest italic">GPA 5.00</th>
                      <th className="p-6 text-sm font-black uppercase tracking-widest italic">পাশের হার</th>
                    </tr>
                  </thead>
                  <tbody className="font-bold">
                    {yearlyResults.map((res, i) => (
                      <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-6">{res.year}</td>
                        <td className="p-6 text-brand-green">{res.gpa5}</td>
                        <td className="p-6">{res.success_rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
             <h2 className="text-4xl font-black text-brand-blue tracking-tighter italic">সেরা মেধাবীদের কথা</h2>
             <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">সফল শিক্ষার্থীদের অনুপ্রেরণামূলক গল্প</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <Card key={i} className="bg-white border-0 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden p-10 group transition-colors">
                <CardContent className="p-0 space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-green rounded-2xl transform rotate-6 scale-105 opacity-20 group-hover:rotate-12 transition-transform"></div>
                      <img src={story.image} alt={story.name} className="h-20 w-20 rounded-2xl object-cover relative z-10 shadow-lg border-2 border-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-brand-blue text-xl leading-none">{story.name}</h4>
                      <p className="text-brand-green text-xs font-black uppercase tracking-widest mt-2">{story.batch}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-blue-50 text-brand-blue text-[10px] font-black rounded-lg uppercase tracking-wider">{story.result}</div>
                      <div className="px-3 py-1 bg-red-50 text-brand-red text-[10px] font-black rounded-lg uppercase tracking-wider">{story.institution}</div>
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed italic relative transition-colors">
                      <span className="text-4xl text-slate-100 absolute -top-4 -left-4 font-black">"</span>
                      {story.quote}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-32 p-1 bg-gradient-to-r from-brand-green via-brand-blue to-brand-red rounded-[3.5rem]">
           <div className="bg-white p-12 lg:p-24 rounded-[3.4rem] text-center space-y-10 transition-colors duration-300">
              <GraduationCap className="h-20 w-20 text-brand-blue mx-auto" />
              <h2 className="text-4xl lg:text-6xl font-black text-brand-blue tracking-tighter italic leading-tight">
                 পরবর্তী সাফল্য গাঁথাটি হতে <br /><span className="text-brand-green">পারে আপনার সন্তানের!</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                 ২০১৬ সাল থেকে আমরা গড়ে তুলছি আগামীর ভবিষ্যৎ। আজই ভর্তি হয়ে আপনার সন্তানের স্বপ্ন পূরণের যাত্রা শুরু করুন।
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                 <button className="h-16 px-12 bg-brand-red text-white text-xl font-black rounded-2xl shadow-xl shadow-brand-red/20 hover:scale-105 transition-all active:scale-95">
                    ভর্তি হতে কল করুন
                 </button>
                 <button className="h-16 px-12 border-2 border-brand-blue text-brand-blue text-xl font-black rounded-2xl hover:bg-brand-blue hover:text-white transition-all active:scale-95">
                    কোর্স ভিউ করুন
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
