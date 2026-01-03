
import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM } from '../constants';
import { Linkedin, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 pb-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 border-b-2 border-brand-navy mb-32 relative overflow-hidden">
          <div className="absolute inset-0 geo-pattern"></div>
          <div className="relative z-10">
            <div className="text-label-caps text-brand-blue mb-8">The Partners</div>
            <h1 className="text-7xl md:text-9xl heading-bold mb-12 tracking-tighter uppercase text-brand-navy">
              FOUNDERS <br /> FOR <span className="text-brand-blue">FOUNDERS.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-brand-navy/60 max-w-3xl leading-relaxed">
              We are IIM Ahmedabad alumni who spent a decade building and scaling. Now, we provide the execution edge we wish we had.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-48">
          {TEAM.map((member) => (
            <div key={member.name} className="border-4 border-brand-navy p-10 bg-white hard-shadow shadow-brand-blue group">
              <div className="aspect-square bg-brand-white mb-10 border-4 border-brand-navy overflow-hidden relative hard-shadow shadow-brand-navy">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-5 right-5 bg-brand-navy text-brand-green p-3 border-2 border-brand-navy hard-shadow shadow-white">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter text-brand-navy">{member.name}</h3>
              <div className="text-[11px] font-black text-brand-blue uppercase mb-8 tracking-[0.25em]">{member.role}</div>
              <p className="text-base font-medium leading-relaxed text-brand-navy/70">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Ownership Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-4 border-brand-navy mb-40 hard-shadow shadow-brand-green">
          <div className="p-20 border-b-4 md:border-b-0 md:border-r-4 border-brand-navy bg-white">
             <h3 className="text-3xl font-black mb-16 uppercase tracking-tighter text-brand-navy">WHAT WE <span className="text-brand-blue">OWN</span></h3>
             <ul className="space-y-8">
                {["AI Market Research", "Funnel Design & Build", "Ad Campaign Management", "Sales Lead Sourcing"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-black tracking-[0.2em] uppercase text-brand-navy"><div className="w-4 h-4 bg-brand-blue mr-5 shrink-0"></div> {item}</li>
                ))}
             </ul>
          </div>
          <div className="p-20 bg-brand-navy text-white">
             <h3 className="text-3xl font-black mb-16 uppercase tracking-tighter text-brand-green">WHAT YOU OWN</h3>
             <ul className="space-y-8">
                {["Product Vision", "Intellectual Property", "High-Value Closing", "Engineering Strategy"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-black tracking-[0.2em] uppercase opacity-85"><div className="w-4 h-4 bg-brand-green mr-5 shrink-0"></div> {item}</li>
                ))}
             </ul>
          </div>
        </div>

        <div className="text-center">
           <p className="text-xl font-bold mb-16 tracking-tighter italic opacity-50 text-brand-navy max-w-2xl mx-auto">"We own the execution so you can own the vision."</p>
           <Link to="/book-call" className="inline-flex bg-brand-blue text-white px-16 py-8 font-black tracking-[0.25em] hard-shadow shadow-brand-navy hard-shadow-hover transition-all uppercase text-lg items-center gap-4">
             MEET THE STRATEGISTS <ArrowRight className="w-7 h-7" />
           </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
