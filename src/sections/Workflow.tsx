import React from 'react';
import { portfolioData, type ProcessStep } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

export const Workflow: React.FC = () => {
  const { process } = portfolioData;

  return (
    <section id="workflow" className="py-20 md:py-28 relative border-t border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            05 // Working Together
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Development Process
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            A transparent, milestone-driven workflow that guarantees architectural integrity, clear communication, and predictable project completion.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {process.map((stepItem: ProcessStep) => (
            <div
              key={stepItem.step}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Step Number */}
                <div className="text-3xl font-mono font-bold text-blue-500/60 mb-4">
                  {stepItem.step}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {stepItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {stepItem.description}
                </p>

                {/* Sub-activities */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  {stepItem.activities.map((act, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-blue-400 font-bold shrink-0">›</span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Bottom Banner */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Have a custom requirement or microservices migration in mind?
            </h4>
            <p className="text-sm text-slate-400">
              Let's review your system requirements and draft an initial architectural plan.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-md shadow-blue-600/20 shrink-0 transition-all"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
