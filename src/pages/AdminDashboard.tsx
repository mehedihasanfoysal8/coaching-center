import * as React from "react";
import { useAuth } from "../components/AuthContext";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Plus, Trash2, Edit3, Save, X, BookOpen, Bell, GraduationCap, Users } from "lucide-react";
import { cn, formatCurrency } from "../lib/utils";

export default function AdminDashboard() {
  const { isAdmin } = useAuth();
  const [activeTab, setActiveTab] = React.useState<"courses" | "notices" | "results" | "students">("courses");
  
  const [courses, setCourses] = React.useState<any[]>([]);
  const [notices, setNotices] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Form states
  const [courseForm, setCourseForm] = React.useState({ title: "", description: "", price: "", duration: "" });
  const [noticeForm, setNoticeForm] = React.useState({ title: "", content: "", priority: "medium" });

  React.useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === "courses") {
        const snap = await getDocs(collection(db, "courses"));
        setCourses(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } else if (activeTab === "notices") {
        const snap = await getDocs(query(collection(db, "notices"), orderBy("createdAt", "desc")));
        setNotices(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "courses"), {
        ...courseForm,
        price: Number(courseForm.price),
        active: true,
        createdAt: new Date().toISOString()
      });
      setCourseForm({ title: "", description: "", price: "", duration: "" });
      fetchData();
    } catch (err) {
      alert("Failed to create course");
    }
  };

  const handleCreateNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "notices"), {
        ...noticeForm,
        createdAt: new Date().toISOString()
      });
      setNoticeForm({ title: "", content: "", priority: "medium" });
      fetchData();
    } catch (err) {
      alert("Failed to create notice");
    }
  };

  const handleDelete = async (coll: string, id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await deleteDoc(doc(db, coll, id));
      fetchData();
    } catch (err) {
      alert("Delete failed");
    }
  };

  if (!isAdmin) return <div className="p-20 text-center text-red-500 font-bold">Access Denied</div>;

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-10 space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">Admin Control Panel</h1>
          <p className="text-slate-500">Manage your academy operations, curriculum, and communications.</p>
        </header>

        <div className="flex flex-wrap gap-2 mb-8 bg-white p-1.5 rounded-lg border border-slate-200 shadow-sm w-fit">
          {[
            { id: "courses", label: "Courses", icon: BookOpen },
            { id: "notices", label: "Notices", icon: Bell },
            { id: "results", label: "Results", icon: GraduationCap },
            { id: "students", label: "Students", icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md transition-all text-sm font-semibold",
                activeTab === tab.id 
                  ? "bg-emerald-600 text-white shadow-sm" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-emerald-600"
              )}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Area */}
          <div className="lg:col-span-2 space-y-6">
            {activeTab === "courses" && (
              <div className="space-y-4">
                {courses.map((course) => (
                  <Card key={course.id} className="flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all border-slate-200">
                    <CardContent className="p-4 flex flex-1 items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center font-bold">
                          {course.title.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{course.title}</h4>
                          <p className="text-xs text-slate-500">{course.duration} • {formatCurrency(course.price)}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="p-2"><Edit3 className="h-4 w-4" /></Button>
                        <Button variant="outline" size="sm" className="p-2 text-red-500 hover:bg-red-50 border-red-100" onClick={() => handleDelete("courses", course.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {courses.length === 0 && !loading && <p className="text-center py-10 text-slate-400 font-medium">No courses found.</p>}
              </div>
            )}

            {activeTab === "notices" && (
              <div className="space-y-4">
                {notices.map((notice) => (
                  <Card key={notice.id}>
                    <CardContent className="p-4 flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900">{notice.title}</h4>
                          <span className={cn(
                            "text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full",
                            notice.priority === "high" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                          )}>
                            {notice.priority}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 line-clamp-2">{notice.content}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{new Date(notice.createdAt).toLocaleString()}</p>
                      </div>
                      <Button variant="outline" size="sm" className="p-2 text-red-500" onClick={() => handleDelete("notices", notice.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {loading && <div className="p-10 text-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto"></div></div>}
          </div>

          {/* Creation Form Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24 border-emerald-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Plus className="h-5 w-5 text-emerald-600" />
                  Add New {activeTab === "courses" ? "Course" : "Notice"}
                </CardTitle>
                <CardDescription>Fill in the details below to publish.</CardDescription>
              </CardHeader>
              <CardContent>
                {activeTab === "courses" ? (
                  <form onSubmit={handleCreateCourse} className="space-y-4">
                    <Input 
                      label="Title" 
                      placeholder="e.g. Physics Advance" 
                      value={courseForm.title}
                      onChange={e => setCourseForm({...courseForm, title: e.target.value})}
                      required 
                    />
                    <Input 
                      label="Price ($)" 
                      type="number" 
                      placeholder="e.g. 50" 
                      value={courseForm.price}
                      onChange={e => setCourseForm({...courseForm, price: e.target.value})}
                      required 
                    />
                    <Input 
                      label="Duration" 
                      placeholder="e.g. 3 Months" 
                      value={courseForm.duration}
                      onChange={e => setCourseForm({...courseForm, duration: e.target.value})}
                    />
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Description</label>
                      <textarea 
                        className="w-full min-h-[100px] rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500"
                        value={courseForm.description}
                        onChange={e => setCourseForm({...courseForm, description: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Create Course</Button>
                  </form>
                ) : activeTab === "notices" ? (
                  <form onSubmit={handleCreateNotice} className="space-y-4">
                    <Input 
                      label="Notice Title" 
                      placeholder="e.g. Exam Scheduled" 
                      value={noticeForm.title}
                      onChange={e => setNoticeForm({...noticeForm, title: e.target.value})}
                      required 
                    />
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Priority</label>
                      <select 
                        className="w-full h-10 rounded-md border border-slate-200 bg-white px-3 text-sm focus:ring-2 focus:ring-emerald-500"
                        value={noticeForm.priority}
                        onChange={e => setNoticeForm({...noticeForm, priority: e.target.value})}
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Content</label>
                      <textarea 
                        className="w-full min-h-[120px] rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500"
                        value={noticeForm.content}
                        onChange={e => setNoticeForm({...noticeForm, content: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Broadcast Notice</Button>
                  </form>
                ) : (
                  <p className="text-slate-400 text-sm italic">Manager for {activeTab} coming soon...</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
