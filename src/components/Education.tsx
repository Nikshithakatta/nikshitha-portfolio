import React from 'react';
import { GraduationCap, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#090d16] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Solid foundations in computer systems, algorithms, distributed computing, and mathematics.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-interactive rounded-2xl border border-white/[0.08] hover:border-blue-500/40 p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    {item.badge && (
                      <span className="inline-block px-2.5 py-0.5 text-[11px] font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full mb-2">
                        {item.badge}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-blue-400">
                      {item.institution}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="px-3 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/30">
                      <span className="text-xs font-mono text-slate-400 block">CGPA</span>
                      <span className="text-lg font-bold text-emerald-400 font-mono">
                        {item.cgpa}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">/{item.maxCgpa}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline badge */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.period}</span>
                </div>

                {/* Details list */}
                {item.details && (
                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-slate-400">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>6-Year Integrated B.Tech Curriculum</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
