import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud & Distributed':
        return Cpu;
      case 'Fintech & AI':
        return ShieldCheck;
      case 'AI & Agritech':
        return Sparkles;
      default:
        return Layers;
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#070b12] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED SYSTEMS ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            High-performance cloud platforms, telemetry pipelines, autonomous AI protocol workflows, and predictive ML systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['all', 'Cloud & Distributed', 'Fintech & AI', 'AI & Agritech'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-white/5'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const Icon = getCategoryIcon(project.category);

            return (
              <div
                key={project.id}
                className="glass-panel-interactive rounded-2xl border border-white/[0.08] hover:border-blue-500/40 p-6 sm:p-7 flex flex-col justify-between space-y-6 group relative overflow-hidden"
              >
                {/* Top Ambient Card Glow on Hover */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{project.category}</span>
                    </span>
                    {project.badge && (
                      <span className="text-[11px] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Purpose excerpt */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.purpose}
                  </p>

                  {/* Architectural Highlight */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Workflow className="w-3 h-3 text-cyan-400" />
                      Architecture Snapshot
                    </span>
                    <p className="text-xs text-slate-200 line-clamp-2 font-mono">
                      {project.architecture.highlights[0]}
                    </p>
                  </div>

                  {/* Contributions Preview */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Key Contribution
                    </span>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="line-clamp-2">{project.contributions[0]}</span>
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-800/80 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-slate-900 rounded">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3 relative z-10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Architecture &amp; Deep-Dive</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
