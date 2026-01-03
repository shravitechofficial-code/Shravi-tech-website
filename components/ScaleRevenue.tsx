
import React from 'react';
import { Target, Layers, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScaleRevenue: React.FC = () => {
  return (
    <div className="pt-24 pb-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 border-b border-brand-navy/5 mb-32 relative overflow-hidden">
          <div className="absolute inset-0 geo-pattern"></div>
          <div className="relative z-10">
            <div className="text-label-sleek text-brand-blue mb-8 uppercase tracking-wider">Phase 03</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl heading-sleek mb-10 text-brand-navy">
              Scale <br /> <span className="text-brand-blue">revenue.</span>
            </h1>
            <p className="text-lg md:text-xl font-normal text-brand-navy/40 max-w-2xl leading-relaxed">
              Once you have traction, efficiency is the only game. We deploy AI engines that score leads, optimize cross-channel spend, and automate your sales operations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-48">
          <div className="space-y-16">
            <div className="flex gap-8 group">
              <div className="w-12 h-12 bg-white border hairline-border flex items-center justify-center shrink-0 sleek-shadow group-hover:bg-brand-blue group-hover:text-white transition-all">
                <Target className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-navy">AI lead scoring</h3>
                <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed max-w-md">
                  Stop chasing dead leads. Our AI systems analyze behavioral data to identify and prioritize high-intent buyers in real-time.
                </p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="w-12 h-12 bg-white border hairline-border flex items-center justify-center shrink-0 sleek-shadow group-hover:bg-brand-blue group-hover:text-white transition-all">
                <Layers className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-navy">Channel expansion</h3>
                <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed max-w-md">
                  Scale from 1 to 5 channels without increasing headcount. AI manages cross-platform creative and budget allocation.
                </p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="w-12 h-12 bg-white border hairline-border flex items-center justify-center shrink-0 sleek-shadow group-hover:bg-brand-blue group-hover:text-white transition-all">
                <Database className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-navy">Sales ops automation</h3>
                <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed max-w-md">
                  Seamless CRM integration that handles follow-ups, scheduling, and data enrichment autonomously.
                </p>
              </div>
            </div>
          </div>

          <div className="border hairline-border p-10 bg-white sleek-shadow">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-semibold text-md text-brand-navy">Revenue dashboard</h3>
              <div className="text-[9px] font-medium border border-brand-blue/20 px-2 py-0.5 text-brand-blue bg-brand-blue/5 uppercase tracking-widest">Live insights</div>
            </div>
            <div className="space-y-8">
              {[
                { label: "Search efficiency", val: "42%", color: "bg-brand-blue" },
                { label: "Social efficiency", val: "78%", color: "bg-brand-green" },
                { label: "Direct efficiency", val: "55%", color: "bg-brand-navy" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[11px] font-medium mb-2 text-brand-navy/40 uppercase tracking-wide">
                    <span>{item.label}</span>
                    <span>{item.val}</span>
                  </div>
                  <div className="h-1.5 w-full bg-brand-navy/5 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full transition-all duration-1000`} style={{ width: item.val }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-brand-navy/5 border border-brand-navy/5 text-[13px] text-brand-navy/60 italic leading-relaxed">
              <span className="font-semibold not-italic mr-1 text-brand-blue uppercase text-[10px] tracking-wider">AI Insight:</span>
              "Increasing ad spend on search by 15% will likely yield a 3.8x ROAS over the next 30 days based on current signals."
            </div>
          </div>
        </div>

        <div className="bg-brand-navy text-white p-16 md:p-24 text-center border border-brand-navy/5 sleek-shadow-blue relative overflow-hidden">
          <div className="absolute inset-0 geo-pattern opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl heading-sleek mb-6">Maximize <span className="text-brand-green">every dollar.</span></h2>
            <p className="text-[16px] opacity-50 mb-10 font-normal max-w-xl mx-auto leading-relaxed">
              Scaling isn't about working harder. It's about building systems that do the heavy lifting for you.
            </p>
            <Link to="/book-call" className="bg-brand-blue text-white px-10 py-4 font-medium sleek-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-flex items-center text-[13px]">
              Scale my startup <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleRevenue;
