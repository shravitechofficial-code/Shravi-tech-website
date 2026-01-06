
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Zap, TrendingUp, Search, 
  Rocket, Box, Cpu, Globe, MessageSquare,
  ShieldCheck, Activity, Target, Briefcase
} from 'lucide-react';
import InlineChat from './InlineChat';
import { CASE_STUDIES } from '../constants';
// Added CaseStudy import for typing
import { CaseStudy } from '../types';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'traffic' | 'sales' | 'ops'>('traffic');
  const navigate = useNavigate();
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  const outcomes = {
    traffic: {
      label: "Market Visibility",
      title: "Dominating your local search.",
      desc: "We find where your buyers are hiding and put your offer in front of them using AI-driven search dominance."
    },
    sales: {
      label: "Revenue Capture",
      title: "Automated sales pipelines.",
      desc: "We build the funnels that qualify leads while you sleep, ensuring you only spend time on high-value closings."
    },
    ops: {
      label: "Zero Overhead",
      title: "Replacing manual drag.",
      desc: "We deploy autonomous systems that handle the repetitive tasks, letting you stay focused on the product vision."
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollSectionRef.current) return;
      
      const rect = scrollSectionRef.current.getBoundingClientRect();
      const sectionHeight = scrollSectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const scrollProgress = -rect.top / (sectionHeight - viewportHeight);
      
      if (scrollProgress < 0) {
        setActiveTab('traffic');
      } else if (scrollProgress < 0.33) {
        setActiveTab('traffic');
      } else if (scrollProgress < 0.66) {
        setActiveTab('sales');
      } else {
        setActiveTab('ops');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fixed: Explicitly typed ProofCard as React.FC with CaseStudy to resolve 'key' prop error and type mismatch.
  const ProofCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
    <Link 
      to="/proof" 
      key={study.id} 
      className="group bg-white border hairline-border p-8 flex items-center justify-between hover:sleek-shadow-blue transition-all"
    >
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 bg-brand-navy flex items-center justify-center shrink-0">
          <Activity className="w-6 h-6 text-brand-green" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-1.5">Live Deployment</div>
          <h4 className="text-sm font-bold text-brand-navy uppercase tracking-tight">{study.name}</h4>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="text-right hidden sm:block">
          <div className="text-2xl font-bold text-brand-navy leading-none">
            {study.stats?.[0]?.value || "Live"}
          </div>
          <div className="text-[9px] font-medium text-brand-navy/40 uppercase tracking-widest mt-1">
            {study.stats?.[0]?.label || "Operational"}
          </div>
        </div>
        <ArrowRight className="w-4 h-4 text-brand-navy/20 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );

  return (
    <div className="flex flex-col">
      {/* Interactive Scroll-Driven Hero */}
      <section 
        ref={scrollSectionRef} 
        className="relative h-[300vh] bg-brand-white"
      >
        <div className="sticky top-0 h-screen flex items-center pt-24 md:pt-28 overflow-hidden border-b border-brand-navy/5">
          <div className="absolute inset-0 geo-pattern"></div>
          
          <div className="absolute top-40 right-[10%] w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-center lg:items-start">
              
              <div className="flex-1 w-full text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-1.5 bg-white border hairline-border sleek-shadow-blue mb-6">
                  <ShieldCheck className="w-3.5 h-3.5 mr-2 text-brand-green" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy">AI Led Execution Partner</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl heading-sleek mb-6 tracking-tight leading-tight">
                  <span className="text-brand-navy">Your Idea.</span> <br className="hidden md:block" /> 
                  <span className="text-brand-blue">Our Execution.</span>
                </h1>

                <p className="text-sm md:text-base font-normal text-brand-navy/40 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  We are the 0-to-1 partner for founders. We don't just "consult"—we build the systems, run the campaigns, and find your first 100 customers.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                  {(['traffic', 'sales', 'ops'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        const part = tab === 'traffic' ? 0 : tab === 'sales' ? 0.4 : 0.8;
                        const scrollPos = scrollSectionRef.current!.offsetTop + (scrollSectionRef.current!.offsetHeight - window.innerHeight) * part;
                        window.scrollTo({ top: scrollPos, behavior: 'smooth' });
                      }}
                      className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                        activeTab === tab 
                        ? 'bg-brand-navy text-white sleek-shadow-blue' 
                        : 'bg-white text-brand-navy/40 border hairline-border hover:border-brand-blue'
                      }`}
                    >
                      {outcomes[tab].label}
                    </button>
                  ))}
                </div>

                <div className="mb-10 min-h-[100px]">
                  <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h3 className="text-xl font-bold text-brand-navy mb-2 uppercase tracking-tighter">
                      {outcomes[activeTab].title}
                    </h3>
                    <p className="text-[13px] text-brand-navy/60 max-w-md mx-auto lg:mx-0">
                      {outcomes[activeTab].desc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/book-call" className="bg-brand-blue text-white px-8 py-4 font-bold sleek-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center text-[11px] uppercase tracking-[0.2em]">
                    Let's Talk <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                  <Link to="/proof" className="bg-white text-brand-navy border hairline-border px-8 py-4 font-bold hover:bg-brand-navy/5 transition-all text-[11px] uppercase tracking-[0.2em]">
                    View Success Stories
                  </Link>
                </div>
              </div>

              {/* Right Side: Engine Status */}
              <div className="flex-1 w-full max-w-lg hidden lg:block">
                <div className="bg-white border hairline-border p-2 sleek-shadow-blue relative group">
                  <div className="bg-brand-navy p-8 relative overflow-hidden">
                    <div className="absolute inset-0 geo-pattern opacity-10"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-10">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                          <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em]">Protocol Status: Active</span>
                        </div>
                        <div className="text-[9px] font-bold text-brand-blue uppercase border border-brand-blue/30 px-2 py-0.5">v3.1</div>
                      </div>

                      <div className="space-y-6 mb-10">
                        {[
                          { label: "Market Signal Mapping", progress: '100%', status: "Complete" },
                          { label: "GTM Engine Build", progress: activeTab === 'sales' || activeTab === 'ops' ? '100%' : activeTab === 'traffic' ? '40%' : '100%', status: activeTab === 'traffic' ? 'Building' : 'Live' },
                          { label: "Sales Scale Phase", progress: activeTab === 'ops' ? '100%' : activeTab === 'sales' ? '65%' : '10%', status: activeTab === 'ops' ? 'Active' : 'Queued' }
                        ].map((step, i) => (
                          <div key={i}>
                            <div className="flex justify-between items-end mb-2">
                              <span className="text-[10px] font-bold text-white uppercase tracking-wider">{step.label}</span>
                              <span className="text-[9px] font-bold text-brand-green uppercase tracking-widest">{step.status}</span>
                            </div>
                            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-brand-blue transition-all duration-1000" style={{ width: step.progress }}></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-5 bg-white/5 border border-white/5 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                          <Activity className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                          <div key={activeTab} className="animate-in fade-in duration-500">
                            <div className="text-white text-[12px] font-medium leading-relaxed">
                              {activeTab === 'traffic' && '"System detected 14 high-value market gaps in your industry within the first 48 hours of audit."'}
                              {activeTab === 'sales' && '"Sales pods initiated. Routing high-intent signals directly to your automated pipeline."'}
                              {activeTab === 'ops' && '"Manual drag eliminated. Your execution engine is now running at zero overhead capacity."'}
                            </div>
                            <div className="text-[9px] font-bold text-white/30 uppercase mt-2 tracking-widest">Real-time Diagnostic Output</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 p-5 bg-brand-green/10 border-t border-brand-navy/5 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black text-brand-navy uppercase tracking-tighter">Bonus for founders</div>
                      <div className="text-[9px] font-bold text-brand-navy/40 uppercase tracking-widest mt-1">Free 0-1 Strategy Playbook</div>
                    </div>
                    <button 
                      onClick={() => navigate('/book-call')}
                      className="p-2.5 bg-brand-navy text-white hover:bg-brand-blue transition-colors"
                    >
                      <Briefcase className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl heading-sleek mb-4 text-brand-navy">Core execution pillars</h2>
            <p className="text-sm font-normal text-brand-blue/60 max-w-2xl mx-auto uppercase tracking-widest">
              We build the systems that drive your first million.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Link to="/solutions" className="group p-10 border border-brand-navy/5 bg-brand-white hover:bg-white hover:sleek-shadow-blue transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 border hairline-border border-brand-navy/10 flex items-center justify-center mb-8 bg-white group-hover:bg-brand-blue/5">
                <Cpu className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-navy uppercase tracking-tighter">AI Solutions</h3>
              <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed mb-10 flex-grow">
                Autonomous software and agentic workflows that replace manual overhead. We engineer custom vertical AI software designed for business outcomes.
              </p>
              <div className="text-[11px] font-bold text-brand-blue flex items-center uppercase tracking-[0.2em]">
                See technical systems <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </div>
            </Link>

            <Link to="/launch" className="group p-10 border border-brand-navy/5 bg-brand-white hover:bg-white hover:sleek-shadow-blue transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 border hairline-border border-brand-navy/10 flex items-center justify-center mb-8 bg-white group-hover:bg-brand-blue/5">
                <Rocket className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-navy uppercase tracking-tighter">Marketing with AI</h3>
              <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed mb-10 flex-grow">
                Performance engines that go beyond "running ads." We build ROI-focused GTM systems using technical SEO and predictive audience mapping.
              </p>
              <div className="text-[11px] font-bold text-brand-blue flex items-center uppercase tracking-[0.2em]">
                View growth systems <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-brand-white border-y border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl heading-sleek mb-3 text-brand-navy">The speed advantage</h2>
            <p className="text-sm font-normal text-brand-blue/60 uppercase tracking-widest">Auditing the traditional agency approach</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border hairline-border bg-white sleek-shadow">
              <thead>
                <tr className="bg-brand-navy text-white text-[10px] font-medium uppercase tracking-widest">
                  <th className="p-6 text-left border-r border-white/5">Metric</th>
                  <th className="p-6 text-left border-r border-white/5">Traditional agency</th>
                  <th className="p-6 text-left border-r border-white/5 text-brand-green">Shravi AI systems</th>
                  <th className="p-6 text-left">The Delta</th>
                </tr>
              </thead>
              <tbody className="text-[13px] text-brand-navy">
                {[
                  { challenge: "Market Intelligence", traditional: "4-6 weeks", shravi: "7-day sprint", outcome: "400% faster" },
                  { challenge: "Campaign Execution", traditional: "Manual setup", shravi: "Autonomous logic", outcome: "Real-time" },
                  { challenge: "Unit Economics", traditional: "Linear scaling", shravi: "AI optimization", outcome: "30% lower CAC" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-brand-navy/5 last:border-b-0">
                    <td className="p-6 border-r border-brand-navy/5 font-medium">{row.challenge}</td>
                    <td className="p-6 border-r border-brand-navy/5 opacity-40">{row.traditional}</td>
                    <td className="p-6 border-r border-brand-navy/5 font-semibold text-brand-blue">{row.shravi}</td>
                    <td className="p-6">
                      <span className="bg-brand-green/20 text-brand-navy px-3 py-1 font-bold uppercase text-[10px] tracking-widest">
                        {row.outcome}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Proof of Work - CATEGORIZED */}
      <section className="py-32 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[10px] font-bold text-brand-navy/30 uppercase tracking-[0.3em] mb-12 ml-1">Proof</div>
          
          {/* AI Solutions Row */}
          <div className="mb-20">
            <div className="text-[11px] font-bold text-brand-navy/60 uppercase tracking-[0.15em] mb-8 flex items-center gap-4">
              AI Solutions <div className="h-px flex-1 bg-brand-navy/5"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CASE_STUDIES.filter(s => ['insta-reels', 'ai-ads-gen'].includes(s.id)).map((study) => (
                <ProofCard key={study.id} study={study} />
              ))}
            </div>
          </div>

          {/* Marketing Row */}
          <div>
            <div className="text-[11px] font-bold text-brand-navy/60 uppercase tracking-[0.15em] mb-8 flex items-center gap-4">
              Marketing with AI <div className="h-px flex-1 bg-brand-navy/5"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CASE_STUDIES.filter(s => ['1acre', 'sumukha'].includes(s.id)).map((study) => (
                <ProofCard key={study.id} study={study} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Lead Capture Terminal */}
      <section className="py-32 bg-brand-white border-t border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl heading-sleek mb-2 text-brand-navy">What are we launching today?</h2>
            <p className="text-[13px] font-normal text-brand-blue/60 uppercase tracking-[0.2em]">Instant Business Diagnostic</p>
          </div>
          <InlineChat />
        </div>
      </section>

      {/* Refined Results Grid */}
      <section className="py-32 bg-white border-t border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl heading-sleek mb-12 text-brand-navy leading-tight">Ready for <br /> <span className="text-brand-blue">impact?</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-call" className="bg-brand-navy text-white px-12 py-5 font-bold sleek-shadow-blue hover:bg-brand-blue transition-all text-[12px] uppercase tracking-[0.2em]">
              Let's Talk
            </Link>
            <Link to="/proof" className="bg-transparent text-brand-navy border hairline-border px-12 py-5 font-bold hover:bg-brand-navy/5 transition-all text-[12px] uppercase tracking-[0.2em]">
              View Evidence
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
