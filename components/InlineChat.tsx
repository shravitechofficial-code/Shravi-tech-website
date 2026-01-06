
import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Loader2, ArrowRight, CheckCircle, Mail, User, Cpu, MessageSquare, Briefcase, Phone } from 'lucide-react';
import { getNextDiagnosticQuestion, analyzeFinalProblem } from '../services/geminiService';
import { Link } from 'react-router-dom';

type ChatStep = 'IDLE' | 'DIAGNOSING' | 'ANALYZING' | 'QUALIFY' | 'SUCCESS';

const STARTER_QUESTIONS = [
  "I want to increase organic traffic, what to do?",
  "I want to post regularly on all social media platforms?",
  "I need AI to solve routing of trucks problem for me",
  "I spend hours tracking receipts and updating excel"
];

const InlineChat: React.FC = () => {
  const [step, setStep] = useState<ChatStep>('IDLE');
  const [initialProblem, setInitialProblem] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [history, setHistory] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [finalAnalysis, setFinalAnalysis] = useState('');
  const [leads, setLeads] = useState({ name: '', email: '', phone: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Internal scroll management to prevent global page jumping
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [history, isProcessing, step]);

  const startDiagnosis = async (problem: string) => {
    setInitialProblem(problem);
    setStep('DIAGNOSING');
    setQuestionCount(1);
    setIsProcessing(true);
    
    const nextQ = await getNextDiagnosticQuestion(problem, [], 1);
    setHistory([{ role: 'ai', text: nextQ }]);
    setIsProcessing(false);
  };

  const handleDiagnosticSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim() || isProcessing) return;

    const userText = currentInput.trim();
    setCurrentInput('');
    const newHistory = [...history, { role: 'user' as const, text: userText }];
    setHistory(newHistory);

    if (questionCount < 3) {
      setIsProcessing(true);
      const nextQ = await getNextDiagnosticQuestion(initialProblem, newHistory, questionCount + 1);
      setHistory(prev => [...prev, { role: 'ai', text: nextQ }]);
      setQuestionCount(prev => prev + 1);
      setIsProcessing(false);
    } else {
      setStep('ANALYZING');
      setIsProcessing(true);
      const analysis = await analyzeFinalProblem(initialProblem, newHistory);
      setFinalAnalysis(analysis);
      setStep('QUALIFY');
      setIsProcessing(false);
    }
  };

  const handleCaptureLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leads.name || !leads.email || !leads.phone) return;
    setStep('SUCCESS');
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="border hairline-border bg-white sleek-shadow-blue overflow-hidden flex flex-col h-[600px] relative">
        {/* Sleek Header */}
        <div className="bg-brand-navy px-6 py-4 flex items-center justify-between border-b border-white/5 shrink-0 z-30">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <div className="w-2 h-2 rounded-full bg-brand-green/30"></div>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-3 h-3 text-white opacity-30" />
              <span className="text-[10px] font-normal text-white/40 tracking-wider">Startup Strategy Partner v1.0</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-brand-green animate-pulse"></div>
            <span className="text-[10px] font-normal text-brand-green tracking-wide">Business Diagnostic</span>
          </div>
        </div>

        {/* Content Body */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-8 md:p-12 relative bg-brand-white scroll-hide scroll-smooth"
        >
          <div className="absolute inset-0 geo-pattern opacity-[0.02] pointer-events-none"></div>
          
          {step === 'IDLE' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 relative z-10 h-full flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl heading-sleek mb-6 text-brand-navy">
                What challenge are we <br /> <span className="text-brand-blue">solving today?</span>
              </h3>
              <p className="text-[14px] font-normal text-brand-navy/40 mb-10 max-w-lg leading-relaxed">
                Choose a common goal or tell us about your specific hurdle. We'll run a quick business diagnostic to see how we can help.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {STARTER_QUESTIONS.map((q, i) => (
                  <button 
                    key={i}
                    onClick={() => startDiagnosis(q)}
                    className="px-4 py-2 border border-brand-navy/10 bg-white text-[12px] font-medium text-brand-navy/60 hover:border-brand-blue hover:text-brand-blue transition-all text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>

              <div className="relative">
                <input 
                  type="text"
                  placeholder="Or describe your business problem..."
                  className="w-full px-5 py-4 border hairline-border font-normal text-[13px] outline-none focus:border-brand-blue transition-all bg-white"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                       e.preventDefault();
                       startDiagnosis((e.target as HTMLInputElement).value);
                    }
                  }}
                />
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-blue p-2"
                  onClick={(e) => {
                    const input = (e.currentTarget.previousSibling as HTMLInputElement).value;
                    if (input) startDiagnosis(input);
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {(step === 'DIAGNOSING' || step === 'ANALYZING' || step === 'QUALIFY') && (
            <div className="space-y-8 relative z-10 pb-4">
              {/* Initial AI Message (Left Aligned) */}
              <div className="flex justify-start gap-4">
                <div className="w-8 h-8 rounded-full border border-brand-navy/5 bg-white flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4 text-brand-blue" />
                </div>
                <div className="bg-white border border-brand-navy/5 p-4 sleek-shadow-blue text-[13px] text-brand-navy/80 max-w-[80%] leading-relaxed">
                  I've noted your objective: <span className="font-bold text-brand-navy">"{initialProblem}"</span>. Let's explore the context.
                </div>
              </div>

              {history.map((msg, i) => (
                <div key={i} className={`flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {/* AI Icon (Left side) */}
                  {msg.role === 'ai' && (
                    <div className="w-8 h-8 rounded-full border border-brand-navy/5 bg-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-brand-blue" />
                    </div>
                  )}

                  <div className={`p-4 text-[13px] leading-relaxed max-w-[80%] ${
                    msg.role === 'user' 
                      ? 'bg-brand-navy text-white sleek-shadow' 
                      : 'bg-white border border-brand-navy/5 sleek-shadow-blue text-brand-navy/80'
                  }`}>
                    {msg.text}
                  </div>

                  {/* User Icon (Right side) */}
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-full border border-brand-navy/5 bg-brand-navy flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {isProcessing && (
                <div className="flex justify-start gap-4 animate-pulse">
                  <div className="w-8 h-8 rounded-full border border-brand-navy/5 bg-white flex items-center justify-center shrink-0">
                    <Loader2 className="w-4 h-4 text-brand-blue animate-spin" />
                  </div>
                  <div className="bg-white border border-brand-navy/5 p-4 text-[12px] text-brand-navy/40 italic">
                    {step === 'ANALYZING' ? 'Preparing our recommendation...' : `Analyzing business context (Step ${questionCount}/3)...`}
                  </div>
                </div>
              )}

              {step === 'QUALIFY' && (
                <div className="pt-8 animate-in fade-in duration-700">
                  <div className="bg-brand-navy p-8 text-white mb-10 relative">
                    <div className="absolute top-0 right-0 p-4 opacity-5"><Briefcase className="w-20 h-20" /></div>
                    <div className="text-[10px] font-bold text-brand-green uppercase tracking-[0.2em] mb-4">Proposed Solution Path</div>
                    <p className="text-[15px] font-medium leading-relaxed italic opacity-90">
                      "{finalAnalysis}"
                    </p>
                  </div>
                  
                  <div className="border hairline-border p-8 bg-white sleek-shadow-blue">
                    <h4 className="text-lg font-semibold mb-6 text-brand-navy">Get your growth roadmap</h4>
                    <form onSubmit={handleCaptureLead} className="space-y-4">
                      <div className="flex flex-col gap-4">
                        <input 
                          type="text" 
                          placeholder="Name"
                          className="w-full bg-brand-white border border-brand-navy/5 px-4 py-3 text-[13px] font-normal outline-none focus:border-brand-blue transition-colors"
                          required
                          value={leads.name}
                          onChange={(e) => setLeads({...leads, name: e.target.value})}
                        />
                        <div className="flex flex-col md:flex-row gap-4">
                          <input 
                            type="email" 
                            placeholder="Work Email"
                            className="flex-1 bg-brand-white border border-brand-navy/5 px-4 py-3 text-[13px] font-normal outline-none focus:border-brand-blue transition-colors"
                            required
                            value={leads.email}
                            onChange={(e) => setLeads({...leads, email: e.target.value})}
                          />
                          <input 
                            type="tel" 
                            placeholder="Phone Number"
                            className="flex-1 bg-brand-white border border-brand-navy/5 px-4 py-3 text-[13px] font-normal outline-none focus:border-brand-blue transition-colors"
                            required
                            value={leads.phone}
                            onChange={(e) => setLeads({...leads, phone: e.target.value})}
                          />
                        </div>
                      </div>
                      <button className="w-full bg-brand-blue text-white py-4 font-medium text-[12px] sleek-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all uppercase tracking-widest">
                        Submit details to team <ArrowRight className="ml-2 w-4 h-4 inline" />
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 'SUCCESS' && (
            <div className="text-center py-12 animate-in zoom-in-95 duration-500 relative z-10 h-full flex flex-col justify-center">
              <div className="w-12 h-12 bg-brand-green/10 border border-brand-green/30 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-4xl heading-sleek mb-4 text-brand-navy">Details shared.</h3>
              <p className="text-[15px] font-normal text-brand-navy/40 mb-10 max-sm mx-auto">
                Your business challenge and context have been shared with our partners. We'll reach out within 24 hours to schedule a deep-dive.
              </p>
              <Link to="/book-call" className="bg-brand-blue text-white px-10 py-4 font-medium sleek-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-[12px] inline-flex items-center uppercase tracking-widest">
                Skip the wait: Book a call <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        {/* Input Footer */}
        {step === 'DIAGNOSING' && !isProcessing && (
          <form onSubmit={handleDiagnosticSubmit} className="p-4 bg-white border-t border-brand-navy/5 flex gap-3 shrink-0 relative z-20">
            <input 
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Your answer..."
              className="flex-1 px-5 py-4 bg-brand-white border border-brand-navy/5 text-[13px] outline-none focus:border-brand-blue transition-all"
              autoFocus
            />
            <button type="submit" className="bg-brand-navy text-white px-6 py-4 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default InlineChat;
