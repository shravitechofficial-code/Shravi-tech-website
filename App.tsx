
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ValidateIdea from './components/ValidateIdea';
import LaunchZeroToOne from './components/LaunchZeroToOne';
import ScaleRevenue from './components/ScaleRevenue';
import Proof from './components/Proof';
import About from './components/About';
import ChatWidget from './components/ChatWidget';
import ExitPopup from './components/ExitPopup';
import Marketing from './components/Marketing';
import Solutions from './components/Solutions';

const BookCall = () => (
  <div className="pt-40 pb-64 flex flex-col items-center justify-center text-center px-4 bg-brand-white">
    <div className="text-label-caps text-brand-blue mb-6">Strategy Session</div>
    <h1 className="text-6xl md:text-8xl heading-bold mb-8 uppercase text-brand-navy">BOOK YOUR <br /> GTM AUDIT.</h1>
    <p className="text-lg font-medium text-brand-navy/60 max-w-xl mb-16 leading-relaxed">
      Select a time for a direct technical review with our founders. No salespeople, just engineering and growth strategy.
    </p>
    <div className="w-full max-w-5xl h-[700px] bg-white border-4 border-brand-navy hard-shadow-lg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 geo-pattern opacity-10"></div>
      <div className="flex flex-col items-center relative z-10">
        <div className="w-20 h-20 bg-brand-blue flex items-center justify-center border-4 border-brand-navy mb-6 animate-bounce">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <p className="font-black text-brand-navy uppercase tracking-widest text-sm">Calendly Integration Interface Loading...</p>
        <p className="text-[10px] font-bold text-brand-navy/40 mt-2 uppercase tracking-widest">secure_api_handshake_active</p>
      </div>
    </div>
  </div>
);

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
        <ChatWidget />
        <ExitPopup />
      </Layout>
    </Router>
  );
};

export default App;
