import React from 'react';
import { portfolioData, type ServiceItem } from '../data/portfolioData';
import { Server, Network, Layout, Cpu, Container, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const { services } = portfolioData;

  const iconMap: Record<string, any> = {
    Server,
    Network,
    Layout,
    Cpu,
    Container,
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            04 // Freelance & Consulting
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Services Offered
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Specialized engineering services tailored for startups, businesses, and engineering teams needing robust backend systems or AI-powered features.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-12">
          {services.map((service: ServiceItem) => {
            const Icon = iconMap[service.iconName] || Server;

            return (
              <div
                key={service.id}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-5 group-hover:scale-105 group-hover:bg-blue-500/20 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
