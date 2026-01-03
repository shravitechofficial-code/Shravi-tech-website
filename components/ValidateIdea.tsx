
import React from 'react';
import { Search, Users, Activity, FileText, ArrowRight, X, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FinalCTA from './FinalCTA';

const ValidateIdea: React.FC = () => {
  return (
    <div className="pt-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 md:py-32 border-b border-brand-navy/5 mb-24 relative overflow-hidden">
          <div className="absolute inset-0 geo-pattern"></div>
          <div className="relative z-10">
            <div className="text-label-sleek text-brand-blue mb-8 uppercase tracking-wider">Phase 01</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl heading-sleek mb-10 text-brand-navy">
              Market <br /> <span className="text-brand-blue">validation.</span>
            </h1>
            <p className="text-lg md:text-xl font-normal text-brand-navy/40 max-w-2xl leading-relaxed">
              Stop building in the dark. We use AI to analyze thousands of data points to find your market gap before you write code.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-40">
          <div className="flex-1">
            <div className="space-y-12">
              {[
                { icon: Search, title: "AI market scan", desc: "Competitor white-space mapping and underserved niche detection." },
                { icon: Users, title: "ICP definition", desc: "Dynamic persona building using AI-driven behavioral modeling." },
                { icon: Activity, title: "Risk audit", desc: "Demand sensitivity modeling and unit economic testing." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8">
                  <div className="w-12 h-12 border border-brand-navy/10 bg-white flex items-center justify-center shrink-0 sleek-shadow">
                    <item.icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-brand-navy">{item.title}</h3>
                    <p className="text-sm font-normal text-brand-navy/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <Link to="/book-call" className="bg-brand-blue text-white px-8 py-4 font-medium sleek-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-flex items-center text-[13px]">
                Start validation sprint <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <div className="border border-brand-navy/5 p-10 bg-white sleek-shadow-blue relative">
               <h3 className="text-xl font-semibold mb-10 flex items-center text-brand-navy">
                 <FileText className="w-5 h-5 mr-3 text-brand-blue" /> Deliverables
               </h3>
               <ul className="space-y-6">
                 {[
                   "Full market intelligence report",
                   "Ideal customer profile playbook",
                   "Demand testing data set",
                   "1-hour strategic roadmap session"
                 ].map((d, i) => (
                   <li key={i} className="flex items-center text-[14px] font-normal text-brand-navy/60 border-b border-brand-navy/5 pb-5 last:border-0">
                     <div className="w-1.5 h-1.5 bg-brand-blue mr-4"></div> {d}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>

        {/* Advantage Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-brand-navy/5 mb-32 sleek-shadow">
          <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-brand-navy/5 bg-white">
            <h3 className="text-[10px] font-medium uppercase tracking-widest text-brand-navy/30 mb-10">The standard way</h3>
            <ul className="space-y-6 text-brand-navy/40">
              <li className="flex items-center text-[13px] font-medium"><X className="w-4 h-4 mr-4 text-red-300" /> Wasting $50k on engineering</li>
              <li className="flex items-center text-[13px] font-medium"><X className="w-4 h-4 mr-4 text-red-300" /> Building ignored features</li>
              <li className="flex items-center text-[13px] font-medium"><X className="w-4 h-4 mr-4 text-red-300" /> Months of silent feedback</li>
            </ul>
          </div>
          <div className="p-12 md:p-16 bg-brand-navy text-white">
            <h3 className="text-[10px] font-medium uppercase tracking-widest text-brand-green/40 mb-10">The Shravi Way</h3>
            <ul className="space-y-6">
              <li className="flex items-center text-[13px] font-medium"><CheckCircle className="w-4 h-4 mr-4 text-brand-green" /> Data-backed roadmap</li>
              <li className="flex items-center text-[13px] font-medium"><CheckCircle className="w-4 h-4 mr-4 text-brand-green" /> 14-day validation loop</li>
              <li className="flex items-center text-[13px] font-medium"><CheckCircle className="w-4 h-4 mr-4 text-brand-green" /> Immediate investor confidence</li>
            </ul>
          </div>
        </div>
      </div>
      <FinalCTA title="Validate now" subtitle="Stop guessing. Get your market audit today." />
    </div>
  );
};

export default ValidateIdea;
