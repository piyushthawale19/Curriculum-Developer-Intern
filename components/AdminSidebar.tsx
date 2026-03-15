"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  BookOpen, 
  Link2, 
  HelpCircle, 
  Calendar, 
  LogOut,
  Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { label: "Lesson Content", icon: BookOpen, href: "/admin/lesson" },
    { label: "Scratch Resources", icon: Link2, href: "/admin/resources" },
    { label: "Quick Quiz", icon: HelpCircle, href: "/admin/quiz" },
    { label: "Teacher Agenda", icon: Calendar, href: "/admin/agenda" },
  ];

  const handleLogout = () => {
    // Basic logout logic
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/admin");
  };

  return (
    <aside className="w-64 bg-slate-900 text-slate-400 flex flex-col fixed inset-y-0 left-0 z-50">
      <div className="p-8 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <Rocket className="w-5 h-5" />
          </div>
          <span className="font-display font-black text-white tracking-tight">AdminPanel</span>
        </div>
      </div>

      <nav className="flex-1 p-6 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all",
              pathname === item.href 
                ? "bg-primary text-white shadow-lg shadow-primary/20" 
                : "hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-6 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-400 hover:bg-red-500/10 transition-all"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
