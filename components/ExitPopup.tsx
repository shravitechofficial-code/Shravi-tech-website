
import React, { useState, useEffect } from 'react';
import { X, Gift, ArrowRight, Download, CheckCircle } from 'lucide-react';

const ExitPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      // Triggers when mouse leaves the top of the viewport (Exit Intent)
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseOut);
    return () => document.removeEventListener('mouseleave', handleMouseOut);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setIsSubmitted(true);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm" onClick={() => setIsVisible(false)}></div>
      <div className="bg-white w-full max-w-md border-4 border-brand-navy hard-shadow shadow-brand-blue relative z-10 animate-in zoom-in-95 duration-300 overflow-hidden">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-white hover:text-brand-green transition-colors z-20"
          aria-label="Close popup"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </button>
        
        <div className="bg-brand-navy p-8 text-center text-white relative">
          <div className="absolute inset-0 geo-pattern opacity-10"></div>
          <div className="w-14 h-14 bg-brand-blue flex items-center justify-center mx-auto mb-4 border-2 border-white shadow-[3px_3px_0px_0px_#77F2A1] relative z-10">
            <Gift className="w-7 h-7 text-white stroke-[2]" />
          </div>
          <h2 className="text-4xl heading-bold mb-1 uppercase tracking-tighter relative z-10">
            {isSubmitted ? "SUCCESS" : "WAIT."}
          </h2>
          <p className="text-[10px] font-black tracking-[0.2em] text-brand-green uppercase relative z-10">
            {isSubmitted ? "Your playbook is ready" : "Don't Launch Into The Dark"}
          </p>
        </div>

        <div className="p-10 text-center">
          {!isSubmitted ? (
            <>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter uppercase leading-tight text-brand-navy">
                GET THE "0-1 STRATEGY PLAYBOOK" <span className="text-brand-blue">FREE.</span>
              </h3>
              <p className="text-[11px] font-bold opacity-50 mb-8 uppercase tracking-wider text-brand-navy">
                Our internal GTM blueprint used to hit revenue at accelerated speed.
              </p>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  required
                  placeholder="FULL NAME" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 border-2 border-brand-navy font-bold text-xs tracking-widest outline-none focus:border-brand-blue focus:bg-brand-blue/5 transition-all uppercase text-brand-navy placeholder:text-brand-navy/30"
                />
                <input 
                  type="email" 
                  required
                  placeholder="WORK EMAIL" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 border-2 border-brand-navy font-bold text-xs tracking-widest outline-none focus:border-brand-blue focus:bg-brand-blue/5 transition-all uppercase text-brand-navy placeholder:text-brand-navy/30"
                />
                <input 
                  type="tel" 
                  required
                  placeholder="PHONE NUMBER" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-6 py-4 border-2 border-brand-navy font-bold text-xs tracking-widest outline-none focus:border-brand-blue focus:bg-brand-blue/5 transition-all uppercase text-brand-navy placeholder:text-brand-navy/30"
                />
                <button type="submit" className="w-full bg-brand-blue text-white font-black py-5 mt-4 tracking-widest hard-shadow shadow-brand-navy hard-shadow-hover flex items-center justify-center transition-all text-sm uppercase">
                  ACCESS THE PLAYBOOK <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
              <button 
                onClick={() => setIsVisible(false)}
                className="mt-8 text-[10px] font-black text-brand-navy hover:text-brand-blue uppercase tracking-[0.15em] opacity-40 hover:opacity-100 transition-all border-b-2 border-transparent hover:border-brand-blue"
              >
                I'll launch the slow way
              </button>
            </>
          ) : (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <div className="mb-8 p-6 bg-brand-green/10 border-2 border-brand-green/30 inline-block rounded-full">
                <CheckCircle className="w-12 h-12 text-brand-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tighter uppercase text-brand-navy">READY TO DOWNLOAD</h3>
              <p className="text-[12px] font-bold opacity-60 mb-10 uppercase tracking-widest text-brand-navy">
                Click below to secure your 0-1 strategy playbook.
              </p>
              <a 
                href="#" 
                className="w-full bg-brand-navy text-white font-black py-5 tracking-widest hard-shadow shadow-brand-blue flex items-center justify-center transition-all text-sm uppercase hover:bg-brand-blue"
                onClick={(e) => { e.preventDefault(); setIsVisible(false); alert("Downloading Playbook..."); }}
              >
                DOWNLOAD PDF <Download className="ml-2 w-5 h-5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
