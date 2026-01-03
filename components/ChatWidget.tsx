
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Loader2, ArrowRight, Terminal } from 'lucide-react';
import { analyzeStartupIdea } from '../services/geminiService';
import { Link } from 'react-router-dom';

type ChatState = 'IDEA' | 'QUALIFY' | 'COMPLETE';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatState, setChatState] = useState<ChatState>('IDEA');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "I'M SHRAVI'S AI STRATEGIST. WHAT'S THE STARTUP IDEA? I'LL VALIDATE IT IN REAL-TIME." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userInput = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userInput }]);

    if (chatState === 'IDEA') {
      setIsTyping(true);
      const feedback = await analyzeStartupIdea(userInput);
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'ai', text: feedback }]);
      setChatState('QUALIFY');
    } else if (chatState === 'QUALIFY') {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: "DATA CAPTURED. YOUR GTM CHECKLIST IS BEING GENERATED. THE FINAL STEP IS A STRATEGY CALL TO MAP YOUR 90-DAY ENGINE." 
      }]);
      setChatState('COMPLETE');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-blue text-white px-6 py-4 border-4 border-brand-navy hard-shadow shadow-brand-navy hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 font-black tracking-widest uppercase text-sm"
        >
          <Terminal className="w-5 h-5 text-brand-green" /> VALIDATE IDEA
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-[380px] h-[550px] border-4 border-brand-navy hard-shadow shadow-brand-blue flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-brand-navy p-5 text-white flex justify-between items-center border-b-4 border-brand-navy">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-brand-blue text-white flex items-center justify-center font-black border-2 border-white">S</div>
              <div>
                <div className="font-black text-xs tracking-widest uppercase text-brand-green">AI STRATEGIST</div>
                <div className="text-[10px] font-bold opacity-50 uppercase tracking-widest">Lead Qualify v3.0</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-brand-green transition-colors">
              <X className="w-6 h-6 stroke-[3]" />
            </button>
          </div>

          {/* Chat Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6 bg-brand-white scroll-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 border-2 border-brand-navy font-bold text-xs leading-relaxed uppercase tracking-tight ${
                  m.role === 'user' 
                    ? 'bg-brand-navy text-white hard-shadow shadow-brand-blue' 
                    : 'bg-white text-brand-navy hard-shadow'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 border-2 border-brand-navy hard-shadow flex items-center space-x-3">
                  <Loader2 className="w-4 h-4 text-brand-blue animate-spin" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy">Analyzing Market Signals...</span>
                </div>
              </div>
            )}
            
            {chatState === 'COMPLETE' && (
              <div className="pt-4">
                <Link 
                  to="/book-call" 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-brand-blue text-white py-4 font-black text-center block tracking-widest uppercase text-xs hard-shadow shadow-brand-navy hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  BOOK STRATEGY CALL <ArrowRight className="inline ml-2 w-4 h-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Input Area */}
          {chatState !== 'COMPLETE' && (
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t-4 border-brand-navy flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={chatState === 'IDEA' ? "YOUR STARTUP IDEA..." : "NAME & EMAIL..."}
                className="flex-1 px-4 py-3 bg-white border-2 border-brand-navy font-bold text-xs uppercase tracking-widest outline-none focus:bg-brand-blue/5 focus:border-brand-blue transition-all"
                autoFocus
              />
              <button type="submit" className="bg-brand-navy text-white p-3 border-2 border-brand-navy hover:bg-brand-blue transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
