
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Zap, TrendingUp, Search, 
  Rocket, Box, Cpu, Globe, MessageSquare
} from 'lucide-react';
import { CASE_STUDIES } from '../constants';
import InlineChat from './InlineChat';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-48 bg-brand-white overflow-hidden border-b border-brand-navy/5">
        <div className="absolute inset-0 geo-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 border hairline-border font-medium text-[10px] mb-8 bg-white text-brand-navy sleek-shadow-blue tracking-wide">
                <Cpu className="w-3 h-3 mr-2 text-brand-blue" />
                AI-powered partner for idea-stage startups
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl heading-sleek text-brand-navy mb-8">
                Build your <br /> <span className="text-brand-blue">growth engine</span> <br /> in 90 days.
              </h1>
              <p className="text-lg md:text-xl font-normal text-brand-navy/50 mb-10 max-w-xl leading-relaxed">
                We handle market research, GTM execution, and automated sales systems so you can focus on building the product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/book-call" className="bg-brand-blue text-white px-8 py-4 font-medium sleek-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center text-[13px]">
                  Book a strategy audit <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/launch" className="bg-white text-brand-navy border hairline-border px-8 py-4 font-medium hover:bg-brand-navy/5 transition-all text-[13px]">
                  Read the playbook
                </Link>
              </div>
              
              <div className="mt-16 flex flex-wrap gap-10 justify-center lg:justify-start">
                <div className="text-[11px] font-normal text-brand-navy/30 tracking-wide uppercase">40+ startups launched</div>
                <div className="text-[11px] font-normal text-brand-blue/50 tracking-wide uppercase">60% faster validation</div>
                <div className="text-[11px] font-normal text-brand-navy/30 tracking-wide uppercase">3x lead conversion</div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-lg">
              <div className="relative border hairline-border p-2 bg-white sleek-shadow-blue">
                <div className="aspect-[4/3] bg-brand-navy flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
                   <div className="absolute inset-0 geo-pattern opacity-10"></div>
                   <Box className="w-16 h-16 text-brand-blue stroke-[1] mb-6 relative z-10" />
                   <div className="text-white text-[10px] font-medium tracking-widest uppercase opacity-40 relative z-10">Operating status</div>
                   <div className="text-brand-green text-xl font-medium tracking-tight mt-2 relative z-10">AI systems active</div>
                </div>
                <div className="absolute -top-3 -right-3 bg-brand-green border hairline-border px-4 py-2 font-medium text-[10px] uppercase text-brand-navy sleek-shadow tracking-widest">
                  IIM-A Led
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
            <p className="text-sm font-normal text-brand-blue/60 max-w-2xl mx-auto">
              Our firm operates at the intersection of growth and engineering. We build the systems that drive your first million.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/marketing" className="group p-10 border border-brand-navy/5 bg-brand-white hover:bg-white hover:sleek-shadow-blue transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 border hairline-border border-brand-navy/10 flex items-center justify-center mb-8 bg-white group-hover:bg-brand-blue/5">
                <Globe className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-navy">Digital marketing</h3>
              <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed mb-10 flex-grow">
                Performance engines that go beyond "running ads." We build ROI-focused systems using predictive audience modeling.
              </p>
              <div className="text-[11px] font-medium text-brand-blue flex items-center">
                Explore growth engines <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </div>
            </Link>

            <Link to="/launch" className="group p-10 border border-brand-navy/5 bg-brand-white hover:bg-white hover:sleek-shadow-blue transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 border hairline-border border-brand-navy/10 flex items-center justify-center mb-8 bg-white group-hover:bg-brand-blue/5">
                <Rocket className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-navy">0-to-1 launch</h3>
              <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed mb-10 flex-grow">
                A compressed 90-day sprint from idea validation to first revenue. Done-for-you GTM, funnels, and sales.
              </p>
              <div className="text-[11px] font-medium text-brand-blue flex items-center">
                View 90-day playbook <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </div>
            </Link>

            <Link to="/solutions" className="group p-10 border border-brand-navy/5 bg-brand-white hover:bg-white hover:sleek-shadow-blue transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 border hairline-border border-brand-navy/10 flex items-center justify-center mb-8 bg-white group-hover:bg-brand-blue/5">
                <Cpu className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-navy">AI solutions</h3>
              <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed mb-10 flex-grow">
                Autonomous software and agentic workflows that replace manual overhead. Custom vertical AI builds.
              </p>
              <div className="text-[11px] font-medium text-brand-blue flex items-center">
                See technical systems <ArrowRight className="ml-2 w-3.5 h-3.5" />
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
            <p className="text-sm font-normal text-brand-blue/60">Auditing the traditional agency approach</p>
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
                    <td className="p-6 text-brand-green font-semibold uppercase text-[11px]">{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Engine Section */}
      <section className="py-32 bg-white border-t border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl heading-sleek mb-4 text-brand-navy">The 90-day protocol.</h2>
              <p className="text-md font-normal text-brand-navy/40 leading-relaxed">
                A technical execution framework designed to move idea-stage startups from concept to revenue.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                stage: "01", 
                title: "Validation", 
                timeline: "Weeks 1-2",
                desc: "AI-driven market mapping and customer interview sentiment analysis.",
                icon: Search,
                link: "/validate"
              },
              { 
                stage: "02", 
                title: "Deployment", 
                timeline: "Weeks 3-6",
                desc: "High-fidelity GTM funnels, creative automation, and technical setup.",
                icon: Rocket,
                link: "/launch"
              },
              { 
                stage: "03", 
                title: "Scale", 
                timeline: "Weeks 7-12",
                desc: "Autonomous sales agents and predictive lead scoring engines.",
                icon: TrendingUp,
                link: "/scale"
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-brand-white border border-brand-navy/5 sleek-shadow hover-lift transition-all flex flex-col h-full">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-3xl font-semibold opacity-10 text-brand-navy">{item.stage}</span>
                  <span className="text-[10px] font-medium border border-brand-blue/20 px-2 py-0.5 text-brand-blue bg-brand-blue/5">{item.timeline}</span>
                </div>
                <item.icon className="w-8 h-8 mb-6 stroke-[1] text-brand-blue" />
                <h3 className="text-lg font-semibold mb-3 text-brand-navy">{item.title}</h3>
                <p className="text-[14px] font-normal text-brand-navy/50 leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <Link to={item.link} className="text-[11px] font-medium border-b border-brand-navy/10 hover:border-brand-blue pb-0.5 flex items-center w-fit transition-colors">
                  Technical specifications <ArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Lead Capture Terminal */}
      <section className="py-24 bg-brand-white border-t border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl heading-sleek mb-2 text-brand-navy">Market feasibility audit</h2>
            <p className="text-[13px] font-normal text-brand-blue/60">Instant response based on active market data</p>
          </div>
          <InlineChat />
        </div>
      </section>

      {/* Refined Results Grid */}
      <section className="py-32 bg-white border-t border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl heading-sleek mb-12 text-brand-navy leading-tight">Ready for <br /> <span className="text-brand-blue">impact?</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-call" className="bg-brand-navy text-white px-10 py-4 font-medium sleek-shadow-blue hover:bg-brand-blue transition-all text-[13px]">
              Book technical review
            </Link>
            <Link to="/proof" className="bg-transparent text-brand-navy border hairline-border px-10 py-4 font-medium hover:bg-brand-navy/5 transition-all text-[13px]">
              View evidence
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
