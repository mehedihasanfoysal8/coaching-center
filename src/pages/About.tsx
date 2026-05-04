import * as React from "react";
import { Award, Target, Users, CheckCircle2, GraduationCap, BookOpen, Clock, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="bg-white min-h-screen text-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold tracking-tight text-brand-blue sm:text-5xl lg:text-7xl"
            >
              আমাদের অদম্য পথচলা
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-xl text-slate-500 leading-relaxed font-medium"
            >
              ২০১৬ সাল থেকে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ বিনির্মাণে আমরা প্রতিশ্রুতিবদ্ধ। মেধার বিকাশ ও আধুনিক শিক্ষার সমন্বয়ে আমরা গড়ে তুলছি আগামী দিনের নেতৃত্ব।
            </motion.p>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-green/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl" />
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-5 py-2 rounded-full bg-brand-green/10 text-brand-green font-black text-sm uppercase tracking-widest border border-brand-green/20">
                স্থাপিত : ২০১৬ ইং
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-blue leading-tight tracking-tighter italic">
                শিক্ষাই জাতির মেরুদণ্ড, <br />
                <span className="text-brand-green">আর সেই ভিত্তি মজবুত করাই আমাদের লক্ষ্য।</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                কমেন্টারি কোচিং সেন্টার উত্তরার প্রাণকেন্দ্রে অবস্থিত একটি মানসম্মত শিক্ষা ও গবেষণা কেন্দ্র। দীর্ঘ ৮ বছর ধরে আমরা পিএসসি, জেএসসি, এসএসসি ও এইচএসসি পরীক্ষায় অসামান্য ফলাফল অর্জন করে আসছি। আমাদের প্রতিটি ছাত্রের জন্য রয়েছে আলাদা যত্ন ও সুনির্দিষ্ট পরিকল্পনা।
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "অভিজ্ঞ ও দক্ষ শিক্ষক মণ্ডলী",
                  "ডিজিটাল মাল্টিমিডিয়া ক্লাসরুম",
                  "নিয়মিত মডেল টেস্ট ও রিপোর্ট",
                  "সৃজনশীল পদ্ধতিতে পাঠদান",
                  "নিজস্ব লাইব্রেরি সুবিধা",
                  "দুর্বল ছাত্রের বিশেষ কেয়ার"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-brand-green shrink-0" />
                    <span className="text-sm font-bold text-slate-700 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                  alt="Academic Excellence" 
                  className="w-full h-full object-cover shadow-inner"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 hidden md:block max-w-[200px] transition-colors">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="h-20 w-20 bg-brand-red rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-lg shadow-brand-red/30">
                    ৮+
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900 leading-none">সাফল্যের বছর</div>
                    <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-black">আমাদের পথচলা</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="py-24 bg-slate-50 overflow-hidden transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-2">
                  <img 
                    src="/shah_jalal.jpg" 
                    alt="Shah Jalal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-brand-green text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">
                  CEO & FOUNDER
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-8">
              <h4 className="text-brand-red font-black uppercase tracking-[0.4em] text-sm italic">পরিচালকের বাণী</h4>
              <h2 className="text-5xl font-black text-brand-blue tracking-tighter leading-tight">শাহ্-জালাল (Shah-Jalal)</h2>
              <div className="relative">
                <span className="text-9xl text-brand-green/10 absolute -top-16 -left-8 font-black">"</span>
                <p className="text-2xl font-bold text-slate-700 leading-relaxed italic relative z-10">
                  ইংরেজি গ্রামারের জটিলতা দূর করতে আমি লিখেছি 'Decode English Grammar' বইটি। আমার লক্ষ্য কেবল পরীক্ষার জন্য পড়ানো নয়, বরং প্রতিটি ছাত্রকে এমনভাবে গড়ে তোলা যেন তারা বাস্তব জীবনে ইংরেজিকে দক্ষতার সাথে ব্যবহার করতে পারে। আমরা ২০১৬ সাল থেকে এই প্রত্যয় নিয়েই কাজ করছি।
                </p>
              </div>
              <div className="pt-4 space-y-4">
                <p className="text-lg font-bold text-slate-500 uppercase tracking-widest border-l-4 border-brand-green pl-6">
                  Expert in English Linguistics, Content Writing, and Innovative Teaching Methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-brand-blue text-white relative transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl font-black tracking-tighter">আমাদের মূল দর্শন</h2>
            <p className="text-blue-100 text-xl font-medium max-w-2xl mx-auto">
              আমরা বিশ্বাস করি প্রতিটি শিশুই মেধাবী, শুধু প্রয়োজন সঠিক নির্দেশনা।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <GraduationCap className="h-10 w-10" />, 
                title: "শেখার মান", 
                desc: "আমরা আধুনিক পাঠদান পদ্ধতি অনুসরণ করি যাতে ছাত্ররা মুখস্থ না করে বিষয়গুলো বুঝতে পারে।",
                color: "text-brand-green"
              },
              { 
                icon: <Clock className="h-10 w-10" />, 
                title: "শৃঙ্খলা", 
                desc: "নিয়মিত ক্লাস ও সময়ের প্রতি যত্নশীল হওয়া আমাদের কোচিংয়ের অন্যতম প্রধান বৈশিষ্ট্য।",
                color: "text-emerald-400"
              },
              { 
                icon: <Heart className="h-10 w-10" />, 
                title: "মেন্টরশিপ", 
                desc: "শিক্ষক ও ছাত্রের মধ্যে একটি বন্ধুত্বপূর্ণ সম্পর্ক বজায় রাখা যাতে দ্বিধাহীনভাবে শিখতে পারে।",
                color: "text-rose-400"
              }
            ].map((value, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 hover:bg-white/15 transition-all group">
                <div className={value.color + " mb-8 transform group-hover:scale-110 transition-transform"}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight italic">{value.title}</h3>
                <p className="text-blue-50 text-base leading-relaxed font-bold opacity-80">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 bg-slate-50 text-center transition-colors">
         <div className="mx-auto max-w-4xl px-4">
            <p className="text-3xl font-black text-brand-blue tracking-tighter mb-8 italic">
              "২০১৬ সাল থেকে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ বিনির্মাণে আমরা প্রতিশ্রুতিবদ্ধ।"
            </p>
            <div className="h-1 w-20 bg-brand-green mx-auto rounded-full"></div>
         </div>
      </footer>
    </div>
  );
}
