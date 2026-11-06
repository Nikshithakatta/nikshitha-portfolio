import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { experience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(experience[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-[#090d16] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Hands-on engineering experience in cloud-native microservices, real-time telemetry streaming, and distributed systems.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical timeline rule */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent opacity-40 hidden sm:block" />

          <div className="space-y-8">
            {experience.map((item) => {
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className="relative sm:pl-20 transition-all duration-300"
                >
                  {/* Timeline Node Badge */}
                  <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-[#0d1322] border-2 border-blue-500 items-center justify-center text-blue-400 shadow-lg shadow-blue-500/30 z-10">
                    <Cpu className="w-4 h-4" />
                  </div>

                  {/* Main Experience Card */}
                  <div className="glass-panel rounded-2xl border border-white/[0.08] hover:border-blue-500/40 p-6 sm:p-8 transition-all">
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {item.role}
                          </h3>
                          <span className="px-2.5 py-0.5 text-xs font-medium font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-base font-semibold text-blue-400">
                          {item.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs font-mono text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm sm:text-base text-slate-300 py-4 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Key Contributions & Achievements */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Core Engineering Responsibilities &amp; Impact</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {item.contributions.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expandable Technical Deep-Dive */}
                    <div className="mt-5 pt-4 border-t border-white/[0.06]">
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span>{isExpanded ? 'Hide Architectural Highlights' : 'View Architectural Highlights'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-4 p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-3 animate-fade-in">
                          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                            Key Architectural Deliverables
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {item.highlights.map((highlight, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                        <Terminal className="w-3.5 h-3.5" />
                        Stack:
                      </span>
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800/80 rounded-lg border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
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
