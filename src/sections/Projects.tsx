import React, { useState } from 'react';
import { portfolioData, type Project } from '../data/portfolioData';
import { ExternalLink, CheckCircle, ChevronDown, ChevronUp, Layers, Cpu, Server } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const getTypeIcon = (type: Project['type']) => {
    switch (type) {
      case 'microservices':
        return Layers;
      case 'ai':
        return Cpu;
      default:
        return Server;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            03 // Featured Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Engineering Projects & Architectures
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Detailed breakdowns of distributed backends, LLM microservices, and full-stack integrations. Each project outlines the problem, technical implementation, and architectural flow.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-8">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            const ProjectIcon = getTypeIcon(project.type);

            return (
              <div
                key={project.id}
                className="glass-panel rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all overflow-hidden text-left"
              >
                <div className="p-6 sm:p-8">
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        <ProjectIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                          {project.subtitle}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Status: {project.status}
                      </span>
                    </div>
                  </div>

                  {/* High-level Summary */}
                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Problem Statement Box */}
                  <div className="bg-white/5 border-l-2 border-amber-400/80 rounded-r-xl p-4 mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold mb-1">
                      Problem Solved
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Key Highlights:
                    </div>
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Architecture & Deep Dive */}
                  {isExpanded && (
                    <div className="pt-6 mt-6 border-t border-white/10 space-y-6 animate-in fade-in duration-200">
                      {/* Architecture Blueprint string */}
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                          System Flow & Architecture
                        </div>
                        <div className="bg-black/40 border border-white/10 rounded-xl p-4 font-mono text-xs sm:text-sm text-blue-300 overflow-x-auto">
                          {project.architecture}
                        </div>
                      </div>

                      {/* Detailed Features */}
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                          Detailed Capabilities
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                          {project.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <span className="text-blue-400 font-bold">•</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Action Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-sm font-medium transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>View Repository</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-500 text-sm font-medium cursor-not-allowed">
                          <GithubIcon className="w-4 h-4" />
                          <span>Private / Pending Push</span>
                        </span>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 text-sm font-medium transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors py-2"
                    >
                      <span>{isExpanded ? 'Collapse Blueprint' : 'View Architecture Blueprint'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
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
