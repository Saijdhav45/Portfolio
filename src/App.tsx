import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Workflow } from './sections/Workflow';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio_theme') as 'dark' | 'light' | null;
      if (savedTheme) return savedTheme;
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio_theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Background technical grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />
      
      {/* Top sticky navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Workflow />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default App;
