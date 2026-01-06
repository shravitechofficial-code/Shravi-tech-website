
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ValidateIdea from './components/ValidateIdea';
import LaunchZeroToOne from './components/LaunchZeroToOne';
import ScaleRevenue from './components/ScaleRevenue';
import Proof from './components/Proof';
import About from './components/About';
import ExitPopup from './components/ExitPopup';
import Marketing from './components/Marketing';
import Solutions from './components/Solutions';
import { 
  Calendar, MessageSquare, Map, ArrowRight, 
  ExternalLink, ShieldCheck 
} from 'lucide-react';

const BookCall = () => {
  const bookingLink = "https://calendar.app.google/iH3fHTvj7qVQ6PEv8";

  return (
    <div className="pt-40 pb-64 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="text-label-caps text-brand-blue mb-6">Growth Consultation</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl heading-bold mb-8 uppercase text-brand-navy leading-tight">
            Schedule Your <br /> <span className="text-brand-blue">Strategy Session.</span>
          </h1>
          <p className="text-lg font-normal text-brand-navy/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Move from high-drag manual work to automated growth. Book a direct session with our founding partners to audit your current business systems.
          </p>
          <a 
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-navy text-white px-10 py-5 font-bold sleek-shadow-blue hover:bg-brand-blue transition-all text-[12px] uppercase tracking-[0.2em] inline-flex items-center gap-3"
          >
            Open Scheduler <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Step-by-Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              step: "01", 
              icon: Calendar, 
              title: "Pick a Time", 
              desc: "Choose a 30-minute slot that fits your schedule for a focused growth audit." 
            },
            { 
              step: "02", 
              icon: MessageSquare, 
              title: "Share Context", 
              desc: "Briefly describe your current business hurdle so we can prepare data signals beforehand." 
            },
            { 
              step: "03", 
              icon: Map, 
              title: "Get Roadmap", 
              desc: "Walk away with a clear technical and marketing plan to scale your startup." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border hairline-border p-10 sleek-shadow group hover:sleek-shadow-blue transition-all">
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="text-3xl font-black text-brand-navy/10 group-hover:text-brand-blue/20 transition-colors">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-[14px] font-normal text-brand-navy/40 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Final High-Impact CTA Row */}
        <div className="w-full max-w-5xl mx-auto bg-brand-navy text-white border hairline-border sleek-shadow-blue p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute inset-0 geo-pattern opacity-10"></div>
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.25em]">Direct Access Enabled</span>
            </div>
            <h2 className="text-3xl md:text-4xl heading-bold uppercase tracking-tight mb-4">Ready to lock in your slot?</h2>
            <p className="text-sm font-normal text-white/50 leading-relaxed">
              Redirecting to Google Calendar's secure booking portal. 
              Please have your core business problem statement ready.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a 
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-12 py-6 font-bold sleek-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center text-[13px] uppercase tracking-[0.25em]"
            >
              Confirm Availability <ArrowRight className="ml-3 w-5 h-5" />
            </a>
            <div className="mt-4 flex items-center justify-center gap-2 text-[9px] font-bold text-white/30 uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" /> Encrypted Session
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/validate" element={<ValidateIdea />} />
          <Route path="/launch" element={<LaunchZeroToOne />} />
          <Route path="/scale" element={<ScaleRevenue />} />
          <Route path="/proof" element={<Proof />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <ExitPopup />
      </Layout>
    </Router>
  );
};

export default App;
