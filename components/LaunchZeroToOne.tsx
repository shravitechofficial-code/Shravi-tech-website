
import React from 'react';
import { Monitor, Phone, ArrowRight, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FinalCTA from './FinalCTA';

const LaunchZeroToOne: React.FC = () => {
  return (
    <div className="pt-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 border-b border-brand-navy/5 mb-32 relative overflow-hidden">
          <div className="absolute inset-0 geo-pattern"></div>
          <div className="relative z-10">
            <div className="text-label-sleek text-brand-blue mb-8 uppercase tracking-wider">Phase 02</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl heading-sleek mb-10 text-brand-navy">
              0-to-1 <br /> <span className="text-brand-blue">launch.</span>
            </h1>
            <p className="text-lg md:text-xl font-normal text-brand-navy/40 max-w-2xl leading-relaxed">
              We don't just advise; we execute. Landing pages, ad copy, AI systems, and your first 10 sales calls—all handled by our team.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-48">
          {/* Tier 1 */}
          <div className="border hairline-border p-10 bg-white sleek-shadow flex flex-col group">
            <div className="text-[10px] font-medium opacity-40 uppercase mb-4 text-brand-navy tracking-widest">6 weeks • Fast-track</div>
            <h3 className="text-2xl font-semibold mb-2 text-brand-navy">The sprint</h3>
            <div className="text-4xl font-semibold mb-10 text-brand-blue">$15,000</div>
            <ul className="space-y-4 mb-16 flex-grow">
              {["Core funnel build", "AI content engine", "2 growth channels", "Weekly strategy sessions"].map((item, i) => (
                <li key={i} className="flex items-center text-[13px] font-normal text-brand-navy/70 border-b border-brand-navy/5 pb-4 last:border-0">
                  <CheckCircle className="w-4 h-4 mr-4 text-brand-blue" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/book-call" className="bg-brand-navy text-white py-4 text-center font-medium transition-all text-[12px] sleek-shadow-blue hover:bg-brand-blue">
              Book sprint audit
            </Link>
          </div>

          {/* Tier 2 */}
          <div className="border hairline-border p-10 bg-brand-navy text-white sleek-shadow-blue flex flex-col relative overflow-hidden">
            <div className="absolute top-8 right-8 text-[9px] border border-brand-green/30 text-brand-green px-2 py-0.5 uppercase font-medium">Recommended</div>
            <div className="text-[10px] font-medium opacity-40 uppercase mb-4 text-brand-green tracking-widest">12 weeks • Full build</div>
            <h3 className="text-2xl font-semibold mb-2">Full launch</h3>
            <div className="text-4xl font-semibold mb-10 text-brand-blue">$35,000</div>
            <ul className="space-y-4 mb-16 flex-grow">
              {["Omni-channel deployment", "Custom AI sales agents", "Sales outbound execution", "First 10 sales meetings", "Investor readiness pack"].map((item, i) => (
                <li key={i} className="flex items-center text-[13px] font-normal border-b border-white/5 pb-4 last:border-0">
                  <CheckCircle className="w-4 h-4 mr-4 text-brand-green" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/book-call" className="bg-white text-brand-navy py-4 text-center font-medium transition-all text-[12px] hover:bg-brand-green">
              Start full launch
            </Link>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border hairline-border mb-32 bg-white sleek-shadow">
          {[
            { icon: Monitor, title: "Funnels", desc: "High-conversion landing pages built for psychological triggers." },
            { icon: Zap, title: "Content", desc: "Custom AI content systems that generate ads and emails 24/7." },
            { icon: Phone, title: "Sales", desc: "Cold outbound playbooks executed until you hit revenue." }
          ].map((item, i) => (
            <div key={i} className="p-12 border-brand-navy last:border-0 lg:border-r border-b lg:border-b-0 hover:bg-brand-blue/5 transition-colors group">
              <item.icon className="w-8 h-8 mb-8 stroke-[1] text-brand-blue" />
              <h3 className="text-lg font-semibold mb-4 text-brand-navy">{item.title}</h3>
              <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <FinalCTA title="Hit revenue" subtitle="Why wait 12 months? Hit first revenue in 90 days." />
    </div>
  );
};

export default LaunchZeroToOne;
