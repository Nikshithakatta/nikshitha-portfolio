import React from 'react';
import { Award, CheckCircle2, Sparkles } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-[#070b12] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Advanced certifications and practical training in Deep Learning and Artificial Intelligence.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel-interactive rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-2">
                      {cert.type}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-indigo-400">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Competencies &amp; Focus Areas
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {cert.skillsGained.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Coursework Completed
                </span>
                <span className="text-emerald-400 font-medium">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
