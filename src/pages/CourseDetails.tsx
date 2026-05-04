import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  BookOpen, Clock, Users, CheckCircle, ArrowLeft, 
  ChevronRight, PlayCircle, FileText, HelpCircle, GraduationCap
} from "lucide-react";
import { Button } from "../components/ui/Button";

const coursesData: Record<string, any> = {
  "primary": {
    title: "প্রাথমিক (১-৫)",
    description: "বাংলা, ইংরেজি ও গণিতের মজবুত ভিত্তি গড়ার জন্য আমাদের বিশেষ প্রোগ্রাম। প্রতিটি শিশুর জন্য রয়েছে যত্নশীল মেন্টরশিপ।",
    fullDescription: "প্রাথমিক শিক্ষার ভিত্তি সঠিক হলে পরবর্তী শিক্ষা জীবন অনেক সহজ হয়ে যায়। আমাদের এই কোর্সে আমরা শিশুদের বাংলা শুদ্ধ উচ্চারণ, ইংরেজির বেসিক গ্রামার এবং গণিতের প্রাথমিক ধারণাগুলো খুব সহজে বুঝিয়ে দিই।",
    price: "১৫০০",
    duration: "মাসিক",
    level: "প্রাথমিক",
    subjects: ["বাংলা", "ইংরেজি", "গণিত"],
    features: [
      "শুদ্ধ বানান ও সুনির্ভুল উচ্চারণ শিল্প",
      "ইংরেজির বেসিক গ্রামার ও ভোকাবুলারি",
      "গণিতের ভীতি দূর করার সহজ কৌশল",
      "অঙ্কন ও হাতের লেখা উন্নত করার ক্লাস",
      "সচিত্র ডিজিটাল ক্লাসরুম প্রেজেন্টেশন"
    ],
    curriculum: [
      { unit: "বর্ণমালা ও ব্যাকরণ", topics: ["বাংলা বর্ণমালা", "সহজ ইংরেজি গ্রামার", "সংখ্যা ও গণনা"] },
      { unit: "সাহিত্য ও গল্প", topics: ["গল্পের মাধ্যমে শিক্ষা", "কবিতা আবৃত্তি", "সহজ অনুবাদ"] },
      { unit: "প্রাথমিক গণিত", topics: ["যোগ-বিয়োগ-গুণ-ভাগ", "জ্যামিতির ধারণা", "নামতা শিক্ষা"] }
    ]
  },
  "junior": {
    title: "জুনিয়র (৬-৮)",
    description: "সৃজনশীল পদ্ধতিতে বাংলা, ইংরেজি, গণিত ও বিজ্ঞানের নিরবচ্ছিন্ন প্রস্তুতি। আইসিটি ও সাধারণ জ্ঞানের বিশেষ ক্লাস।",
    fullDescription: "মাধ্যমিক স্তরে পা রাখার আগে শিক্ষার্থীদের সৃজনশীল পদ্ধতির সাথে অভ্যস্ত হতে হয়। আমাদের এই কোর্সে আমরা শিক্ষার্থীদের সিলেবাসের প্রতিটি অংশ এমনভাবে শেষ করি যেন তারা ভবিষ্যতে উচ্চতর ক্লাসে ভালো ভিত্তি পায়।",
    price: "২০০০",
    duration: "মাসিক",
    level: "জুনিয়র",
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "আইসিটি"],
    features: [
      "সৃজনশীল প্রশ্ন তৈরির পূর্ণাঙ্গ গাইডলাইন",
      "গণিত ও বিজ্ঞানের প্র্যাকটিক্যাল ধারণা",
      "আইসিটি বিষয়ের কম্পিউটার ভিত্তিক শিক্ষা",
      "সাপ্তাহিক টিউটোরিয়াল ও রিপোর্ট কার্ড",
      "ভোকাবুলারি ও গ্রামার মাস্টারি"
    ],
    curriculum: [
      { unit: "কোর সাবজেক্টস", topics: ["উন্নত ইংরেজি গ্রামার", "পাটিগণিত ও বীজগণিত", "ভৌত ও জীববিজ্ঞান"] },
      { unit: "ডিজিটাল লিটারেসি", topics: ["আইসিটি বেসিক", "এমএস অফিস পরিচিতি", "ইন্টারনেট নিরাপত্তা"] },
      { unit: "সৃজনশীল দক্ষতা", topics: ["অনুচ্ছেদ লিখন", "তথ্য বিশ্লেষণ", "সমসাময়িক বিশ্ব"] }
    ]
  },
  "secondary": {
    title: "সেকেন্ডারি (৯-১০)",
    description: "এসএসসি পরীক্ষার পূর্ণাঙ্গ প্রস্তুতি। পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান ও উচ্চতর গণিতের জটিল বিষয়গুলোর সহজ সমাধান।",
    fullDescription: "এসএসসি জীবনের প্রথম বড় পরীক্ষা। এই সময় প্রতিটি শিক্ষার্থীর প্রয়োজন সঠিক মেন্টরশিপ ও বিজ্ঞানসম্মত শিখন পদ্ধতি। আমরা বিজ্ঞানের জটিল বিষয়গুলো প্র্যাকটিক্যাল মডেলে উপস্থাপন করি যাতে ছাত্ররা তা অনুধাবন করতে পারে।",
    price: "২৫০০",
    duration: "মাসিক",
    level: "সেকেন্ডারি (SSC)",
    subjects: ["পদার্থ", "রসায়ন", "জীববিজ্ঞান", "উচ্চতর গণিত", "ইংরেজি"],
    features: [
      "এসএসসি টেস্ট পেপার সলভিং সেশন",
      "ল্যাবরেটরি এক্সপেরিমেন্ট ভিডিও ডেমো",
      "ম্যাথমেটিক্যাল প্রবলেম সলভিং ট্রিকস",
      "অধ্যায় ভিত্তিক স্পেশাল নোটস",
      "চব্বিশ ঘণ্টা অনলাইন হেল্প ডেস্ক"
    ],
    curriculum: [
      { unit: "বিজ্ঞান ও গণিত", topics: ["পদার্থের গতিসূত্র", "রাসায়নিক বিক্রিয়া", "ট্রিগোনোমেট্রি"] },
      { unit: "জীববিজ্ঞান ও পরিবেশ", topics: ["কোষ ও টিস্যু", "পরিবেশ বিজ্ঞান", "মানব শরীরতত্ত্ব"] },
      { unit: "ভাষা ও যোগাযোগ", topics: ["ক্রিয়েটিভ রাইটিং", "প্রফেশনাল গ্রামার", "রিডিং কমপ্রিহেনশন"] }
    ]
  },
  "higher-secondary": {
    title: "উচ্চ মাধ্যমিক (১১-১২)",
    description: "এইচএসসি ও এডমিশন প্রস্তুতির এক নির্ভরযোগ্য ঠিকানা। একাডেমিক সিলেবাসের পাশাপাশি ইউনিভার্সিটি ও মেডিকেল এডমিশন গাইডেন্স।",
    fullDescription: "উচ্চ মাধ্যমিকের সিলেবাস অনেক বড়। তাই শুরু থেকেই পরিকল্পিতভাবে পড়াশোনা করা জরুরি। আমাদের এই কোর্সে আমরা এইচএসসি সিলেবাস শেষ করার পাশাপাশি শিক্ষার্থীদের ঢাকা বিশ্ববিদ্যালয়, বুয়েট ও মেডিকেল ভর্তির উপযোগী করে গড়ে তুলি।",
    price: "৩০০০",
    duration: "মাসিক",
    level: "উচ্চ মাধ্যমিক (HSC)",
    subjects: ["Physics", "Chemistry", "Biology", "Higher Math", "English", "ICT"],
    features: [
      "এডমিশন লেভেল কোশ্চেন ব্যাংক সলভিং",
      "ইঞ্জিনিয়ারিং ও মেডিকেল ক্যারিয়ার গাইডেন্স",
      "আইসিটি ও প্রোগ্রামিং ফান্ডামেন্টালস",
      "বিখ্যাত লেখকের বই ভিত্তিক স্পেশাল নোটস",
      "মডেল টেস্ট ও ডেমো ভাইভা সেশন"
    ],
    curriculum: [
      { unit: "উচ্চতর বিজ্ঞান", topics: ["অর্গানিক কেমিস্ট্রি", "ভেক্টর ও ক্যালকুলাস", "জেনেটিক্স"] },
      { unit: "প্রযুক্তি ও মাধ্যম", topics: ["সি-প্রোগ্রামিং", "ডেটাবেস ম্যানেজমেন্ট", "এইচটিএমএল"] },
      { unit: "ক্যারিয়ার বুস্ট", topics: ["এডমিশন টিপস", "মক টেস্ট", "সাইকোলজিক্যাল কাউন্সিলিং"] }
    ]
  }
};

export default function CourseDetails() {
  const { courseId } = useParams();
  const course = coursesData[courseId || ""];

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">কোর্সটি খুঁজে পাওয়া যায়নি</h2>
        <Link to="/courses">
          <Button variant="outline">কোর্সসমূহে ফিরে যান</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Course Header */}
      <div className="bg-brand-blue text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-xs">
            <ArrowLeft className="h-4 w-4" />
            ফিরে যান
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-brand-green text-sm font-black uppercase tracking-widest border border-white/20">
                {course.level} বিভাগ
              </div>
              <h1 className="text-4xl lg:text-6xl font-black tracking-tighter leading-tight italic">{course.title}</h1>
              <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto lg:mx-0">
                {course.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-green">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-blue-300">ভর্তি</p>
                    <p className="text-lg font-bold">চলমান</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-green">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-blue-300">পদ্ধতি</p>
                    <p className="text-lg font-bold">লিমিটেড ব্যাচ</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 shadow-2xl shadow-brand-red/20 inline-block w-full sm:w-auto">
                <Button className="h-16 px-12 bg-brand-red hover:bg-red-700 text-xl font-black rounded-2xl w-full sm:w-auto active:scale-95 transition-all">
                  ভর্তি হতে ক্লিক করুন
                </Button>
              </div>
            </div>
            <div className="relative group hidden lg:block">
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform group-hover:rotate-1 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-brand-blue/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]">
                <PlayCircle className="h-20 w-20 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-16">
            <section className="space-y-6">
              <h2 className="text-3xl font-black text-brand-blue tracking-tighter italic flex items-center gap-3">
                <FileText className="h-8 w-8 text-brand-green" />
                কোর্স পরিচিতি
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {course.fullDescription}
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-black text-brand-blue tracking-tighter italic">আমাদের কারিকুলাম</h2>
              <div className="space-y-4">
                {course.curriculum.map((item: any, i: number) => (
                  <div key={i} className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold text-slate-800">{item.unit}</h3>
                      <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-[10px] font-black rounded-lg">ইউনিট {i + 1}</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.topics.map((topic: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-500 font-medium">
                          <CheckCircle className="h-4 w-4 text-brand-green" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-black text-brand-blue tracking-tighter italic">বিশেষ সুবিধা</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="h-10 w-10 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green shrink-0">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <p className="text-slate-700 font-bold leading-tight pt-2">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 space-y-8 text-center">
                <div className="space-y-2">
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest">কোর্স ফি</p>
                  <h3 className="text-5xl font-black text-brand-blue tracking-tighter">৳{course.price}</h3>
                  <p className="text-brand-green font-bold text-lg italic">/ {course.duration}</p>
                </div>
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <Button className="w-full h-16 rounded-2xl bg-brand-green text-xl font-black shadow-lg shadow-brand-green/20">ভর্তি হন</Button>
                  <Button variant="outline" className="w-full h-16 rounded-2xl border-slate-200 text-slate-600 font-bold">ডেমো ক্লাস দেখুন</Button>
                </div>
                <p className="text-xs text-slate-400 font-medium">১০১% মানসম্মত শিক্ষার নিশ্চয়তা।</p>
              </div>

              <div className="bg-brand-red p-10 rounded-[3rem] text-white space-y-6">
                <HelpCircle className="h-12 w-12 text-white opacity-80" />
                <h3 className="text-2xl font-black tracking-tight italic leading-tight">ভর্তি সংক্রান্ত কোনো প্রশ্ন আছে?</h3>
                <p className="text-red-100 font-bold opacity-80 leading-relaxed">
                  আমাদের দক্ষ মেন্টররা আপনার প্রতিটি প্রশ্নের উত্তর দিতে প্রস্তুত।
                </p>
                <div className="pt-4">
                  <div className="text-2xl font-black tracking-tighter">+৮৮০ ১২৩৪ ৫৬৭৮৯০</div>
                  <div className="text-[10px] uppercase font-black tracking-widest opacity-60 mt-1">কল করুন সরাসরি</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
