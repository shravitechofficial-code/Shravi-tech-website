
import React from 'react';
import { 
  Monitor, Phone, ArrowRight, Zap, CheckCircle, 
  Search, Users, Activity, BarChart, Globe, 
  Target, PenTool, Database, Cpu, PieChart,
  MessageSquare, UserPlus, TrendingUp, Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import FinalCTA from './FinalCTA';

const LaunchZeroToOne: React.FC = () => {
  const featuredProof = CASE_STUDIES.filter(s => ['1acre', 'sumukha'].includes(s.id));

  const aiMarketingServices = [
    { icon: Rocket, title: "0-to-1 launch", desc: "Complete GTM execution from idea validation to your first 100 customers using autonomous sales pods." },
    { icon: Search, title: "AI SEO optimization", desc: "Autonomous technical SEO and keyword strategy that adapts to live search engine algorithm shifts." },
    { icon: PenTool, title: "AI content engine", desc: "High-velocity production of blogs, ads, and social posts that mirror your brand voice perfectly." },
    { icon: PieChart, title: "Product research", desc: "AI-driven mapping of product-market fit gaps and feature-priority modeling based on competitor sentiment." },
    { icon: Activity, title: "Competitive research", desc: "24/7 monitoring of competitor pricing, creative changes, and traffic sources with real-time alerts." },
    { icon: Globe, title: "Industry mapping", desc: "Deep-learning analysis of industry trends and regulatory shifts to identify long-term white space." },
    { icon: Users, title: "Predictive modeling", desc: "Identification of high-LTV customer cohorts before they even land on your site." },
    { icon: UserPlus, title: "Lead sourcing", desc: "Automated SDR agents that scrape and verify B2B leads across LinkedIn, Twitter, and niche directories." },
    { icon: Target, title: "Dynamic pricing", desc: "AI models that suggest optimal price points based on live demand and competitor movements." },
    { icon: MessageSquare, title: "Sentiment analysis", desc: "Real-time auditing of brand perception across social media and customer support logs." },
    { icon: Database, title: "Attribution engine", desc: "Multi-channel tracking that uses machine learning to identify the true source of every dollar." },
    { icon: TrendingUp, title: "Creative A/B testing", desc: "Autonomous ad creative generation and testing at a scale impossible for manual teams." }
  ];

  return (
    <div className="pt-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Featured Proof - Matching Screenshot */}
        <div className="pt-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="text-[10px] font-bold text-brand-navy/30 uppercase tracking-[0.3em] mb-4 ml-1">Proof</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProof.map((study) => (
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
                    <div className="text-2xl font-bold text-brand-navy leading-none">{study.stats?.[0]?.value || "Live"}</div>
                    <div className="text-[9px] font-medium text-brand-navy/40 uppercase tracking-widest mt-1">{study.stats?.[0]?.label || "Performance"}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-navy/20 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="py-24 border-b border-brand-navy/5 mb-32 relative overflow-hidden">
          <div className="absolute inset-0 geo-pattern"></div>
          <div className="relative z-10">
            <div className="text-label-sleek text-brand-blue mb-8 uppercase tracking-wider">Capability 03</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl heading-sleek mb-10 text-brand-navy">
              Marketing <br /> <span className="text-brand-blue">with AI.</span>
            </h1>
            <p className="text-lg md:text-xl font-normal text-brand-navy/40 max-w-2xl leading-relaxed">
              We replace manual marketing drag with agentic systems. Faster research, hyper-accurate targeting, and content that scales with your ambition.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-48">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl heading-sleek mb-4">Autonomous Marketing Stack</h2>
            <p className="text-sm font-normal text-brand-navy/40">10x faster execution. 100x more data points.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiMarketingServices.map((service, i) => (
              <div key={i} className="p-8 border border-brand-navy/5 bg-white sleek-shadow hover-lift transition-all group">
                <div className="w-10 h-10 bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <service.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-brand-navy">{service.title}</h3>
                <p className="text-[13px] font-normal text-brand-navy/50 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Accuracy Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-brand-navy/5 mb-48 bg-white sleek-shadow-blue overflow-hidden">
          <div className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-brand-navy/5">
            <h3 className="text-[10px] font-medium uppercase tracking-widest text-brand-navy/30 mb-10">Manual Research (Standard)</h3>
            <ul className="space-y-6">
              <li className="flex items-start text-[14px] font-normal text-brand-navy/40">
                <span className="w-1.5 h-1.5 bg-red-400 mt-2 mr-4 shrink-0"></span>
                3-4 weeks for a basic market audit.
              </li>
              <li className="flex items-start text-[14px] font-normal text-brand-navy/40">
                <span className="w-1.5 h-1.5 bg-red-400 mt-2 mr-4 shrink-0"></span>
                Human bias in competitive intelligence.
              </li>
              <li className="flex items-start text-[14px] font-normal text-brand-navy/40">
                <span className="w-1.5 h-1.5 bg-red-400 mt-2 mr-4 shrink-0"></span>
                Static reports that go out of date instantly.
              </li>
              <li className="flex items-start text-[14px] font-normal text-brand-navy/40">
                <span className="w-1.5 h-1.5 bg-red-400 mt-2 mr-4 shrink-0"></span>
                Inaccurate lead lists with high bounce rates.
              </li>
            </ul>
          </div>
          <div className="p-12 md:p-16 bg-brand-navy text-white relative">
            <div className="absolute inset-0 geo-pattern opacity-10"></div>
            <h3 className="text-[10px] font-medium uppercase tracking-widest text-brand-green/40 mb-10 relative z-10">Shravi AI Systems</h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start text-[14px] font-medium">
                <CheckCircle className="w-4 h-4 mr-4 text-brand-green shrink-0 mt-0.5" />
                48-hour deep-dive technical research.
              </li>
              <li className="flex items-start text-[14px] font-medium">
                <CheckCircle className="w-4 h-4 mr-4 text-brand-green shrink-0 mt-0.5" />
                0% human bias: pure data-driven mapping.
              </li>
              <li className="flex items-start text-[14px] font-medium">
                <CheckCircle className="w-4 h-4 mr-4 text-brand-green shrink-0 mt-0.5" />
                Live dashboards that update with every market signal.
              </li>
              <li className="flex items-start text-[14px] font-medium">
                <CheckCircle className="w-4 h-4 mr-4 text-brand-green shrink-0 mt-0.5" />
                Verified, enriched lead pools updated in real-time.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FinalCTA title="Accelerate your growth" subtitle="Replace slow agencies with fast, accurate AI marketing systems." />
    </div>
  );
};

export default LaunchZeroToOne;
