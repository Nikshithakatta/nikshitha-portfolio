import React from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { contactDetails } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-white/[0.08] text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/[0.06]">
          
          {/* Brand info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold text-xs">
                <Terminal className="w-4 h-4 mr-0.5" />
                <span>KN</span>
              </div>
              <span className="font-bold text-white text-base">
                {contactDetails.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Software Engineer | Backend Developer | Cloud &amp; Distributed Systems | AI/ML Enthusiast
            </p>
          </div>

          {/* Social links & Back to Top */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4">
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-white/5 hover:border-blue-500/40 hover:text-white transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-white/5 hover:border-blue-500/40 hover:text-white transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${contactDetails.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-white/5 hover:border-blue-500/40 hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${contactDetails.phone}`}
              className="p-2 rounded-lg bg-slate-900 border border-white/5 hover:border-blue-500/40 hover:text-white transition-all"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} {contactDetails.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Engineered with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};
