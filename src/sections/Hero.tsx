import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download, Server, ShieldCheck, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-violet-600/5 blur-[120px] pointer-events-none -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability / Specialization pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                {personal.isAvailableForFreelance && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                )}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${personal.isAvailableForFreelance ? 'bg-emerald-500' : 'bg-blue-400'}`}></span>
              </span>
              <span>{personal.availabilityStatusText}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Building Reliable Backends.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
                Creating Intelligent Applications.
              </span>
            </h1>

            {/* Supporting intro statement */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              I'm <span className="text-white font-semibold">{personal.name}</span>, a Java backend and full-stack developer specializing in production-grade REST APIs, high-availability microservices with Spring Cloud, and AI integrations powered by Google Gemini.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/25 transition-all hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all hover:-translate-y-0.5"
              >
                <span>Let's Work Together</span>
              </a>
            </div>

            {/* Social Links & Configured Resume */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10 w-full text-slate-400 text-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Profiles:</span>
              
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-slate-700">|</span>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <span className="text-slate-700">|</span>

              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                title="Download Resume"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Technical Architecture & Code Badge Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/30 to-indigo-600/30 blur-xl opacity-50 -z-10" />

              {/* Developer Terminal Box */}
              <div className="glass-panel rounded-2xl border border-white/10 shadow-2xl p-5 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-blue-400" />
                    <span>backend-stack.java</span>
                  </div>
                </div>

                {/* Technical Code Representation */}
                <div className="font-mono text-xs text-left leading-relaxed space-y-2 select-none">
                  <div className="text-slate-400">// Enterprise Microservices & AI Architecture</div>
                  <div className="text-purple-400">@SpringBootApplication</div>
                  <div className="text-purple-400">@EnableDiscoveryClient</div>
                  <div className="text-slate-200">
                    <span className="text-blue-400">public class</span> <span className="text-amber-300">CoreApplication</span> {'{'}
                  </div>
                  
                  <div className="pl-4 space-y-1.5 border-l border-blue-500/30 ml-2 my-2 text-slate-300">
                    <div>
                      <span className="text-purple-400">@Bean</span>
                    </div>
                    <div>
                      <span className="text-blue-400">public</span> GeminiClient <span className="text-emerald-400">aiClient</span>() {'{'}
                    </div>
                    <div className="pl-4 text-slate-400">
                      return GeminiClient.builder()
                      <br />
                      &nbsp;&nbsp;.model(<span className="text-amber-200">"gemini-2.5-flash"</span>)
                      <br />
                      &nbsp;&nbsp;.resilience(<span className="text-blue-300">circuitBreaker</span>)
                      <br />
                      &nbsp;&nbsp;.build();
                    </div>
                    <div>{'}'}</div>
                  </div>

                  <div className="text-slate-200">{'}'}</div>
                </div>

                {/* Real-time metrics badges */}
                <div className="grid grid-cols-3 gap-2.5 mt-5 pt-4 border-t border-white/10">
                  <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/5">
                    <div className="flex items-center justify-center gap-1 text-blue-400 mb-1">
                      <Server className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs font-semibold text-white">Java 21</div>
                    <div className="text-[10px] text-slate-400">Spring Boot 3</div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/5">
                    <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs font-semibold text-white">Spring Cloud</div>
                    <div className="text-[10px] text-slate-400">Microservices</div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/5">
                    <div className="flex items-center justify-center gap-1 text-purple-400 mb-1">
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs font-semibold text-white">Gemini API</div>
                    <div className="text-[10px] text-slate-400">AI Integration</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
