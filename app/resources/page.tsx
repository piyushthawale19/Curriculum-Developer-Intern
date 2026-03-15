import { ExternalLink, Download, FileText, LayoutTemplate, SquareCheck } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Scratch Starter Template",
      desc: "Pre-set sprites and backgrounds to help students get started instantly.",
      link: "https://scratch.mit.edu/projects/101/editor/",
      icon: <LayoutTemplate className="w-8 h-8" />,
      color: "bg-blue-500",
      cta: "Open Template"
    },
    {
      title: "Final Solution Project",
      desc: "The complete project showing perfect broadcast interlinking logic.",
      link: "https://scratch.mit.edu/projects/104/",
      icon: <SquareCheck className="w-8 h-8" />,
      color: "bg-green-500",
      cta: "View Solution"
    },
    {
      title: "Lesson Plan (PDF Version)",
      desc: "A downloadable version of this entire curriculum for offline use.",
      link: "/docs/lesson-plan.pdf",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-purple-500",
      cta: "Download PDF"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-display font-black">Deliverables & Assets</h1>
        <p className="text-secondary text-xl max-w-2xl mx-auto">
          Access all the necessary links and documents for the Scratch curriculum assignment.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {resources.map((res, idx) => (
          <div key={idx} className="group relative bg-white p-10 rounded-4xl border border-border card-hover overflow-hidden">
            <div className={`w-16 h-16 ${res.color} text-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-${res.color.split('-')[1]}-200`}>
              {res.icon}
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">{res.title}</h3>
            <p className="text-secondary leading-relaxed mb-8">
              {res.desc}
            </p>
            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-black hover:gap-4 transition-all"
            >
              {res.cta} <ExternalLink className="w-4 h-4" />
            </a>
            
            {/* Background design element */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-5xl p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px]"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">Need teacher notes?</h2>
            <p className="text-slate-400 leading-relaxed">
              We've included pedagogical notes and answer keys within the PDF download to assist 
              with classroom management and assessment.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
              <Download className="w-5 h-5" /> Get Teacher Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
