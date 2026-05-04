import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/Card";
import { GraduationCap } from "lucide-react";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await updateProfile(user, { displayName: name });
      
      // Create Firestore profile
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: name,
        role: "student",
        createdAt: new Date().toISOString(),
      });
      
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-slate-50 transition-colors duration-300">
      <Card className="w-full max-w-md border-0 shadow-2xl rounded-3xl overflow-hidden bg-white transition-colors">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto bg-brand-green/10 p-4 rounded-3xl w-fit mb-6">
            <GraduationCap className="h-10 w-10 text-brand-green" />
          </div>
          <CardTitle className="text-3xl font-bold text-slate-900">অ্যাকাউন্ট তৈরি করুন</CardTitle>
          <CardDescription className="text-slate-500 font-medium pt-2 transition-colors">আমাদের একাডেমিতে যোগ দিন এবং আপনার শেখার যাত্রা শুরু করুন</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleRegister} className="space-y-6">
            <Input 
              label="পূর্ণ নাম" 
              placeholder="আপনার নাম"
              className="rounded-xl border-slate-200 bg-white h-12 text-slate-900"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input 
              label="ইমেইল ঠিকানা" 
              type="email" 
              placeholder="আপনার ইমেইল"
              className="rounded-xl border-slate-200 bg-white h-12 text-slate-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input 
              label="পাসওয়ার্ড" 
              type="password" 
              placeholder="••••••••"
              className="rounded-xl border-slate-200 bg-white h-12 text-slate-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-sm text-brand-red font-bold animate-shake">{error}</p>}
            <Button type="submit" className="w-full h-12 rounded-xl bg-brand-green hover:bg-brand-green/90 font-bold shadow-lg active:scale-95 transition-transform" disabled={loading}>
              {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "রেজিস্টার করুন"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center pb-10">
          <p className="text-sm text-slate-500 font-medium transition-colors">
            ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
            <Link to="/login" className="text-brand-red font-bold hover:underline underline-offset-4">
              লগইন করুন
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
