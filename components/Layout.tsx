
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
    { name: 'Playbook', path: '/launch' },
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
            <nav className="hidden lg:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[13px] font-medium transition-all hover:text-brand-blue ${
                    location.pathname === link.path ? 'text-brand-blue' : 'text-brand-navy/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book-call"
                className="bg-brand-navy text-white px-5 py-2 text-[12px] font-medium sleek-shadow-blue hover:bg-brand-blue transition-all"
              >
                Strategy Audit
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-navy focus:outline-none"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-brand-navy/5 animate-in slide-in-from-top duration-300">
            <div className="px-6 pt-4 pb-10 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-4 text-sm font-medium text-brand-navy border-b border-brand-navy/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6">
                <Link
                  to="/book-call"
                  className="block w-full text-center bg-brand-blue text-white py-4 text-sm font-medium"
                >
                  Book Session
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white text-brand-navy py-20 border-t border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-8">
                <div className="w-6 h-6 bg-brand-blue flex items-center justify-center">
                  <span className="text-white font-semibold text-[10px]">s</span>
                </div>
                <span className="text-md font-semibold tracking-tight text-brand-navy">Shravitech</span>
              </Link>
              <p className="text-[13px] font-normal leading-relaxed text-brand-navy/40 mb-8 max-w-xs">
                AI-powered systems for idea-stage founders. Engineered for verification, execution, and scale.
              </p>
              <div className="flex space-x-6">
                <Twitter className="w-4 h-4 cursor-pointer hover:text-brand-blue opacity-30 transition-opacity" />
                <Linkedin className="w-4 h-4 cursor-pointer hover:text-brand-blue opacity-30 transition-opacity" />
                <Github className="w-4 h-4 cursor-pointer hover:text-brand-blue opacity-30 transition-opacity" />
              </div>
            </div>
            
            <div>
              <h4 className="text-[11px] font-semibold mb-6 text-brand-blue tracking-wider uppercase">Capability</h4>
              <ul className="space-y-3 text-[13px] font-normal text-brand-navy/60">
                <li><Link to="/marketing" className="hover:text-brand-blue transition-colors">Growth engines</Link></li>
                <li><Link to="/solutions" className="hover:text-brand-blue transition-colors">AI software</Link></li>
                <li><Link to="/launch" className="hover:text-brand-blue transition-colors">Launch playbook</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold mb-6 text-brand-blue tracking-wider uppercase">Firm</h4>
              <ul className="space-y-3 text-[13px] font-normal text-brand-navy/60">
                <li><Link to="/about" className="hover:text-brand-blue transition-colors">Our story</Link></li>
                <li><Link to="/proof" className="hover:text-brand-blue transition-colors">Evidence</Link></li>
                <li><Link to="/about" className="hover:text-brand-blue transition-colors">Partnerships</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold mb-6 text-brand-blue tracking-wider uppercase">Contact</h4>
              <p className="text-[13px] font-medium mb-2">Network hub</p>
              <p className="text-[13px] font-semibold mb-8 text-brand-blue">hello@shravitech.com</p>
              <Link to="/book-call" className="inline-flex items-center text-brand-navy border-b border-brand-navy/20 pb-0.5 text-[12px] font-medium hover:border-brand-blue transition-all">
                Audit Session <ArrowRight className="ml-2 w-3 h-3" />
              </Link>
            </div>
          </div>
          <div className="border-t border-brand-navy/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] font-normal text-brand-navy/30">
            <p>&copy; {new Date().getFullYear()} Shravi Tech Operations.</p>
            <p className="text-brand-blue">Validation • Deployment • Scale</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
