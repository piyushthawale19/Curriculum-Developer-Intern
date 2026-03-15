"use client";

import { useState, useEffect } from "react";
import { Save, RefreshCw, Info } from "lucide-react";

export default function ManageLesson() {
  const [content, setContent] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/content").then(res => res.json()).then(data => setContent(data));
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        setStatus("Changes saved successfully!");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (err) {
      setStatus("Error saving changes.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!content) return <RefreshCw className="animate-spin mx-auto mt-20" />;

  return (
    <div className="space-y-12">
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-3xl flex gap-4 text-amber-800">
         <Info className="w-6 h-6 shrink-0" />
         <p className="text-sm font-medium">Any changes made here will reflect immediately on the main lesson page for students.</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-8">
        <section className="bg-white p-10 rounded-4xl border border-border shadow-sm space-y-8">
           <h3 className="text-xl font-black border-b pb-6">Core Lesson Info</h3>
           
           <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                 <label className="text-xs font-black uppercase text-secondary ml-1">Lesson Title</label>
                 <input 
                   type="text" 
                   value={content.lessonTitle || ""} 
                   onChange={(e) => setContent({ ...content, lessonTitle: e.target.value })}
                   className="w-full p-4 bg-slate-50 border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none"
                 />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-black uppercase text-secondary ml-1">Principal Concept</label>
                 <input 
                   type="text" 
                   value="Broadcast & Receive" 
                   disabled
                   className="w-full p-4 bg-slate-100 border border-border rounded-2xl text-secondary"
                 />
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-xs font-black uppercase text-secondary ml-1">Lesson Goal</label>
              <textarea 
                rows={4}
                value={content.lessonGoal || ""} 
                onChange={(e) => setContent({ ...content, lessonGoal: e.target.value })}
                className="w-full p-4 bg-slate-50 border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="What should students achieve today?"
              />
           </div>
        </section>

        <section className="bg-white p-10 rounded-4xl border border-border shadow-sm space-y-8">
           <div className="flex justify-between items-center border-b pb-6">
              <h3 className="text-xl font-black">Curriculum Breakdown</h3>
              <p className="text-xs font-bold text-secondary uppercase tracking-widest">Grades 3-5 Focus</p>
           </div>
           
           <div className="space-y-6">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-2">
                 <label className="text-xs font-black text-primary uppercase">Learning Outcomes</label>
                 <p className="text-sm text-secondary">List key skills students will gain.</p>
                 <textarea className="w-full mt-2 p-4 bg-white border border-border rounded-xl" defaultValue="Understanding Broadcasts, Sequencing Multi-Sprite conversations, Debugging message flow." />
              </div>
           </div>
        </section>

        <div className="flex items-center justify-between sticky bottom-8 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-border shadow-2xl">
           <p className={`font-bold text-sm ${status.includes("Error") ? "text-red-500" : "text-green-500"}`}>{status}</p>
           <button 
             type="submit"
             disabled={isSaving}
             className="px-8 py-4 bg-primary text-white font-black rounded-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/25"
           >
              {isSaving ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              SAVE CHANGES
           </button>
        </div>
      </form>
    </div>
  );
}
