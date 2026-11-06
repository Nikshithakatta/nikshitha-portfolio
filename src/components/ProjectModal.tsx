import React, { useState } from 'react';
import { 
  X, 
  Github, 
  Workflow, 
  Wrench, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'architecture' | 'tech' | 'contributions' | 'challenges'>('architecture');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#0b101c] border border-slate-700/80 rounded-2xl shadow-2xl shadow-blue-950/60 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0f172a] px-6 py-5 border-b border-white/[0.08] flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 text-xs font-mono font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-xl border border-white/5 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-[#0d1424] px-6 border-b border-white/[0.06] flex items-center gap-2 sm:gap-4 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3.5 px-1 border-b-2 font-mono flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Workflow className="w-4 h-4" />
            <span>Architecture &amp; Data Flow</span>
          </button>

          <button
            onClick={() => setActiveTab('tech')}
            className={`py-3.5 px-1 border-b-2 font-mono flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'tech'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>Technologies &amp; Components</span>
          </button>

          <button
            onClick={() => setActiveTab('contributions')}
            className={`py-3.5 px-1 border-b-2 font-mono flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'contributions'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Contributions</span>
          </button>

          <button
            onClick={() => setActiveTab('challenges')}
            className={`py-3.5 px-1 border-b-2 font-mono flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'challenges'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Technical Challenges</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* Purpose Box (always visible) */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5 space-y-1.5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Project Purpose
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {project.purpose}
            </p>
          </div>

          {/* TAB 1: Architecture & Data Flow */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h4 className="text-sm font-mono font-semibold text-slate-300 uppercase tracking-wider">
                  Architectural Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.architecture.overview}
                </p>
              </div>

              {/* Data Flow Diagram Card */}
              <div className="p-5 rounded-xl bg-[#070b14] border border-blue-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5" />
                    Distributed Pipeline &amp; Data Flow
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-500/20">
                    Sequential Stages
                  </span>
                </div>

                <div className="space-y-2.5 pt-2">
                  {project.architecture.dataFlow.map((step, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-200"
                    >
                      <span className="w-6 h-6 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 border border-blue-500/30">
                        {idx + 1}
                      </span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                  Key System Characteristics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.architecture.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Technologies & Stack */}
          {activeTab === 'tech' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.technologies.map((group, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-white/5 space-y-2.5">
                    <h5 className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                      {group.category}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="px-2.5 py-1 text-xs font-mono text-slate-200 bg-slate-800/90 rounded-md border border-white/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Highlights */}
              {project.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#070b14] border border-white/5 text-center">
                      <p className="text-[11px] font-mono text-slate-400">{stat.label}</p>
                      <p className="text-xs font-bold text-white mt-1">{stat.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Contributions */}
          {activeTab === 'contributions' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                Engineering Contributions (Resume Verified)
              </h4>
              <div className="space-y-3">
                {project.contributions.map((contribution, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-white/5 text-xs sm:text-sm text-slate-200 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{contribution}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Technical Challenges & Solutions */}
          {activeTab === 'challenges' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                Technical Challenges &amp; Engineering Solutions
              </h4>
              <div className="space-y-4">
                {project.keyChallenges.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/20 text-xs font-bold">
                        !
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-semibold text-rose-300 uppercase tracking-wider">
                          Challenge #{idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                          {item.challenge}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 pl-8 pt-2 border-t border-white/[0.04]">
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Engineered Solution
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#0f172a] px-6 py-4 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg border border-white/10 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg border border-white/10 transition-colors"
          >
            Close Deep-Dive
          </button>
        </div>
      </div>
    </div>
  );
};
