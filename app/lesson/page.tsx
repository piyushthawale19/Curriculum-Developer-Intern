"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, PlayCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LessonPage() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Set Up the Stage",
      desc: "Choose 3 Sprites like a Cat, a Dog, and a Bird. Put them in a line on the screen.",
      checkpoint: "Do your sprites have names? It's easier if you name them Sprite 1, 2, and 3!",
      blocks: ["when green flag clicked", "go to x:__, y:__"]
    },
    {
      id: 2,
      title: "Sprite 1 Starts Talking",
      desc: "Sprite 1 says 'Hello everyone!' and then sends a 'broadcast' message called 'sprite2_turn'.",
      checkpoint: "Click the green flag. Does Sprite 1 speak?",
      blocks: ["say Hello! for 2 seconds", "broadcast [sprite2_turn]"]
    },
    {
      id: 3,
      title: "Sprite 2 Listens",
      desc: "Use the 'When I Receive [sprite2_turn]' block in Sprite 2. Make it say 'Hi Sprite 1!'",
      checkpoint: "Wait! Make sure Sprite 2 only speaks after Sprite 1 is finished.",
      blocks: ["when I receive [sprite2_turn]", "say Hi there! for 2 seconds"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-primary text-xs font-black uppercase tracking-widest">
           Grade 3-5 Curriculum Unit
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-display font-black leading-tight">Interlinking Sprites <br className="hidden md:block" /> using Broadcast</h1>
          <p className="text-secondary text-xl max-w-2xl leading-relaxed">
            A comprehensive 60-minute lesson designed to teach sequencing and event-driven programming through visual logic.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-8 pt-4">
           {[
             { label: "Duration", value: "60 Minutes" },
             { label: "Level", value: "Early Elementary" },
             { label: "Concept", value: "Broadcast & Receive" }
           ].map((item, i) => (
             <div key={i} className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60">{item.label}</p>
                <p className="text-lg font-black">{item.value}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Progress Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={cn(
                "w-full text-left p-6 rounded-2xl border transition-all flex items-start gap-4",
                activeStep === step.id 
                  ? "bg-primary border-primary text-white shadow-xl shadow-primary/20" 
                  : "bg-white border-border text-secondary hover:border-primary/50"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center font-bold",
                activeStep === step.id ? "bg-white text-primary" : "bg-slate-100 text-secondary"
              )}>
                {step.id}
              </div>
              <span className="font-bold">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Step View */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-4xl border border-border shadow-sm space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-display font-bold">{steps[activeStep - 1].title}</h2>
              <p className="text-secondary text-lg leading-relaxed">
                {steps[activeStep - 1].desc}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 mb-4 text-primary font-bold">
                <Code2 className="w-5 h-5" />
                <span>Blocks to Use:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {steps[activeStep - 1].blocks.map((block, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-border rounded-lg font-mono text-sm text-primary shadow-sm">
                    {block}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex gap-4">
              <Info className="w-6 h-6 text-amber-600 shrink-0" />
              <div>
                <p className="font-bold text-amber-900">Checkpoint</p>
                <p className="text-amber-800 text-sm leading-relaxed">{steps[activeStep - 1].checkpoint}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-4xl text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <PlayCircle className="w-6 h-6" />
              </div>
              <p className="font-bold">Pro Tip: Press the Red Stop button to reset your project!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Debugging Section */}
      <section className="bg-slate-50 p-12 rounded-4xl border border-border">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold">Help! Something is Wrong!</h2>
          <p className="text-secondary">Debugging tips for common Scratch mistakes.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: "Sprite 2 speaks at the same time as Sprite 1!", a: "Check if Sprite 1 is sending the broadcast AFTER its 'say' block, not before." },
            { q: "The bird won't talk at all!", a: "Make sure the bird has the 'When I Receive' block with the RIGHT message name." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-border space-y-3">
              <div className="flex items-center gap-2 text-red-500 font-bold">
                <AlertCircle className="w-5 h-5" />
                <span>{item.q}</span>
              </div>
              <p className="text-secondary text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Code2 } from "lucide-react";
