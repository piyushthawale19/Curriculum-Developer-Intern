"use client";

import { useState, useEffect } from "react";
import { Save, RefreshCw, LogOut, CheckCircle, ExternalLink, BookOpen, LayoutDashboard } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminDashboard() {
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const res = await fetch("/api/content");
      if (res.ok) {
        const data = await res.json();
        setContent(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatus("");

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

  const handleLogout = () => {
    // In a real app, clear cookie via API
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/admin");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RefreshCw className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Lesson Title", value: content?.lessonTitle || "Broadcast Mastery", color: "bg-blue-500" },
          { label: "Starter Link", value: "Available", color: "bg-indigo-500" },
          { label: "Final Solution", value: "Available", color: "bg-purple-500" },
          { label: "Quiz Questions", value: "5 Active", color: "bg-green-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-border shadow-sm">
             <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">{stat.label}</p>
             <p className="text-xl font-black">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <section className="bg-white p-10 rounded-4xl border border-border shadow-sm">
              <h3 className="text-xl font-black mb-8">System Overview</h3>
              <div className="space-y-6">
                 <div className="flex justify-between items-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="space-y-1">
                       <p className="font-bold">Landing Page Status</p>
                       <p className="text-xs text-secondary">Currently live for reviewers</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-[10px] font-black uppercase rounded-full">Active</span>
                 </div>
                 <div className="flex justify-between items-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="space-y-1">
                       <p className="font-bold">Content Version</p>
                       <p className="text-xs text-secondary">v1.2.0 - Interlinking Sprites</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black uppercase rounded-full">Updated</span>
                 </div>
              </div>
           </section>
        </div>

        <div className="space-y-8">
           <section className="bg-slate-900 p-10 rounded-4xl text-white space-y-8">
              <h3 className="text-xl font-black">Quick Actions</h3>
              <div className="space-y-3">
                {[
                  { label: "Manage Lesson", href: "/admin/lesson", icon: <BookOpen className="w-4 h-4" /> },
                  { label: "Edit Resources", href: "/admin/resources", icon: <ExternalLink className="w-4 h-4" /> },
                  { label: "Setup Quiz", href: "/admin/quiz", icon: <CheckCircle className="w-4 h-4" /> },
                  { label: "Agenda Editor", href: "/admin/agenda", icon: <Save className="w-4 h-4" /> },
                ].map((action, i) => (
                  <Link 
                    key={i} 
                    href={action.href}
                    className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
                  >
                    <div className="flex items-center gap-3">
                       {action.icon}
                       <span className="font-bold text-sm tracking-tight">{action.label}</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-white/30 group-hover:text-white transition-all" />
                  </Link>
                ))}
              </div>
           </section>
        </div>
      </div>
    </div>
  );
}
