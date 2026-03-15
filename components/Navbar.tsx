"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
            Scratch<span className="text-primary">Mastery</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#overview" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Overview
          </Link>
          <Link href="/lesson" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Lesson Plan
          </Link>
          <Link href="/resources" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Resources
          </Link>
          <Link
            href="/admin"
            className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
          >
            Admin Access
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border p-6 flex flex-col gap-4 shadow-xl">
          <Link href="/#overview" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
            Overview
          </Link>
          <Link href="/lesson" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
            Lesson Plan
          </Link>
          <Link href="/resources" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
            Resources
          </Link>
          <Link
            href="/admin"
            className="w-full py-3 bg-primary text-white text-center rounded-xl font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Admin Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
