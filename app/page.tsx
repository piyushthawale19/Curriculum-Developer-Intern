import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Layers, CheckCircle, MessageSquare, Rocket, ExternalLink, User } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold animate-fade-in">
              <Rocket className="w-4 h-4" />
              Grade 3-5 Scratch Curriculum
            </div>
            <h1 className="text-6xl lg:text-8xl font-display font-black leading-[1.1] tracking-tight">
              Mastering <br />
              <span className="gradient-text">Broadcast</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-xl">
              Learn how sprits "talk" to each other using messages. A fun, interactive lesson on coordination and sequencing in Scratch.
            </p>
            <div className="flex flex-wrap gap-5 pt-6">
              <Link
                href="https://scratch.mit.edu/projects/101/editor/"
                target="_blank"
                className="px-10 py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 group"
              >
                STARTER TEMPLATE
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/resources"
                className="px-10 py-5 bg-white text-foreground border-2 border-border font-black rounded-2xl hover:bg-slate-50 transition-all flex items-center gap-3"
              >
                VIEW SOLUTIONS
              </Link>
            </div>
          </div>
          <div className="relative lg:block hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="bg-white p-4 rounded-4xl shadow-2xl border border-border rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-video bg-slate-900 rounded-3xl flex items-center justify-center p-12 overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px]"></div>
                <div className="text-center space-y-6 relative z-10">
                   <div className="flex justify-center gap-4">
                      <div className="w-16 h-16 bg-blue-500 rounded-2xl animate-bounce flex items-center justify-center text-white font-bold text-2xl">A</div>
                      <div className="w-16 h-16 bg-indigo-500 rounded-2xl animate-pulse delay-100 flex items-center justify-center text-white font-bold text-2xl">B</div>
                      <div className="w-16 h-16 bg-purple-500 rounded-2xl animate-bounce delay-200 flex items-center justify-center text-white font-bold text-2xl">C</div>
                   </div>
                   <p className="text-indigo-300 font-mono text-xs tracking-widest uppercase">Sprite Communication Flow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Lesson */}
      <section id="overview" className="py-32 px-6 bg-white border-y border-border/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="text-4xl md:text-5xl font-display font-black">Today's Mission</h2>
           <p className="text-2xl text-secondary leading-relaxed italic">
            "Today we will make our Scratch sprites talk in the right order using secret messages called broadcasts!"
           </p>
           <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Concepts Section */}
      <section id="concepts" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-black">Core Concepts</h2>
            <p className="text-secondary text-xl font-medium">Key words every Scratch Master needs to know.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Broadcast",
                meaning: "Send a Message",
                desc: "One sprite yells out a message to everyone else without us even hearing it!",
                color: "bg-blue-500",
                icon: <MessageSquare />
              },
              {
                title: "When I Receive",
                meaning: "Listen for a Message",
                desc: "A sprite waits patiently for a specific message before they start their action.",
                color: "bg-indigo-500",
                icon: <Code2 />
              },
              {
                title: "Sequencing",
                meaning: "Taking Turns",
                desc: "Making sure everything happens in the right order (1, 2, 3) to tell a perfect story.",
                color: "bg-purple-500",
                icon: <Layers />
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-12 rounded-4xl border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all space-y-8 group">
                <div className={`w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-display font-black">{item.title}</h3>
                  <div className="inline-flex px-3 py-1 bg-slate-100 rounded-lg text-xs font-black uppercase text-secondary">
                    = {item.meaning}
                  </div>
                  <p className="text-secondary leading-relaxed text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversation Flow Visualizer */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-display font-black">How the Story Flows</h2>
            <p className="text-secondary text-lg">See how Sprite A, B, and C talk to each other.</p>
          </div>

          <div className="relative p-12 bg-white rounded-5xl border border-border shadow-2xl">
            <div className="grid md:grid-cols-5 gap-4 items-center">
               <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto ring-4 ring-blue-50 animate-pulse">
                    <User className="text-blue-500 w-10 h-10" />
                  </div>
                  <p className="font-black">Sprite A</p>
                  <p className="text-[10px] text-secondary">"I start the story!"</p>
               </div>

               <div className="hidden md:flex justify-center">
                  <ArrowRight className="text-slate-300 w-12 h-12 animate-pulse" />
               </div>

               <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto ring-4 ring-indigo-50">
                    <User className="text-indigo-500 w-10 h-10" />
                  </div>
                  <p className="font-black">Sprite B</p>
                  <p className="text-[10px] text-secondary">"I wait for Sprite A."</p>
               </div>

               <div className="hidden md:flex justify-center">
                  <ArrowRight className="text-slate-300 w-12 h-12" />
               </div>

               <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto ring-4 ring-purple-50">
                    <User className="text-purple-500 w-10 h-10" />
                  </div>
                  <p className="font-black">Sprite C</p>
                  <p className="text-[10px] text-secondary">"I finish the story!"</p>
               </div>
            </div>
            
            <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white text-center">
               <p className="text-indigo-300 text-xs font-mono mb-4 uppercase tracking-widest">Logic Snippet</p>
               <p className="text-xl font-display font-bold leading-relaxed">
                 Sprite A sends <span className="text-blue-400">"message1"</span> <br className="md:hidden" />
                 {" → "} Sprite B listens for <span className="text-blue-400">"message1"</span>
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto border-4 border-dashed border-slate-100 rounded-[4rem] p-16 space-y-12">
           <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-black">Level Up!</h2>
              <p className="text-secondary text-lg">What students will achieve in this lesson.</p>
           </div>
           <div className="grid sm:grid-cols-2 gap-8">
              {[
                "Understand invisible 'Broadcast' messages.",
                "Make multiple sprites talk in order.",
                "Use the 'When I Receive' block correctly.",
                "Build and debug a 3-sprite story flow."
              ].map((outcome, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                   <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                      <CheckCircle className="w-5 h-5" />
                   </div>
                   <p className="text-xl font-bold text-slate-700">{outcome}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
           <div className="space-y-12">
              <div className="space-y-4">
                 <h2 className="text-4xl md:text-5xl font-display font-black">Build It Yourself!</h2>
                 <p className="text-secondary text-xl font-medium">Follow these steps to build your conversation.</p>
              </div>

              <div className="space-y-4">
                {[
                  "Add Sprite 1, Sprite 2, and Sprite 3 to your project.",
                  "Make Sprite 1 say something for 2 seconds.",
                  "Add a 'Broadcast' block after Sprite 1's talk block.",
                  "Name your message 'sprite2_turn'.",
                  "Use 'When I Receive [sprite2_turn]' for Sprite 2.",
                  "Repeat for Sprite 3 using a new message!"
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 items-start p-6 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-border">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white shrink-0 flex items-center justify-center font-black">
                      {idx + 1}
                    </div>
                    <p className="text-lg font-medium pt-1.5">{step}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-amber-50 rounded-4xl border-2 border-amber-100 flex gap-6 items-center">
                 <div className="w-16 h-16 bg-amber-200 rounded-2xl flex items-center justify-center text-amber-600 shrink-0 font-black text-2xl">!</div>
                 <div>
                    <h4 className="text-lg font-black text-amber-900">Checkpoint!</h4>
                    <p className="text-amber-800">Stop and test here. Does Sprite B wait for Sprite A?</p>
                 </div>
              </div>
           </div>

           <div className="lg:sticky lg:top-32 bg-slate-900 p-12 rounded-5xl text-white space-y-10 shadow-2xl">
              <h3 className="text-3xl font-display font-black">Teacher Agenda</h3>
              <p className="text-slate-400">A perfect 60-minute lesson structure.</p>
              
              <div className="space-y-8">
                 {[
                   { t: "10 min", label: "Introduction", desc: "Explain the Broadcast concept using real-world analogies." },
                   { t: "10 min", label: "Concept Demo", desc: "Show how to use the 'When I Receive' block in Scratch." },
                   { t: "25 min", label: "Build Project", desc: "Students build the 3-Sprite conversation flow." },
                   { t: "10 min", label: "Testing", desc: "Debug timing issues and message names." },
                   { t: "05 min", label: "Share", desc: "Present projects and explain the flow." }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-6 items-start">
                     <div className="text-primary font-black whitespace-nowrap pt-1">{item.t}</div>
                     <div className="space-y-1">
                        <p className="font-bold text-lg">{item.label}</p>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Debugging Tips */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-16">
           <div className="text-center space-y-4">
              <h2 className="text-4xl font-display font-black">Oops! Something Broke?</h2>
              <p className="text-secondary text-xl font-medium">Common mistakes and how to fix them.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  t: "Talking Too Fast",
                  d: "If sprites talk at the same time, check if you forgot the 'Broadcast' block."
                },
                {
                  t: "Message Name Mismatch",
                  d: "Make sure 'Broadcast [A]' matches exactly with 'When I Receive [A]'."
                },
                {
                  t: "Missing Blocks",
                  d: "Check if you accidentally deleted the 'When I Receive' block for Sprite 3."
                }
              ].map((tip, idx) => (
                <div key={idx} className="bg-white p-10 rounded-4xl border border-border shadow-sm space-y-4">
                   <h4 className="text-xl font-black text-primary">{tip.t}</h4>
                   <p className="text-secondary leading-relaxed">{tip.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
      <section className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-4">
             <h2 className="text-4xl md:text-5xl font-display font-black">Quick Quiz</h2>
             <p className="text-slate-400 text-xl font-medium">Are you a Scratch Master?</p>
          </div>

          <div className="space-y-6">
             {[
               "What block sends a message?",
               "Which block listens for a broadcast?",
               "True or False: Sprites can send secret messages.",
               "What happens when message names don't match?",
               "Can Sprite C talk after listening for message2?"
             ].map((q, idx) => (
               <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 flex justify-between items-center group hover:bg-white/10 transition-all cursor-pointer">
                  <p className="text-xl font-bold">{idx + 1}. {q}</p>
                  <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-all" />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-24 px-6 border-t border-border">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-4 max-w-sm text-center md:text-left">
               <div className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <span className="font-display font-bold text-xl">ScratchMastery</span>
               </div>
               <p className="text-secondary text-sm">Empowering young creators to build logic and stories through code.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-16 md:gap-24">
               <div className="space-y-6">
                  <p className="font-black uppercase text-xs tracking-widest text-secondary">Resources</p>
                  <ul className="space-y-4 text-sm font-bold text-secondary">
                     <li><Link href="/lesson" className="hover:text-primary transition-colors">Lesson Plan</Link></li>
                     <li><Link href="/resources" className="hover:text-primary transition-colors">Deliverables</Link></li>
                  </ul>
               </div>
               <div className="space-y-6">
                  <p className="font-black uppercase text-xs tracking-widest text-secondary">Legal</p>
                  <ul className="space-y-4 text-sm font-bold text-secondary">
                     <li><Link href="/admin" className="hover:text-primary transition-colors">Admin Portal</Link></li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border flex flex-col items-center gap-4 text-xs font-bold text-secondary opacity-50">
            <p>Curriculum Developer Assignment © 2026</p>
            <p>Created by Senior Product Builder</p>
         </div>
      </footer>
    </div>
  );
}
