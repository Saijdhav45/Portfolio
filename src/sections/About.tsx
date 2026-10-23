import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Cpu, Database, CheckCircle2, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const valueProps = [
    {
      icon: Layers,
      title: "Microservices Architecture",
      desc: "Designing resilient distributed systems with Eureka service discovery, Spring Cloud Gateway, and Resilience4j circuit breakers.",
    },
    {
      icon: Database,
      title: "Data Integrity & Performance",
      desc: "Structuring clean relational schemas in MySQL with Spring Data JPA/Hibernate, indexing strategies, and ACID transaction safety.",
    },
    {
      icon: Cpu,
      title: "Generative AI Integration",
      desc: "Connecting enterprise REST endpoints with Google Gemini models to produce deterministic, schema-validated automated responses.",
    },
    {
      icon: Code2,
      title: "Full-Stack Cohesion",
      desc: "Bridging Java backends with reactive TypeScript user interfaces, ensuring end-to-end type safety, validation, and rapid UX.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            01 // Engineering Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me & Architectural Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed text-left">
            <p>
              I am <span className="text-white font-medium">{personal.name}</span>, a software engineer with a primary focus on 
              <strong className="text-white"> Java backend development</strong>, <strong className="text-white">Spring Boot microservices</strong>, and <strong className="text-white">intelligent AI integrations</strong>.
            </p>

            <p>
              My journey centers around writing clean, predictable, and maintainable software. I specialize in building server architectures that do not fail under load—enforcing strict validation boundaries, resilient inter-service calls, and structured relational persistence.
            </p>

            <p>
              Beyond traditional backends, I actively explore practical artificial intelligence. Rather than treating LLMs as novelty chatbots, I integrate the <strong className="text-white">Google Gemini API</strong> into functional business workflows (such as browser extensions and API middleware) with strict schema enforcement, prompt conditioning, and fallback mechanisms.
            </p>

            <p>
              As a freelance developer, my objective is straightforward: to help teams and founders translate business requirements into working, production-ready applications with clean codebases, testable architectures, and comprehensive documentation.
            </p>

            {/* Credibility Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero fabricated metrics or claims</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean Java 21 & Spring 3 standards</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Docker-orchestrated development</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent client communication</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {valueProps.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all text-left group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 group-hover:bg-blue-500/20 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                        {prop.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-normal">
                        {prop.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
