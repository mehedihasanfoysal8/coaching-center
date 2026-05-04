import * as React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Star,
  ShieldCheck,
  Zap,
  Mic2,
  Trophy,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  Book,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden transition-colors duration-300">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-brand-blue rounded-full blur-[100px]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-bold tracking-wide uppercase">
                <Sparkles className="h-4 w-4" />
                স্থাপিত: ২০১৬
              </div> */}
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-brand-blue">
                কমেন্টারি কোচিং সেন্টার: <br />
                <span className="text-brand-green">
                  যেখানে মেধার বিকাশ ঘটে আধুনিক শিক্ষায়।
                </span>
              </h1>
              <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
                ক্লাস ১ থেকে ১২ পর্যন্ত সকল বিষয়ের নির্ভরযোগ্য সমাধান। আপনার
                সন্তানের উজ্জ্বল ভবিষ্যৎ বিনির্মাণে আমরা প্রতিশ্রুতিবদ্ধ।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#admission">
                  <Button className="h-16 px-10 rounded-2xl bg-brand-red hover:bg-red-700 text-xl font-bold shadow-xl shadow-brand-red/20 transition-all active:scale-95 w-full sm:w-auto">
                    ভর্তি ফরম পূরণ করুন
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </a>
                <Link to="/courses">
                  <Button
                    variant="outline"
                    className="h-16 px-10 rounded-2xl border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5 text-xl font-bold w-full sm:w-auto"
                  >
                    কোর্সসমূহ দেখুন
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-12 w-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?u=${i}`}
                        alt="Student"
                      />
                    </div>
                  ))}
                  <div className="h-12 w-12 rounded-full border-4 border-white bg-brand-blue flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    +৫০০
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    ৫০০+ সফল ছাত্রছাত্রী
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                  alt="Coaching Center"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[240px]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-brand-green rounded-2xl flex items-center justify-center text-white">
                    <Trophy className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black leading-none tracking-tight text-slate-900">
                      ১০১+
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                      GPA 5.00 এচিভার্স
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Featured Personality: CEO & Main Teacher */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
            <div className="lg:col-span-2 relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-1 relative z-10">
                <img
                  src="/shah_jalal.jpg"
                  alt="Shah Jalal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-red rounded-full flex items-center justify-center text-white transform rotate-12 z-20 shadow-lg font-black text-center text-sm p-4 leading-tight">
                Decode English Grammar এর লেখক
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl z-0"></div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <h4 className="text-brand-red font-black uppercase tracking-[0.3em] text-sm">
                  প্রধান মেন্টর প্রোফাইল
                </h4>
                <h2 className="text-5xl font-black text-brand-blue tracking-tighter">
                  শাহ্-জালাল (Shah-Jalal)
                </h2>
                <p className="text-xl font-bold text-brand-green uppercase tracking-widest">
                  CEO & Senior Teacher
                </p>
              </div>

              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 italic font-medium text-lg leading-relaxed relative text-slate-700 transition-colors">
                <span className="text-7xl text-slate-200 absolute -top-4 -left-2 leading-none">
                  "
                </span>
                ইংরেজি গ্রামারের জটিলতা দূর করতে আমাদের মেইন মেন্টর শাহ্-জালাল
                স্যারের লিখিত 'Decode English Grammar' বইটি এখন প্রতিটি ছাত্রের
                সংগ্রহে। আমরা গত ৮ বছর ধরে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ
                বিনির্মাণে কাজ করে যাচ্ছি।
                <div className="mt-8 flex flex-wrap gap-4 not-italic">
                  {[
                    "English Linguistics",
                    "Content Writing",
                    "Innovative Teaching",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2 bg-white border border-slate-200 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="h-14 px-8 rounded-2xl bg-brand-blue hover:bg-brand-blue/90 font-bold shadow-lg shadow-brand-blue/20">
                  স্যারের সাথে কথা বলুন
                </Button>
                <Button
                  variant="outline"
                  className="h-14 px-8 rounded-2xl border-brand-green text-brand-green font-bold"
                >
                  বইটি সংগ্রহ করুন
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Academic Courses (Class 1-12) */}
      <section className="py-32 bg-slate-50 relative transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl font-black text-brand-blue tracking-tighter">
              আমাদের একাডেমিক কোর্সসমূহ
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              ১ম থেকে দ্বাদশ শ্রেণী পর্যন্ত প্রতিটি শিক্ষার্থীর জন্য রয়েছে
              আধুনিক ও বিজ্ঞানসম্মত শিখন পদ্ধতি।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "primary",
                level: "Primary (১-৫)",
                subjects: ["বাংলা", "ইংরেজি", "গণিত"],
                focus: "বেসিক ও শুদ্ধ উচ্চারণ",
                color: "bg-emerald-50",
                icon: <GraduationCap className="h-8 w-8 text-emerald-600" />,
              },
              {
                id: "junior",
                level: "Junior (৬-৮)",
                subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "আইসিটি"],
                focus: "সৃজনশীল পদ্ধতি",
                color: "bg-blue-50",
                icon: <Book className="h-8 w-8 text-blue-600" />,
              },
              {
                id: "secondary",
                level: "Secondary (৯-১০)",
                subjects: [
                  "পদার্থ",
                  "রসায়ন",
                  "জীববিজ্ঞান",
                  "উচ্চতর গণিত",
                  "ইংরেজি",
                ],
                focus: "এসএসসি প্রস্তুতি",
                color: "bg-amber-50",
                icon: <Trophy className="h-8 w-8 text-amber-600" />,
              },
              {
                id: "higher-secondary",
                level: "Higher Secondary (১১-১২)",
                subjects: [
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "Higher Math",
                  "English",
                  "ICT",
                ],
                focus: "এইচএসসি ও এডমিশন",
                color: "bg-rose-50",
                icon: <Zap className="h-8 w-8 text-rose-600" />,
              },
            ].map((course, i) => (
              <Link key={i} to={`/courses/${course.id}`}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={cn(
                    "p-8 sm:p-10 rounded-[2.5rem] border border-white shadow-xl flex flex-col items-center text-center space-y-6 h-full transition-colors",
                    course.color,
                  )}
                >
                  <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                    {course.level}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {course.subjects.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 bg-white/60 text-xs font-bold rounded-lg text-slate-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-slate-200 w-full mt-auto">
                    <p className="text-sm font-black text-brand-green uppercase tracking-widest">
                      ফোকাস: {course.focus}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Teacher Panel (Our Experts) */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4">
              <h4 className="text-brand-green font-black uppercase tracking-[0.3em] text-sm italic">
                সেরা মেন্টরশিপ
              </h4>
              <h2 className="text-5xl font-black text-brand-blue tracking-tighter">
                আমাদের দক্ষ শিক্ষক প্যানেল
              </h2>
            </div>
            <p className="text-slate-500 font-bold max-w-md transition-colors">
              দেশসেরা ভার্সিটির মেন্টরদের দ্বারা পরিচালিত আধুনিক ডিজিটাল কোচিং
              সেন্টার।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                name: "শাহ্-জালাল",
                role: "Head of English & CEO",
                skill: "English Grammar Specialist",
                image: "/shah_jalal.jpg",
              },
              {
                name: "আহমেদ রাজা",
                role: "Senior Math Specialist",
                skill: "Advanced Mathematics",
                image:
                  "https://images.unsplash.com/flagged/photo-1559475555-b26777ed3ab4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D",
              },
              {
                name: "নাসরিন আক্তার",
                role: "Physics & ICT Expert",
                skill: "Quantum Physics",
                image:
                  "https://images.unsplash.com/photo-1758685848006-1bc450061624?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZlbWFsZSUyMHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D",
              },
              {
                name: "তানভীর হাসান",
                role: "Chemistry Specialist",
                skill: "Organic Chemistry",
                image:
                  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D",
              },
              {
                name: "ফারহানা সিদ্দিকা",
                role: "Bangla & Humanities",
                skill: "Linguistics & History",
                image:
                  "https://images.unsplash.com/photo-1659355893735-ab18e2e73ba8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGZlbWFsZSUyMHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D",
              },
            ].map((teacher, i) => (
              <div key={i} className="group relative text-center">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 mb-6 border border-slate-200">
                  <img
                    src={teacher.image}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110"
                    alt={teacher.name}
                  />
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-brand-green transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
                  {teacher.role}
                </p>
                <div className="mt-4 px-3 py-1 bg-brand-green/5 text-[10px] font-black text-brand-green rounded-full mx-auto w-fit uppercase tracking-wider">
                  {teacher.skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Key Features */}
      <section className="py-32 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl font-black leading-tight tracking-tighter">
                কেন কমেন্টারি কোচিং সেন্টার বেছে নেবেন?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Mic2 />,
                    title: "আধুনিক ডিজিটাল ক্লাস",
                    desc: "মাল্টিমিডিয়া ক্লাসরুম ও অনলাইন ব্যাকআপ",
                  },
                  {
                    icon: <Users />,
                    title: "অভিজ্ঞ মেন্টরশিপ",
                    desc: "শীর্ষ বিশ্ববিদ্যালয়ের মেধাবী মেন্টর",
                  },
                  {
                    icon: <Trophy />,
                    title: "সফলতার রেকর্ড",
                    desc: "২০১৬ সাল থেকে শতভাগ পাশের হার",
                  },
                  {
                    icon: <Clock />,
                    title: "মডেল টেস্ট",
                    desc: "প্রতি সপ্তাহে নিয়মিত পরীক্ষা ও রিপোর্ট",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="space-y-4 p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-green">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-blue-100/60 font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 p-8">
                <div className="h-24 w-24 bg-brand-red rounded-full flex items-center justify-center text-white font-black text-xl rotate-12 shadow-lg">
                  FREE!
                </div>
              </div>
              <div className="space-y-6 text-slate-900 relative z-10">
                <h3 className="text-3xl font-black italic tracking-tighter text-brand-blue">
                  আমাদের বিশেষ সুবিধা
                </h3>
                <ul className="space-y-5">
                  {[
                    "নিজস্ব লাইব্রেরি ও পড়ার সুবিধা।",
                    "দুর্বল শিক্ষার্থীদের জন্য সেপারেট কেয়ার।",
                    "এসএমএস এর মাধ্যমে অভিভাবক যোগাযোগ।",
                    "শীতাতপ নিয়ন্ত্রিত আধুনিক ক্যাম্পাস।",
                  ].map((list, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-lg font-bold"
                    >
                      <CheckCircle className="h-6 w-6 text-brand-green shrink-0" />
                      {list}
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                  <Button className="w-full h-16 rounded-2xl bg-brand-green hover:bg-brand-green/90 text-xl font-bold active:scale-95 transition-transform">
                    আরো জানতে কল করুন
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Admission Form Section */}
      <section id="admission" className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 order-2 lg:order-1">
              <h2 className="text-brand-blue text-5xl font-black tracking-tighter">
                ভর্তি ফরম (ফ্রি বুকিং)
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-500 uppercase tracking-widest pl-2">
                      ছাত্রের নাম
                    </label>
                    <input
                      type="text"
                      placeholder="পুরো নাম লিখুন"
                      className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-green font-bold text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-500 uppercase tracking-widest pl-2">
                      ফোন নম্বর
                    </label>
                    <input
                      type="tel"
                      placeholder="০১৭XXXXXXXX"
                      className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-green font-bold text-slate-900"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-500 uppercase tracking-widest pl-2">
                    শ্রেণী পছন্দ করুন
                  </label>
                  <select className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-green font-bold text-slate-900">
                    <option>শ্রেণী ১-৫</option>
                    <option>শ্রেণী ৬-৮</option>
                    <option>শ্রেণী ৯-১০ (এসএসসি)</option>
                    <option>শ্রেণী ১১-১২ (এইচএসসি)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-500 uppercase tracking-widest pl-2">
                    ঠিকানা
                  </label>
                  <textarea
                    placeholder="আপনার এলাকা বা ঠিকানা"
                    rows={3}
                    className="w-full p-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-green font-bold text-slate-900"
                  ></textarea>
                </div>
                <Button className="w-full h-16 rounded-2xl bg-brand-red hover:bg-red-700 text-xl font-bold shadow-xl shadow-brand-red/20 transition-all active:scale-95">
                  আবেদন করুন
                  <Send className="ml-2 h-6 w-6" />
                </Button>
              </form>
            </div>

            <div className="order-1 lg:order-2 space-y-12">
              <div className="p-10 rounded-[3rem] bg-brand-blue text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-3xl font-black mb-8 italic tracking-tight">
                  সরাসরি দেখা করুন
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-brand-green uppercase tracking-widest mb-1">
                        ঠিকানা
                      </p>
                      <p className="text-xl font-bold leading-tight">
                        Rajbari, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                      <Phone className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-brand-green uppercase tracking-widest mb-1">
                        ফোন
                      </p>
                      <p className="text-xl font-bold leading-tight">
                        +৮৮০ ১২৩৪ ৫৬৭৮৯০
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-1 point-gradient-green rounded-[3rem]">
                <div className="bg-white p-10 rounded-[2.85rem] border border-slate-100 text-center space-y-4 shadow-xl shadow-slate-200 transition-colors duration-300">
                  <h4 className="text-2xl font-black text-brand-blue tracking-tighter italic">
                    "২০১৬ সাল থেকে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ বিনির্মাণে
                    আমরা প্রতিশ্রুতিবদ্ধ।"
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-12 bg-slate-900 text-center text-slate-500 border-t border-slate-800">
        <p className="text-sm font-black uppercase tracking-[0.3em] font-sans">
          © {new Date().getFullYear()} কমেন্টারি কোচিং সেন্টার | স্থাপিত ২০১৬
        </p>
      </footer>
    </div>
  );
}
