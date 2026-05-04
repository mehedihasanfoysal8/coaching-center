import { Link, useNavigate } from "react-router-dom";
import { 
  LogOut, Menu, X, LayoutDashboard, GraduationCap, 
  Facebook, Instagram, Phone, Mail 
} from "lucide-react";
import * as React from "react";
import { useAuth } from "./AuthContext";
import { auth } from "../lib/firebase";
import { Button } from "./ui/Button";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  // Ensure theme is always light
  React.useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  const navLinks = [
    { name: "হোম", path: "/" },
    { name: "কোর্সসমূহ", path: "/courses" },
    { name: "ফলাফল", path: "/results" },
    { name: "আমাদের সম্পর্কে", path: "/about" },
    { name: "যোগাযোগ", path: "/contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-2xl bg-brand-green text-white shadow-lg shadow-brand-green/20 transition-transform hover:scale-105">
              < GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black text-brand-green leading-none tracking-tight">কমেন্টারি কোচিং</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-brand-blue uppercase tracking-widest mt-0.5">সেন্টার</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className="text-sm lg:text-base font-semibold text-slate-700 hover:text-brand-green transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <div className="flex items-center gap-4">
              <Link to={isAdmin ? "/admin" : "/dashboard"}>
                <Button variant="outline" size="sm" className="gap-2 font-bold bg-white text-slate-700 border-slate-200">
                  <LayoutDashboard className="h-4 w-4" />
                  ড্যাশবোর্ড
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2 text-brand-red font-bold hover:bg-red-50">
                <LogOut className="h-4 w-4" />
                লগআউট
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="font-bold text-slate-600">লগইন</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-brand-red hover:bg-red-700 font-bold shadow-lg shadow-brand-red/20 px-6 active:scale-95 transition-all" size="sm">শুরু করুন</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2.5 text-slate-600 bg-slate-100 rounded-xl transition-colors border border-slate-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Full Screen Sidebar */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-full bg-white z-50 md:hidden flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-green text-white shadow-lg shadow-brand-green/20">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-brand-blue">কমেন্টারি কোচিং</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">মেনু বার</span>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="h-12 w-12 flex items-center justify-center rounded-xl bg-slate-200 text-slate-600 active:scale-90 transition-transform">
                  <X className="h-7 w-7" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-10 px-8 space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link 
                      to={link.path} 
                      className="flex items-center text-2xl font-black text-slate-800 py-4 hover:text-brand-green active:scale-95 transition-all border-b border-slate-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-10 border-t border-slate-100 space-y-8 bg-slate-50/50">
                {user ? (
                  <div className="grid gap-4">
                    <Link to={isAdmin ? "/admin" : "/dashboard"} onClick={() => setIsOpen(false)}>
                      <Button className="w-full h-16 gap-3 text-xl font-black bg-brand-blue rounded-2xl">
                        <LayoutDashboard className="h-6 w-6" />
                        ড্যাশবোর্ড
                      </Button>
                    </Link>
                    <Button variant="ghost" className="w-full h-14 gap-3 text-brand-red font-black text-lg" onClick={() => { handleLogout(); setIsOpen(false); }}>
                      <LogOut className="h-6 w-6" />
                      লগআউট
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Link to="/register" onClick={() => setIsOpen(false)}>
                      <Button className="w-full h-18 bg-brand-red hover:bg-red-700 font-black text-2xl rounded-2xl shadow-[0_15px_30px_-5px_rgba(237,28,36,0.3)]">ভর্তি হন</Button>
                    </Link>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full h-16 font-black text-xl rounded-2xl border-2 border-slate-200">লগইন</Button>
                    </Link>
                  </div>
                )}
                
                <div className="flex justify-center gap-10 pt-4">
                  <Facebook className="h-8 w-8 text-slate-400 hover:text-brand-blue" />
                  <Instagram className="h-8 w-8 text-slate-400 hover:text-brand-red" />
                  <Phone className="h-8 w-8 text-slate-400 hover:text-brand-green" />
                  <Mail className="h-8 w-8 text-slate-400 hover:text-brand-green" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
