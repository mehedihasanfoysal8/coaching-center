import {
  GraduationCap,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 py-20 border-t border-slate-200 font-sans transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          <div className="space-y-8 md:col-span-1">
            <Link to="/" className="flex flex-col gap-6">
              <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-brand-green text-white shadow-xl shadow-brand-green/20">
                <GraduationCap className="h-9 w-9" />
              </div>
              <div>
                <h3 className="text-slate-900 text-2xl font-black tracking-tight">
                  কমেন্টারি কোচিং সেন্টার
                </h3>
                <p className="text-xs font-black text-brand-green uppercase tracking-[0.2em] mt-1">
                  স্থাপিত : ২০১৬ ইং
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 font-medium font-sans">
              ২০১৬ সাল থেকে সফলতার সাথে আমরা প্রতিটি শিক্ষার্থীর মেধাবিকাশে কাজ
              করে আসছি। আমাদের লক্ষ্য আপনার সন্তানের আধুনিক ও মানসম্মত শিক্ষা
              নিশ্চিত করা।
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-brand-blue hover:text-white transition-all active:scale-90 shadow-sm"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-brand-blue hover:text-white transition-all active:scale-90 shadow-sm"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-8 tracking-wide">
              দ্রুত লিঙ্ক
            </h3>
            <ul className="space-y-4 text-base font-semibold">
              <li>
                <Link
                  to="/courses"
                  className="hover:text-brand-green transition-colors"
                >
                  কোর্সসমূহ
                </Link>
              </li>
              <li>
                <Link
                  to="/results"
                  className="hover:text-brand-green transition-colors"
                >
                  ফলাফল পরীক্ষা
                </Link>
              </li>
              <li>
                <Link
                  to="/notices"
                  className="hover:text-brand-green transition-colors"
                >
                  নোটিশ বোর্ড
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-green transition-colors"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-8 tracking-wide">
              একাডেমিক কোর্স
            </h3>
            <ul className="space-y-4 text-base font-semibold">
              <li>
                <Link
                  to="/courses"
                  className="hover:text-brand-green transition-colors"
                >
                  প্রাথমিক (১-৫)
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-brand-green transition-colors"
                >
                  জুনিয়র (৬-৮)
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-brand-green transition-colors"
                >
                  সেকেন্ডারি (৯-১০)
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-brand-green transition-colors"
                >
                  উচ্চ মাধ্যমিক (১১-১২)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-8 tracking-wide">
              যোগাযোগ
            </h3>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-brand-green/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-brand-green shrink-0" />
                </div>
                <span className="text-slate-700">
                  Rajbari, Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-brand-green/10 rounded-lg">
                  <Phone className="h-5 w-5 text-brand-green shrink-0" />
                </div>
                <span className="text-slate-700">+৮৮০ ১২৩৪ ৫৬৭৮৯০</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-brand-green/10 rounded-lg">
                  <Mail className="h-5 w-5 text-brand-green shrink-0" />
                </div>
                <span className="text-slate-700">
                  info@commentarycoaching.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-12 border-t border-slate-200 text-center space-y-6">
          <p className="text-brand-green text-xl md:text-2xl font-black italic tracking-tight">
            "২০১৬ সাল থেকে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ বিনির্মাণে আমরা
            প্রতিশ্রুতিবদ্ধ।"
          </p>
          <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">
            © {new Date().getFullYear()} কমেন্টারি কোচিং সেন্টার। সর্বস্বত্ব
            সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}
