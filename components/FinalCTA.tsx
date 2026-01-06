
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC<{ title?: string; subtitle?: string; buttonText?: string }> = ({ 
  title = "Ready to launch?", 
  subtitle = "Book your AI-powered strategy session today.",
  buttonText = "Let's Talk"
}) => {
  return (
    <section className="py-32 bg-brand-navy text-white border-t border-brand-navy/5 relative overflow-hidden">
      <div className="absolute inset-0 geo-pattern opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl heading-sleek mb-6 text-brand-white">{title}</h2>
        <p className="text-lg md:text-xl font-normal mb-12 text-brand-green/70">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/book-call" className="bg-brand-blue text-white px-10 py-4 font-medium sleek-shadow-blue transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none text-[14px] inline-flex items-center justify-center uppercase tracking-widest">
            {buttonText} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
