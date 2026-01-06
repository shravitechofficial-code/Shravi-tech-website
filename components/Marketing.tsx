
import React from 'react';
import { Globe, BarChart, PenTool, Target, ArrowRight, Layers, Gauge, Database, Cpu, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import FinalCTA from './FinalCTA';

const Marketing: React.FC = () => {
  const featuredMarketingStories = CASE_STUDIES.filter(s => 
    ['1acre', 'sumukha'].includes(s.id)
  );

  return (
    <div className="pt-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Featured Proof - Above Header */}
        <div className="pt-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="text-[10px] font-bold text-brand-navy/30 uppercase tracking-[0.3em] mb-4 ml-1">Proof</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredMarketingStories.map((study) => (
              <Link 
                to="/proof" 
                key={study.id} 
                className="group bg-white border hairline-border p-6 flex items-center justify-between hover:sleek-shadow-blue transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-brand-navy flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-1">Live Results</div>
                    <h4 className="text-sm font-bold text-brand-navy uppercase tracking-tight">{study.name}</h4>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-xl font-bold text-brand-navy leading-none">{study.stats?.[0]?.value || "Live"}</div>
                  <div className="text-[9px] font-medium text-brand-navy/40 uppercase tracking-widest mt-1">{study.stats?.[0]?.label || "Performance"}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-navy/20 group-hover:text-brand-blue group-hover:translate-x-1 transition-all ml-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Hero Header */}
        <div className="py-24 border-b border-brand-navy/5 mb-32 relative overflow-hidden">
          <div className="absolute inset-0 geo-pattern"></div>
          <div className="relative z-10">
            <div className="text-label-sleek text-brand-blue mb-8 uppercase tracking-wider">Capability 01</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl heading-sleek mb-10 text-brand-navy">
              Digital <br /> <span className="text-brand-blue">marketing</span> <br /><span className="opacity-20">systems.</span>
            </h1>
            <p className="text-lg md:text-xl font-normal text-brand-navy/40 max-w-2xl leading-relaxed">
              We don't "run ads." We build performance engines that continuously optimize for ROI using live AI insights.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Marketing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border hairline-border mb-48 bg-white sleek-shadow">
          {[
            {
              title: "Performance",
              desc: "Expert management across Google, Meta, and LinkedIn.",
              icon: Target
            },
            {
              title: "AI content",
              desc: "High-velocity production for ads and landing pages.",
              icon: PenTool
            },
            {
              title: "Strategy",
              desc: "Growth strategy aligned to your revenue goals.",
              icon: Globe
            },
            {
              title: "Analytics",
              desc: "Predictive insights and 24/7 campaign audits.",
              icon: BarChart
            }
          ].map((item, i) => (
            <div key={i} className="p-12 border-brand-navy border-r-0 md:border-r border-b last:border-0 hover:bg-brand-blue/5 transition-colors group">
              <item.icon className="w-10 h-10 mb-8 stroke-[1] text-brand-blue" />
              <h3 className="text-xl font-semibold mb-4 text-brand-navy">{item.title}</h3>
              <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* The Velocity Playbook Section */}
        <div className="mb-48">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl heading-sleek mb-4 text-brand-navy">The velocity playbook.</h2>
            <p className="text-label-sleek opacity-40 text-brand-navy uppercase tracking-widest">How we go from 0 to revenue in 4 steps</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Signal audit", desc: "We ingest your current data and competitor signals using AI to find the 'Path of Least Resistance'." },
              { step: "02", title: "Funnel build", desc: "Rapid deployment of high-converting landing pages and tracking pixels. Live in 72 hours." },
              { step: "03", title: "Creative sprint", desc: "AI-generated ad variations (static + video) deployed at scale to test messaging hypotheses." },
              { step: "04", title: "Scale engine", desc: "Aggressive budget reallocation to winning cohorts based on real-time data." }
            ].map((p, i) => (
              <div key={i} className="border border-brand-navy/5 p-8 bg-white sleek-shadow hover-lift transition-all">
                <div className="text-4xl font-semibold mb-6 opacity-10 text-brand-navy">{p.step}</div>
                <h3 className="text-md font-semibold mb-3 text-brand-navy">{p.title}</h3>
                <p className="text-[13px] font-normal text-brand-navy/50 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Tech Stack section */}
        <div className="mb-48 border border-brand-navy/5 p-12 md:p-20 bg-white sleek-shadow-blue">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
               <h2 className="text-3xl heading-sleek mb-6 text-brand-navy">Our tech <br /> <span className="text-brand-blue">advantage.</span></h2>
               <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed">
                 We don't use generic tools. We deploy a custom stack of proprietary AI scripts and enterprise MarTech to give idea-stage startups an edge.
               </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { icon: Cpu, name: "Gemini 3", use: "Copywriting & Intent Analysis" },
                 { icon: Database, name: "Custom RAG", use: "Competitor Intelligence Mapping" },
                 { icon: Gauge, name: "Hyros / GA4", use: "Advanced Attribution Tracking" },
                 { icon: Layers, name: "Proprietary Ads Engine", use: "Autonomous Budget Management" }
               ].map((t, i) => (
                 <div key={i} className="flex items-start gap-4">
                    <t.icon className="w-5 h-5 mt-1 shrink-0 text-brand-blue" />
                    <div>
                      <div className="font-semibold text-[14px] text-brand-navy">{t.name}</div>
                      <div className="text-[10px] opacity-40 font-medium uppercase tracking-widest mt-1 text-brand-navy">{t.use}</div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Results section */}
        <div className="bg-brand-navy text-white p-12 md:p-20 mb-32 border border-brand-navy/5 sleek-shadow-blue">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl heading-sleek mb-8 leading-tight">Faster. <br /> <span className="text-brand-blue">Cheaper.</span> <br /> <span className="text-brand-green">Smarter.</span></h2>
              <p className="text-[16px] font-normal opacity-50 mb-10 leading-relaxed">
                By integrating AI into every step, we reduce the manual drag that kills traditional agencies. We learn what works in days, not weeks.
              </p>
              <div className="flex items-center gap-4">
                 <div className="px-4 py-2 border border-white/10 text-[10px] font-semibold text-white uppercase tracking-wider">
                   Lower CAC
                 </div>
                 <div className="px-4 py-2 border border-white/10 text-[10px] font-semibold text-brand-green uppercase tracking-wider">
                   Higher ROAS
                 </div>
              </div>
            </div>
            <div className="flex-1 w-full grid grid-cols-1 gap-4">
               {[
                 { val: "30%", label: "CAC reduction" },
                 { val: "2X", label: "Creative speed" },
                 { val: "24/7", label: "Optimization" }
               ].map((stat, i) => (
                 <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-[11px] font-medium opacity-40 uppercase tracking-widest">{stat.label}</span>
                    <span className="text-3xl font-semibold tracking-tight text-brand-green">{stat.val}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
      <FinalCTA title="Grow smarter" subtitle="Stop guessing. Start scaling with AI systems." />
    </div>
  );
};

export default Marketing;
