
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI solutions', path: '/solutions' },
    { name: 'Marketing with AI', path: '/launch' },
    { name: 'Proof', path: '/proof' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-white">
      <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl z-50 border-b border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-18">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-brand-navy flex items-center justify-center">
                <span className="text-white font-semibold text-[10px]">s</span>
              </div>
              <span className="text-md font-semibold tracking-tight text-brand-navy">
                Shravi<span className="text-brand-blue">tech</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[12px] font-bold uppercase tracking-[0.15em] transition-colors ${
                    location.pathname === link.path ? 'text-brand-blue' : 'text-brand-navy/60 hover:text-brand-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book-call"
                className="bg-brand-navy text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] sleek-shadow hover:bg-brand-blue transition-all"
              >
                Let's Talk
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-brand-navy"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-brand-navy/5 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-4 text-lg font-bold uppercase tracking-tight text-brand-navy border-b border-brand-navy/5"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book-call"
                className="block w-full text-center bg-brand-blue text-white py-5 font-bold uppercase tracking-[0.2em]"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-brand-navy text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-8">
                <div className="w-6 h-6 bg-white flex items-center justify-center">
                  <span className="text-brand-navy font-semibold text-[10px]">s</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Shravi<span className="text-brand-blue">tech</span>
                </span>
              </Link>
              <p className="text-brand-navy/40 text-sm max-w-sm mb-10 leading-relaxed text-white/50">
                The 0-to-1 execution partner for founders. We build the systems, run the campaigns, and automate the growth engine for your next startup.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-white/30 hover:text-brand-blue transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-white/30 hover:text-brand-blue transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-white/30 hover:text-brand-blue transition-colors"><Github className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 text-white/30">Capabilities</h4>
              <ul className="space-y-4">
                <li><Link to="/solutions" className="text-sm font-medium hover:text-brand-blue transition-colors">AI Software Builds</Link></li>
                <li><Link to="/launch" className="text-sm font-medium hover:text-brand-blue transition-colors">Growth Marketing</Link></li>
                <li><Link to="/solutions" className="text-sm font-medium hover:text-brand-blue transition-colors">Systems Design</Link></li>
                <li><Link to="/launch" className="text-sm font-medium hover:text-brand-blue transition-colors">0-to-1 Launch</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 text-white/30">Action</h4>
              <Link
                to="/book-call"
                className="inline-flex items-center text-sm font-bold text-brand-green border-b border-brand-green/20 pb-1 hover:border-brand-green transition-all uppercase tracking-widest"
              >
                Let's Talk <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-medium text-white/20 uppercase tracking-[0.25em]">
            <div>&copy; {new Date().getFullYear()} Shravi Tech. High Performance Execution.</div>
            <div className="mt-4 md:mt-0 flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
