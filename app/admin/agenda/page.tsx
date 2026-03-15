"use client";

import { useState } from "react";
import { Save, Calendar, Clock, ArrowRight } from "lucide-react";

export default function ManageAgenda() {
  const [agenda, setAgenda] = useState([
    { time: "10 min", label: "Introduction", desc: "Explain the Broadcast concept using real-world analogies." },
    { time: "10 min", label: "Concept Demo", desc: "Show how to use the 'When I Receive' block in Scratch." },
    { time: "25 min", label: "Build Project", desc: "Students build the 3-Sprite conversation flow." },
    { time: "10 min", label: "Testing", desc: "Debug timing issues and message names." },
    { time: "05 min", label: "Share", desc: "Present projects and explain the flow." }
  ]);

  const totalTime = agenda.reduce((acc, curr) => acc + parseInt(curr.time), 0);

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
         <div className="space-y-1">
            <h2 className="text-3xl font-black">Teacher Agenda Editor</h2>
            <p className="text-secondary font-medium">Fine-tune the 60-minute lesson timeline.</p>
         </div>
         <div className="bg-primary/10 px-6 py-3 rounded-2xl flex items-center gap-3 text-primary border border-primary/20">
            <Clock className="w-5 h-5" />
            <span className="font-black">Total: {totalTime} Minutes</span>
         </div>
      </div>

      <div className="space-y-6">
        {agenda.map((item, idx) => (
           <div key={idx} className="bg-white p-8 rounded-4xl border border-border shadow-sm grid md:grid-cols-6 gap-8 items-center group">
              <div className="md:col-span-1">
                 <label className="text-[10px] font-black uppercase text-secondary tracking-widest block mb-2">Duration</label>
                 <input 
                   type="text" 
                   value={item.time}
                   className="w-full p-3 bg-slate-50 border border-border rounded-xl font-bold text-center group-hover:bg-white transition-all"
                   onChange={(e) => {
                      const newAgenda = [...agenda];
                      newAgenda[idx].time = e.target.value;
                      setAgenda(newAgenda);
                   }}
                 />
              </div>
              
              <div className="md:col-span-2">
                 <label className="text-[10px] font-black uppercase text-secondary tracking-widest block mb-2">Phase Label</label>
                 <input 
                   type="text" 
                   value={item.label}
                   className="w-full p-3 bg-slate-50 border border-border rounded-xl font-black group-hover:bg-white transition-all"
                   onChange={(e) => {
                      const newAgenda = [...agenda];
                      newAgenda[idx].label = e.target.value;
                      setAgenda(newAgenda);
                   }}
                 />
              </div>

              <div className="md:col-span-3">
                 <label className="text-[10px] font-black uppercase text-secondary tracking-widest block mb-2">Activity Description</label>
                 <textarea 
                   rows={1}
                   value={item.desc}
                   className="w-full p-3 bg-slate-50 border border-border rounded-xl text-sm font-medium group-hover:bg-white transition-all resize-none overflow-hidden"
                   onChange={(e) => {
                      const newAgenda = [...agenda];
                      newAgenda[idx].desc = e.target.value;
                      setAgenda(newAgenda);
                   }}
                 />
              </div>
           </div>
        ))}
      </div>

      <div className="flex items-center justify-between p-8 bg-white rounded-5xl border border-border shadow-sm">
         <div className="flex items-center gap-4 text-secondary italic font-medium">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Timeline will be updated in the "Lesson Structure" section.</span>
         </div>
         <button className="px-10 py-4 bg-primary text-white font-black rounded-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/25">
            <Save className="w-5 h-5" /> SAVE TIMELINE
         </button>
      </div>
    </div>
  );
}
