
import React, { useState } from 'react';
import { Terminal, Send, Loader2, ArrowRight, CheckCircle, Mail, User, Cpu } from 'lucide-react';
import { analyzeStartupIdea } from '../services/geminiService';
import { Link } from 'react-router-dom';

type ChatStep = 'INPUT_IDEA' | 'VALIDATING' | 'QUALIFY' | 'SUCCESS';

const InlineChat: React.FC = () => {
  const [step, setStep] = useState<ChatStep>('INPUT_IDEA');
  const [idea, setIdea] = useState('');
  const [feedback, setFeedback] = useState('');
  const [leads, setLeads] = useState({ name: '', email: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleValidateIdea = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim() || isProcessing) return;

    setIsProcessing(true);
    setStep('VALIDATING');
    
    const result = await analyzeStartupIdea(idea);
    
    setTimeout(() => {
      setFeedback(result);
      setStep('QUALIFY');
      setIsProcessing(false);
    }, 1800);
  };

  const handleCaptureLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leads.name || !leads.email) return;
    setStep('SUCCESS');
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="border hairline-border bg-white sleek-shadow-blue overflow-hidden">
        {/* Sleek Terminal Header */}
        <div className="bg-brand-navy px-6 py-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <div className="w-2 h-2 rounded-full bg-white/10"></div>
              <div className="w-2 h-2 rounded-full bg-brand-green/30"></div>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-3 h-3 text-white opacity-30" />
              <span className="text-[10px] font-normal text-white/40 tracking-wider">Audit engine v3.2</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-brand-green animate-pulse"></div>
            <span className="text-[10px] font-normal text-brand-green tracking-wide">Connected</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-10 md:p-14 min-h-[400px] flex flex-col justify-center bg-white relative">
          <div className="absolute inset-0 geo-pattern opacity-[0.02]"></div>
          
          {step === 'INPUT_IDEA' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 relative z-10">
              <h3 className="text-3xl md:text-4xl heading-sleek mb-6 text-brand-navy">
                Analyze your <br /> <span className="text-brand-blue">market signals.</span>
              </h3>
              <p className="text-[14px] font-normal text-brand-navy/40 mb-10 max-w-lg leading-relaxed">
                Briefly describe your startup hypothesis. We'll map potential white-space and go-to-market feasibility.
              </p>
              <form onSubmit={handleValidateIdea} className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="e.g. B2B SaaS for Construction Logistics..."
                  className="flex-1 px-5 py-4 border hairline-border font-normal text-[13px] outline-none focus:border-brand-blue transition-all placeholder:text-brand-navy/20"
                  required
                />
                <button type="submit" className="bg-brand-blue text-white px-8 py-4 font-medium sleek-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center text-[12px]">
                  Begin audit <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {step === 'VALIDATING' && (
            <div className="text-center py-16 animate-pulse relative z-10">
              <div className="relative inline-block mb-8">
                 <Loader2 className="w-12 h-12 mx-auto animate-spin text-brand-blue stroke-[1]" />
                 <Cpu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-brand-navy/10" />
              </div>
              <div className="text-xl font-medium tracking-tight text-brand-navy mb-1">Analyzing signals...</div>
              <div className="text-[11px] font-normal text-brand-blue/50 tracking-wide">Mapping competitor intent clusters</div>
            </div>
          )}

          {step === 'QUALIFY' && (
            <div className="flex flex-col lg:flex-row gap-10 items-start animate-in zoom-in-95 duration-500 relative z-10">
              <div className="flex-1 w-full">
                <div className="bg-brand-white border border-brand-navy/5 p-8 relative mb-8">
                  <div className="absolute -top-3 left-6 bg-brand-navy text-brand-green px-3 py-1 text-[9px] font-medium tracking-wider">Strategic output</div>
                  <p className="text-[15px] font-normal leading-relaxed text-brand-navy/80 italic">
                    "{feedback}"
                  </p>
                </div>
              </div>
              <div className="flex-1 w-full border hairline-border p-8 bg-white sleek-shadow-blue">
                <h4 className="text-lg font-semibold mb-6 text-brand-navy">Download full report</h4>
                <form onSubmit={handleCaptureLead} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-20" />
                    <input 
                      type="text" 
                      placeholder="Name"
                      className="w-full bg-brand-white border border-brand-navy/5 pl-10 pr-4 py-3 text-[13px] font-normal outline-none focus:border-brand-blue transition-colors"
                      required
                      value={leads.name}
                      onChange={(e) => setLeads({...leads, name: e.target.value})}
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-20" />
                    <input 
                      type="email" 
                      placeholder="Email"
                      className="w-full bg-brand-white border border-brand-navy/5 pl-10 pr-4 py-3 text-[13px] font-normal outline-none focus:border-brand-blue transition-colors"
                      required
                      value={leads.email}
                      onChange={(e) => setLeads({...leads, email: e.target.value})}
                    />
                  </div>
                  <button className="w-full bg-brand-blue text-white py-3 font-medium text-[12px] sleek-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                    Access checklist <ArrowRight className="ml-2 w-3.5 h-3.5 inline" />
                  </button>
                </form>
              </div>
            </div>
          )}

          {step === 'SUCCESS' && (
            <div className="text-center py-12 animate-in zoom-in-95 duration-500 relative z-10">
              <div className="w-12 h-12 bg-brand-green/10 border border-brand-green/30 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-4xl heading-sleek mb-4 text-brand-navy">Report sent.</h3>
              <p className="text-[15px] font-normal text-brand-navy/40 mb-10 max-w-sm mx-auto">
                The GTM playbook is in your inbox. Next, let's schedule a technical debrief.
              </p>
              <Link to="/book-call" className="bg-brand-blue text-white px-10 py-4 font-medium sleek-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-[12px] inline-flex items-center">
                Book debrief <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InlineChat;
