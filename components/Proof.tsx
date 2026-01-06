
import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import { Zap, ArrowRight, Target, Cpu, TrendingUp, BarChart3, CheckSquare, CheckCircle2, Layout, Globe, MapPin, ShoppingBag } from 'lucide-react';

const Proof: React.FC = () => {
  const aiSolutions = CASE_STUDIES.filter(s => s.category === 'software');
  const digitalMarketing = CASE_STUDIES.filter(s => s.category === 'marketing');

  const CompactStudyCard: React.FC<{ study: any }> = ({ study }) => (
    <div className="border-4 border-brand-navy bg-white hard-shadow shadow-brand-blue flex flex-col h-full group hover:-translate-y-2 transition-transform">
      {/* Header with High-Impact Metric */}
      <div className="p-8 border-b-4 border-brand-navy bg-brand-navy text-white flex justify-between items-center">
        <div className="flex-1">
          <div className="text-[11px] font-black text-brand-green mb-2 uppercase tracking-[0.2em]">{study.industry}</div>
          <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight">{study.name}</h3>
        </div>
        <div className="ml-6 flex flex-col items-end gap-2">
          {study.stats?.map((stat: any, idx: number) => (
            <div key={idx} className="bg-brand-blue text-white px-5 py-2 border-2 border-brand-blue shadow-[3px_3px_0px_0px_#77F2A1]">
              <div className="text-[9px] uppercase opacity-70 mb-1 text-center leading-none font-black tracking-widest">{stat.label}</div>
              <div className="text-3xl font-black uppercase whitespace-nowrap leading-tight text-center">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Mockup Area */}
      <div className="bg-brand-white border-b-4 border-brand-navy aspect-[16/8] relative overflow-hidden flex items-center justify-center p-10">
        <div className="absolute inset-0 geo-pattern opacity-10"></div>
        {study.id === 'insta-reels' && (
          <div className="flex flex-col items-center relative z-10">
            <Layout className="w-16 h-16 text-brand-blue/30 mb-5" />
            <div className="text-5xl font-black tracking-tighter text-brand-navy/90">3,000+ REELS</div>
            <div className="text-[11px] font-black text-brand-blue uppercase tracking-[0.25em] mt-2">HOOK ANALYSIS ENGINE</div>
          </div>
        )}
        {study.id === '1acre' && (
          <div className="flex flex-col items-center relative z-10">
            <Globe className="w-16 h-16 text-brand-blue/30 mb-5" />
            <div className="text-5xl font-black tracking-tighter text-brand-navy/90">400% GROWTH</div>
            <div className="text-[11px] font-black text-brand-blue uppercase tracking-[0.25em] mt-2">SEARCH DOMINANCE</div>
          </div>
        )}
        {study.id === 'sumukha' && (
          <div className="flex flex-col items-center relative z-10">
            <MapPin className="w-16 h-16 text-brand-blue/30 mb-5" />
            <div className="text-5xl font-black tracking-tighter text-brand-navy/90">5KM RADIUS</div>
            <div className="text-[11px] font-black text-brand-blue uppercase tracking-[0.25em] mt-2">HYPER-LOCAL ADS</div>
          </div>
        )}
        {study.id === 'novelblack' && (
          <div className="flex flex-col items-center relative z-10">
            <ShoppingBag className="w-16 h-16 text-brand-blue/30 mb-5" />
            <div className="text-5xl font-black tracking-tighter text-brand-navy/90">RAPID GTM</div>
            <div className="text-[11px] font-black text-brand-blue uppercase tracking-[0.25em] mt-2">D2C LAUNCH SYSTEM</div>
          </div>
        )}
        {!['insta-reels', '1acre', 'sumukha', 'novelblack'].includes(study.id) && (
          <div className="relative z-10 text-center">
            <div className="text-4xl font-black text-brand-navy/80 uppercase tracking-tighter mb-2">{study.aiUsed}</div>
            <div className="text-[11px] font-black text-brand-blue uppercase tracking-[0.2em]">{study.timeline} • SYSTEM DEPLOYMENT</div>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-10 flex-grow flex flex-col">
        <div className="mb-8">
          <div className="text-[11px] font-black uppercase mb-4 text-brand-navy/40 flex items-center gap-3 tracking-[0.2em]">
            <CheckSquare className="w-4 h-4 text-brand-blue" /> Services Provided
          </div>
          <div className="flex flex-wrap gap-2.5">
            {study.services?.map((service: string, i: number) => (
              <span key={i} className="text-[10px] font-black border-2 border-brand-navy px-3 py-1.5 uppercase tracking-tighter bg-white shadow-[3px_3px_0px_0px_rgba(79,118,246,1)]">
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-10 flex-grow space-y-8">
          <div>
            <div className="text-[11px] font-black uppercase mb-2 text-brand-navy/40 flex items-center gap-3 tracking-[0.2em]">
              <Target className="w-4 h-4 text-brand-blue" /> The Challenge
            </div>
            <p className="text-base font-medium leading-relaxed text-brand-navy/80 line-clamp-4">
              {study.problem}
            </p>
          </div>
          
          <div>
            <div className="text-[11px] font-black uppercase mb-3 text-brand-navy/40 flex items-center gap-3 tracking-[0.2em]">
              <CheckCircle2 className="w-4 h-4 text-brand-green" /> Key Results
            </div>
            <ul className="space-y-3">
              {study.impact?.slice(0, 3).map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-blue mt-2 shrink-0"></div>
                  <span className="text-xs font-black uppercase tracking-tight text-brand-navy/90 leading-tight">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto pt-8 border-t-2 border-brand-navy/10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-brand-blue" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-navy">Built by Shravi</span>
          </div>
          <Link 
            to="/book-call" 
            className="text-[11px] font-black border-b-2 border-brand-blue pb-1 text-brand-blue hover:text-brand-navy transition-all uppercase tracking-[0.15em]"
          >
            GET RESULTS <ArrowRight className="inline w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 pb-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 border-b-2 border-brand-navy mb-24 relative overflow-hidden">
          <div className="absolute inset-0 geo-pattern"></div>
          <div className="relative z-10">
            <div className="text-label-caps text-brand-blue mb-8">Case Studies</div>
            <h1 className="text-7xl md:text-9xl heading-bold mb-12 tracking-tighter uppercase text-brand-navy">
              PROOF <br /> <span className="text-brand-blue">OF WORK.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-brand-navy/60 max-w-2xl leading-relaxed">
              We don't build generic projects. We deploy high-performance systems and execute growth playbooks that drive measurable traffic and revenue.
            </p>
          </div>
        </div>

        {/* AI Systems Section - 2 columns per row */}
        <section className="mb-48">
          <div className="flex items-center gap-6 mb-16 border-b-4 border-brand-navy pb-10">
            <div className="w-16 h-16 bg-brand-navy flex items-center justify-center hard-shadow shadow-brand-blue">
              <Cpu className="text-brand-green w-8 h-8" />
            </div>
            <div>
              <h2 className="text-5xl heading-bold uppercase tracking-tighter text-brand-navy">AI Systems & Software</h2>
              <p className="text-label-caps opacity-50 text-brand-blue">Autonomous Workflows & Infrastructure</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {aiSolutions.map((study) => (
              <CompactStudyCard key={study.id} study={study} />
            ))}
          </div>
        </section>

        {/* Marketing Section - Updated to strictly 2 columns per row */}
        <section className="mb-48">
          <div className="flex items-center gap-6 mb-16 border-b-4 border-brand-navy pb-10">
            <div className="w-16 h-16 bg-brand-navy flex items-center justify-center hard-shadow shadow-brand-blue">
              <TrendingUp className="text-brand-green w-8 h-8" />
            </div>
            <div>
              <h2 className="text-5xl heading-bold uppercase tracking-tighter text-brand-navy">Growth Marketing</h2>
              <p className="text-label-caps opacity-50 text-brand-blue">Performance Engines & Traffic Systems</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {digitalMarketing.map((study) => (
              <CompactStudyCard key={study.id} study={study} />
            ))}
          </div>
        </section>

        {/* Global Footer Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-4 border-brand-navy bg-white hard-shadow shadow-brand-blue">
          {[
            { label: "Successful Launches", val: "40+", icon: Zap },
            { label: "Efficiency Boost", val: "80%", icon: BarChart3 },
            { label: "Revenue Lift", val: "2x", icon: TrendingUp },
            { label: "Organic Growth", val: "4x", icon: Cpu }
          ].map((stat, i) => (
            <div key={i} className="p-16 text-center border-brand-navy last:border-0 md:border-r-4 border-b-4 md:border-b-0 group hover:bg-brand-navy hover:text-white transition-colors">
              <stat.icon className="w-8 h-8 mx-auto mb-8 text-brand-blue group-hover:text-brand-green transition-colors" />
              <div className="text-6xl font-black mb-3 text-brand-navy group-hover:text-white leading-none">{stat.val}</div>
              <div className="text-[11px] font-black uppercase text-brand-navy/40 group-hover:text-brand-green tracking-[0.25em]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-48 text-center p-24 bg-white border-8 border-brand-navy border-dashed hard-shadow shadow-brand-green">
          <h2 className="text-5xl md:text-6xl heading-bold mb-10 uppercase text-brand-navy">Ready to be our next success story?</h2>
          <Link 
            to="/book-call" 
            className="inline-flex bg-brand-blue text-white px-16 py-8 font-black tracking-[0.25em] hard-shadow shadow-brand-navy hard-shadow-hover transition-all uppercase items-center gap-4 text-xl"
          >
            BOOK YOUR 0-1 STRATEGY AUDIT <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Proof;
