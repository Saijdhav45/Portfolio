import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, AlertCircle, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');

    // Mailto fallback / provider integration explanation
    // Opens a direct mailto client with pre-filled content to ensure 100% genuine message delivery
    // without relying on broken mock endpoints or unconfigured API keys
    try {
      const subject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name}`);
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      );
      
      // Simulate submission UX before launching the mail client
      setTimeout(() => {
        window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
        setStatus('success');
      }, 600);
    } catch {
      setStatus('error');
      setErrorMessage('Failed to trigger email draft. Please reach out directly to the email address on the left.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            06 // Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Let's Discuss Your Next Project
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Whether you have a specific backend architecture to build, need to integrate Google Gemini AI into your software, or are looking for freelance development assistance, I'd be glad to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Direct Contact & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Direct Contact</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I typically respond to inquiries within 24 hours. For project inquiries, providing a brief description of your technical requirements helps expedite our discussion.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-slate-400">Email Address</div>
                    <div className="text-sm font-medium text-white truncate">
                      {personal.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Profiles & Repositories
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-200 hover:text-white transition-colors text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub: @Saijdhav45</span>
                    </div>
                    <span className="text-xs font-mono text-blue-400">View Repos ›</span>
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-200 hover:text-white transition-colors text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon className="w-4 h-4 text-blue-400" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <span className="text-xs font-mono text-blue-400">Connect ›</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-sm text-slate-400 mb-6">
                Fill in the form below to generate a pre-formatted message or trigger a direct inquiry.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <strong className="block font-semibold">Message prepared!</strong>
                    Your email client should open with your message draft. If it did not open automatically, please send your email directly to <span className="underline">{personal.email}</span>.
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
                  <div>{errorMessage}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Project / Inquired Service
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="e.g. Backend Microservices Architecture & API Design"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Message Details <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what you're building, target timeline, or technical requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-md shadow-blue-600/20 transition-all hover:shadow-blue-600/30 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Preparing Draft...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
