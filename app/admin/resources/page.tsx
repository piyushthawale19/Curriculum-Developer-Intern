"use client";

import { useState, useEffect } from "react";
import { Save, RefreshCw, Link2, Globe, FileText } from "lucide-react";

export default function ManageResources() {
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
        setStatus("Resources updated successfully!");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (err) {
      setStatus("Error saving changes.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!content) return <RefreshCw className="animate-spin mx-auto mt-20" />;

  const resourceGroups = [
    { label: "Starter Template", key: "starterLink", icon: <Globe className="w-5 h-5" />, color: "text-blue-500" },
    { label: "Final Scratch Project", key: "finalLink", icon: <Rocket className="w-5 h-5" />, color: "text-indigo-500" },
    { label: "Lesson Plan (PDF)", key: "pdfLink", icon: <FileText className="w-5 h-5" />, color: "text-purple-500" },
  ];

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
         <div className="space-y-1">
            <h2 className="text-3xl font-black">Manage Resources</h2>
            <p className="text-secondary font-medium">Update external links and lesson assets.</p>
         </div>
      </div>

      <form onSubmit={handleUpdate} className="grid lg:grid-cols-1 gap-8">
        <div className="bg-white p-10 rounded-4xl border border-border shadow-sm space-y-10">
          {resourceGroups.map((group) => (
             <div key={group.key} className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className={`${group.color} bg-slate-50 p-3 rounded-xl`}>{group.icon}</div>
                   <h3 className="font-bold">{group.label}</h3>
                </div>
                <div className="relative group">
                   <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                   <input 
                     type="url"
                     value={content[group.key] || ""}
                     onChange={(e) => setContent({ ...content, [group.key]: e.target.value })}
                     placeholder="https://scratch.mit.edu/projects/..."
                     className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                   />
                </div>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest pl-1">Target URL for {group.label}</p>
             </div>
          ))}
        </div>

        <div className="flex items-center justify-between bg-slate-900 p-8 rounded-4xl text-white shadow-2xl">
           <div className="space-y-1">
              <p className="font-black text-lg">Push to Production</p>
              <p className="text-slate-400 text-sm">Review your links before saving.</p>
           </div>
           <div className="flex items-center gap-6">
              {status && <span className="text-green-400 font-bold animate-pulse">{status}</span>}
              <button 
                type="submit"
                disabled={isSaving}
                className="px-8 py-4 bg-primary text-white font-black rounded-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
              >
                {isSaving ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                UPDATE ASSETS
              </button>
           </div>
        </div>
      </form>
    </div>
  );
}

import { Rocket } from "lucide-react";
