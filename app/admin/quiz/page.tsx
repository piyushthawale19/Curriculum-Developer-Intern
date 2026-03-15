"use client";

import { useState } from "react";
import { Save, Plus, Trash2, HelpCircle, CheckCircle } from "lucide-react";

export default function ManageQuiz() {
  const [questions, setQuestions] = useState([
    { id: 1, q: "What does broadcast do?", a: "Option A", b: "Option B", correct: "A" },
    { id: 2, q: "What block receives a message?", a: "Option A", b: "Option B", correct: "B" },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), q: "", a: "", b: "", correct: "A" }]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="space-y-12 pb-20">
      <div className="flex justify-between items-center">
         <div className="space-y-1">
            <h2 className="text-3xl font-black">Quick Quiz Editor</h2>
            <p className="text-secondary font-medium">Add or edit questions for the student evaluation.</p>
         </div>
         <button 
           onClick={addQuestion}
           className="px-6 py-3 bg-white border border-border rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all"
         >
           <Plus className="w-4 h-4" /> Add Question
         </button>
      </div>

      <div className="space-y-8">
        {questions.map((item, idx) => (
           <div key={item.id} className="bg-white p-10 rounded-4xl border border-border shadow-sm space-y-8 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
              
              <div className="flex justify-between items-start">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center font-black text-sm">{idx + 1}</div>
                    <h3 className="text-lg font-black">Question Details</h3>
                 </div>
                 <button 
                   onClick={() => removeQuestion(item.id)}
                   className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                 >
                    <Trash2 className="w-5 h-5" />
                 </button>
              </div>

              <div className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-secondary tracking-widest ml-1">The Question</label>
                    <input 
                      type="text" 
                      value={item.q}
                      className="w-full p-4 bg-slate-50 border border-border rounded-2xl outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="e.g. What does broadcast do?"
                    />
                 </div>

                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-secondary tracking-widest ml-1">Option A</label>
                       <input 
                         type="text" 
                         value={item.a}
                         className="w-full p-4 bg-slate-50 border border-border rounded-2xl outline-none"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-secondary tracking-widest ml-1">Option B</label>
                       <input 
                         type="text" 
                         value={item.b}
                         className="w-full p-4 bg-slate-50 border border-border rounded-2xl outline-none"
                       />
                    </div>
                 </div>

                 <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-xs font-black uppercase text-secondary px-2">Correct Answer:</span>
                    <div className="flex gap-2">
                       {['A', 'B'].map((opt) => (
                          <button 
                            key={opt}
                            className={`px-6 py-2 rounded-xl font-bold transition-all ${item.correct === opt ? 'bg-primary text-white' : 'bg-white border border-border text-secondary'}`}
                            onClick={() => {
                               const newQ = [...questions];
                               newQ[idx].correct = opt;
                               setQuestions(newQ);
                            }}
                          >
                             {opt}
                          </button>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        ))}
      </div>

      <div className="fixed bottom-8 right-8 left-8 md:left-72 z-40 bg-slate-900 p-6 rounded-3xl text-white flex justify-between items-center shadow-2xl animate-fade-in-up">
         <div className="flex items-center gap-3">
            <HelpCircle className="text-primary w-6 h-6" />
            <p className="font-bold">{questions.length} Questions in current curriculum</p>
         </div>
         <button className="px-10 py-4 bg-primary text-white font-black rounded-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
            <Save className="w-5 h-5" /> PUBLISH QUIZ
         </button>
      </div>
    </div>
  );
}
