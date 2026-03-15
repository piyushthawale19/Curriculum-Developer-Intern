import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Scratch Curriculum | Master Broadcast & Receive",
  description: "A premium educational platform for learning Scratch concepts like Broadcast and Interlinking Sprites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary/20`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <footer className="py-12 px-6 border-t border-border bg-white text-center">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Scratch Curriculum Mastery. Built for Educase India Internship.
          </p>
        </footer>
      </body>
    </html>
  );
}
