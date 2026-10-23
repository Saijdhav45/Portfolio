import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { personal, navigation } = portfolioData;

  return (
    <footer className="border-t border-white/10 bg-[#060910] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-white/5">
          {/* Brand info */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-mono text-white text-xs">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-white tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Java Backend Developer & Full-Stack Engineer specializing in Spring Boot, Microservices, and Google Gemini AI integration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {CURRENT_YEAR} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px]">
            <span>Engineered with Java & React mindset</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
