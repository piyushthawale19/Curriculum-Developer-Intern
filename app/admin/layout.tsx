"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Only show sidebar if we are NOT on the main login page
  const showSidebar = pathname !== "/admin";

  return (
    <div className="min-h-screen bg-slate-50">
      {showSidebar && <AdminSidebar />}
      <main className={showSidebar ? "pl-64" : ""}>
        {showSidebar && (
           <header className="h-20 bg-white border-b border-border sticky top-0 z-40 px-8 flex items-center justify-between">
              <h2 className="text-xl font-display font-black capitalize">
                {pathname.split("/").pop()?.replace("-", " ")}
              </h2>
              <div className="flex items-center gap-4">
                 <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                 <span className="text-sm font-bold text-secondary">Administrator</span>
              </div>
           </header>
        )}
        <div className={showSidebar ? "p-8 max-w-6xl mx-auto" : ""}>
          {children}
        </div>
      </main>
    </div>
  );
}
