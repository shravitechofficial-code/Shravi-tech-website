
import React from 'react';
import { Cpu, MessageSquare, Users, Settings, Database, Code, CheckCircle, ArrowRight, Bot, Shield, Zap, Search, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import FinalCTA from './FinalCTA';

const Solutions: React.FC = () => {
  const successStories = CASE_STUDIES.filter(s => 
    ['insta-reels', 'ai-image-gen', 'ai-ads-gen'].includes(s.id)
  );

  return (
    <div className="pt-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 md:py-32 border-b border-brand-navy/5 mb-32 relative overflow-hidden">
          <div className="absolute inset-0 geo-pattern"></div>
          <div className="relative z-10">
            <div className="text-label-sleek text-brand-blue mb-8 uppercase tracking-wider">Capability 02</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl heading-sleek mb-10 text-brand-navy">
              AI <br /> <span className="text-brand-blue">solutions</span> <br /><span className="opacity-20">& software.</span>
            </h1>
            <p className="text-lg md:text-xl font-normal text-brand-navy/40 max-w-2xl leading-relaxed">
              We engineer custom AI vertical software and autonomous agents designed to replace high-drag manual operations.
            </p>
          </div>
        </div>

        {/* Intelligence Architecture */}
        <div className="mb-48">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl heading-sleek uppercase mb-4 text-brand-navy">Intelligence <span className="text-brand-blue">architecture.</span></h2>
            <p className="text-label-sleek opacity-40 text-brand-navy uppercase tracking-widest">Proprietary logic for modern startups</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border hairline-border sleek-shadow bg-white">
            {[
              { 
                icon: Network, 
                title: "Agentic workflows", 
                desc: "Custom agents that qualify leads, scrape data, and perform cross-platform execution." 
              },
              { 
                icon: Shield, 
                title: "Private infrastructure", 
                desc: "Deploy secure, proprietary LLM instances to ensure business logic remains private." 
              },
              { 
                icon: Database, 
                title: "Knowledge RAG", 
                desc: "Neural search systems connecting company data to LLM interfaces with 0% hallucination." 
              }
            ].map((arch, i) => (
              <div key={i} className="p-10 md:p-12 border-brand-navy last:border-0 md:border-r border-b md:border-b-0 hover:bg-brand-blue/5 transition-all group">
                <arch.icon className="w-8 h-8 mb-8 stroke-[1] text-brand-blue" />
                <h3 className="text-lg font-semibold mb-4 text-brand-navy">{arch.title}</h3>
                <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed">{arch.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-48">
          <h2 className="text-2xl font-semibold mb-12 text-brand-navy tracking-tight">Capabilities <span className="text-brand-blue">matrix</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Chat logic", desc: "Intent-based qualification funnels.", icon: MessageSquare },
              { title: "Auto-outbound", desc: "Automated SDR agents scaling outreach.", icon: Users },
              { title: "Predictive ops", desc: "CRM automation and data enrichment.", icon: Bot },
              { title: "Custom BI", desc: "Real-time AI dashboards for founders.", icon: Settings }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-brand-navy/5 bg-white sleek-shadow-blue hover-lift transition-all">
                <item.icon className="w-6 h-6 mb-6 stroke-[1] text-brand-blue" />
                <h3 className="text-[13px] font-semibold mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className="text-[12px] font-normal opacity-40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation journey */}
        <div className="mb-48 py-32 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 geo-pattern opacity-10"></div>
          <div className="text-center mb-24 relative z-10 px-4">
             <h2 className="text-4xl md:text-5xl heading-sleek">Implementation <span className="text-brand-green">protocol.</span></h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto gap-16 lg:gap-0 relative z-10 px-8">
             {[
               { icon: Search, title: "Audit", desc: "Gap mapping" },
               { icon: Code, title: "Dev", desc: "Rapid build" },
               { icon: Zap, title: "Launch", desc: "Live API" },
               { icon: CheckCircle, title: "Scale", desc: "Daily tuning" }
             ].map((step, i, arr) => (
               <React.Fragment key={i}>
                 <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 border border-white/10 bg-white/5 flex items-center justify-center rounded-full mb-6 sleek-shadow-blue">
                      <step.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <h4 className="font-semibold text-sm tracking-wide mb-1">{step.title}</h4>
                    <p className="text-[10px] font-medium opacity-30 uppercase tracking-widest">{step.desc}</p>
                 </div>
                 {i !== arr.length - 1 && (
                   <div className="hidden lg:block w-20 h-px bg-white/10"></div>
                 )}
               </React.Fragment>
             ))}
          </div>
        </div>
      </div>
      <FinalCTA title="Build your AI engine" subtitle="Transition from manual overhead to autonomous speed." />
    </div>
  );
};

export default Solutions;
