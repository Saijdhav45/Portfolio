import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Server, Network, Cpu, Database, Layout, Container, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, any> = {
    backend: Server,
    microservices: Network,
    ai: Cpu,
    database: Database,
    frontend: Layout,
    devops: Container,
  };

  const categories = Object.entries(skills);

  const filteredCategories = activeCategory === 'all'
    ? categories
    : categories.filter(([key]) => key === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            02 // Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Core Competencies & Stack
          </h2>
          <p className="text-slate-400 max-w-2xl text-base text-left">
            Demonstrable engineering skills categorized by layer. No arbitrary percentage bars—each competency is supported by practical project implementation.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
            }`}
          >
            All Disciplines
          </button>

          {categories.map(([key, category]) => {
            const Icon = categoryIcons[key] || Server;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === key
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{category.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCategories.map(([key, category]) => {
            const Icon = categoryIcons[key] || Server;
            return (
              <div
                key={key}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-white/5 border border-white/5 rounded-xl p-3 hover:bg-white/[0.08] transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm text-slate-200">
                            {skill.name}
                          </span>
                          <Check className="w-3.5 h-3.5 text-blue-400" />
                        </div>
                        {skill.focus && (
                          <div className="text-[11px] font-mono text-slate-400 leading-tight">
                            {skill.focus}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
