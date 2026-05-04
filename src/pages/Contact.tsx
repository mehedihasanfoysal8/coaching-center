import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent } from "../components/ui/Card";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 transition-colors duration-300">
      <section className="bg-brand-blue py-24 lg:py-32 relative overflow-hidden transition-colors">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/20 text-brand-green rounded-full text-xs font-black uppercase tracking-widest border border-brand-green/30"
          >
            <MessageSquare className="h-4 w-4" />
            সরাসরি যোগাযোগ
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter italic leading-tight"
          >
            আপনার সন্তানের ভবিষ্যতের <br />
            <span className="text-brand-green">জন্য আমরা আছি পাশে।</span>
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
            ভর্তি সংক্রান্ত কিংবা অন্য কোনো তথ্যের জন্য নিচের ফর্মটি পূরণ করুন
            অথবা সরাসরি আমাদের কল করুন।
          </p>
        </div>
      </section>

      <section className="py-24 -mt-20 relative z-20 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-12 bg-white p-10 lg:p-16 rounded-[4rem] shadow-2xl shadow-slate-200 border border-white transition-colors">
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-brand-blue tracking-tighter italic leading-none">
                  যোগাযোগের তথ্য
                </h2>
                <div className="h-1 w-20 bg-brand-green rounded-full"></div>
              </div>

              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="h-16 w-16 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all transform group-hover:rotate-6">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                      ঠিকানা
                    </h4>
                    <p className="text-xl font-bold text-slate-800 leading-tight">
                      Rajbari, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="h-16 w-16 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all transform group-hover:rotate-6">
                    <Phone className="h-8 w-8" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                      ফোন নম্বর
                    </h4>
                    <p className="text-xl font-black text-slate-800 tracking-tight">
                      +৮৮০ ১২৩৪ ৫৬৭৮৯০
                    </p>
                    <p className="text-xs font-bold text-brand-red mt-2 italic uppercase">
                      সকাল ৯টা - রাত ৮টা
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="h-16 w-16 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-all transform group-hover:rotate-6">
                    <Mail className="h-8 w-8" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                      ইমেইল
                    </h4>
                    <p className="text-xl font-bold text-slate-800 leading-tight">
                      info@commentarycenter.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-slate-100 flex gap-4 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-colors cursor-pointer">
                  FB
                </div>
                <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white transition-colors cursor-pointer">
                  YT
                </div>
                <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-brand-green hover:text-white transition-colors cursor-pointer">
                  WA
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl shadow-slate-300/50 rounded-[4rem] overflow-hidden bg-white transition-colors">
              <CardContent className="p-10 lg:p-16 space-y-10">
                <div className="text-center space-y-2">
                  <h3 className="text-4xl font-black text-brand-blue tracking-tighter italic">
                    বার্তা পাঠান
                  </h3>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]">
                    আমরা দ্রুত উত্তর দেওয়ার চেষ্টা করি
                  </p>
                </div>
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("বার্তা পাঠানো হয়েছে!");
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">
                        নাম
                      </label>
                      <Input
                        className="h-14 rounded-2xl bg-slate-50 border-0 focus-visible:ring-brand-green text-lg font-bold text-slate-900"
                        placeholder="আপনার নাম"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">
                        ফোন
                      </label>
                      <Input
                        className="h-14 rounded-2xl bg-slate-50 border-0 focus-visible:ring-brand-green text-lg font-bold text-slate-900"
                        placeholder="ফোন নম্বর"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">
                      ইমেইল
                    </label>
                    <Input
                      className="h-14 rounded-2xl bg-slate-50 border-0 focus-visible:ring-brand-green text-lg font-bold text-slate-900"
                      type="email"
                      placeholder="আপনার ইমেইল"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">
                      আপনার বার্তা
                    </label>
                    <textarea
                      className="w-full min-h-[160px] rounded-[2rem] border-0 bg-slate-50 px-6 py-5 text-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-green font-bold text-slate-800 placeholder:text-slate-400"
                      placeholder="আমরা আপনাকে কীভাবে সাহায্য করতে পারি?"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-3 text-xl h-16 rounded-2xl bg-brand-red hover:bg-red-700 shadow-xl shadow-brand-red/20 font-black active:scale-95 transition-transform"
                  >
                    <Send className="h-6 w-6" />
                    ম্যাসেজ পাঠান
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[400px] bg-slate-200 relative group border border-slate-100">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xl uppercase tracking-[0.5em]">
              Interactive Map Placeholder
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
