import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Terminal, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal, navigation } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark / Initials */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-white font-medium text-lg tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg px-2 py-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-mono font-bold text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white tracking-tight flex items-center gap-1.5">
              <span>Sainath</span>
              <span className="text-blue-400 font-mono text-sm">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-medium shadow-md shadow-blue-600/20 transition-all hover:shadow-blue-600/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e17]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-200 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium shadow-md shadow-blue-600/20"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:text-white"
              >
                GitHub Profile
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
