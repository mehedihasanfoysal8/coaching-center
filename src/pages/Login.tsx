import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/Card";
import { BookOpen, Chrome } from "lucide-react";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Failed to login. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Ensure profile exists
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          role: "student",
          createdAt: new Date().toISOString(),
        });
      }
      navigate("/dashboard");
    } catch (err: any) {
      setError("Google Login failed.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-slate-50 transition-colors duration-300">
      <Card className="w-full max-w-md border-0 shadow-2xl rounded-3xl overflow-hidden bg-white transition-colors">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto bg-brand-green/10 p-4 rounded-3xl w-fit mb-6">
            <BookOpen className="h-10 w-10 text-brand-green" />
          </div>
          <CardTitle className="text-3xl font-bold text-slate-900">স্বাগতম</CardTitle>
          <CardDescription className="text-slate-500 font-medium pt-2 transition-colors">আপনার ড্যাশবোর্ড অ্যাক্সেস করতে লগইন করুন</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleLogin} className="space-y-6">
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
              {loading ? "লগইন হচ্ছে..." : "লগইন করুন"}
            </Button>
          </form>
          
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase font-bold tracking-widest">
              <span className="bg-white px-4 text-slate-400 transition-colors">অথবা</span>
            </div>
          </div>

          <Button variant="outline" className="w-full h-12 rounded-xl gap-3 border-slate-200 font-bold hover:bg-slate-50 transition-colors" onClick={handleGoogleLogin}>
            <Chrome className="h-5 w-5 text-brand-red" />
            গুগল দিয়ে লগইন
          </Button>
        </CardContent>
        <CardFooter className="justify-center pb-10">
          <p className="text-sm text-slate-500 font-medium transition-colors">
            অ্যাকাউন্ট নেই?{" "}
            <Link to="/register" className="text-brand-red font-bold hover:underline underline-offset-4">
              রেজিস্টার করুন
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
