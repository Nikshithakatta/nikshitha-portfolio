import React from 'react';
import { 
  Server, 
  Workflow, 
  BrainCircuit, 
  ShieldCheck, 
  GraduationCap, 
  CheckCircle2,
  Sparkles,
  Cpu
} from 'lucide-react';
import { professionalSummary } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Server,
      title: "Cloud-Native Backend & Microservices",
      description:
        "Specialized in developing resilient backend microservices in Go and Python. Proficient in gRPC binary protocol for low-latency internal communication and RESTful APIs for external interfaces.",
      tags: ["Go", "Python", "gRPC", "REST APIs", "Microservices"]
    },
    {
      icon: Workflow,
      title: "Real-Time Telemetry & Distributed Streaming",
      description:
        "Hands-on experience architecting high-throughput telemetry pipelines using OpenTelemetry (OTLP) collectors, Apache Kafka event streams, and ClickHouse columnar storage for real-time querying.",
      tags: ["OpenTelemetry", "Apache Kafka", "ClickHouse", "Observability"]
    },
    {
      icon: BrainCircuit,
      title: "AI/ML & Agent Protocols (MCP)",
      description:
        "Building practical AI systems: from training Random Forest models on 246K+ agricultural datasets to implementing Model Context Protocol (MCP) workflows enabling AI agents to execute financial operations.",
      tags: ["Model Context Protocol (MCP)", "FastAPI", "Random Forest", "AI Agents"]
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Storage & Fintech Verification",
      description:
        "Managing ACID-compliant relational databases in PostgreSQL, along with integrations into verified enterprise fintech services including Plaid, Middesk (KYB), and Unit21 (AML/Risk).",
      tags: ["PostgreSQL", "Plaid", "Middesk", "Unit21", "Double-Entry"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#090d16] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {professionalSummary.headline}
          </p>
        </div>

        {/* Narrative & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Detailed Biography Card */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-500 rounded-full inline-block" />
                Engineering Scalable, Reliable &amp; Intelligent Systems
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a Computer Science undergraduate at{' '}
                <span className="text-white font-medium">Rajiv Gandhi University of Knowledge Technologies</span> with a passion for constructing mission-critical backend systems and distributed data pipelines.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                During my software engineering internship at <span className="text-white font-semibold">NerdPine</span>, I contributed to the backend services of the <span className="text-blue-300 font-medium">SkyCommand GPU Cloud Platform</span> in Go, building gRPC and REST APIs and streaming real-time GPU infrastructure metrics through OpenTelemetry, Apache Kafka, and ClickHouse.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My work spans designing secure financial systems with <span className="text-indigo-300 font-medium">Model Context Protocol (MCP)</span> AI workflows, orchestrating microservices with PostgreSQL, and training machine learning models on 246,000+ agricultural records for real-world impact.
              </p>
            </div>

            {/* Core Focus checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
              {professionalSummary.coreFocus.map((focus, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Facts / Highlights Card */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Academic Track Record */}
            <div className="glass-panel p-5 rounded-2xl border border-white/[0.08] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC MERIT</span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <span className="text-3xl font-extrabold text-white">8.89</span>
                  <span className="text-xs text-slate-400 ml-1">/ 10.0 CGPA</span>
                  <p className="text-xs text-slate-300">B.Tech Computer Science</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-emerald-400">9.67</span>
                  <span className="text-xs text-slate-400 ml-1">/ 10.0</span>
                  <p className="text-xs text-slate-300">Pre-University Course</p>
                </div>
              </div>
            </div>

            {/* ML & Scale Metric */}
            <div className="glass-panel p-5 rounded-2xl border border-white/[0.08] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                <BrainCircuit className="w-4 h-4" />
                <span>AI / ML DATA SCALE</span>
              </div>
              <div className="pt-1">
                <span className="text-3xl font-extrabold text-white">246K+</span>
                <p className="text-xs text-slate-300 mt-0.5">Agricultural Records Trained with Random Forest</p>
              </div>
            </div>

            {/* Systems Telemetry Experience */}
            <div className="glass-panel p-5 rounded-2xl border border-white/[0.08] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Cpu className="w-4 h-4" />
                <span>INFRASTRUCTURE &amp; TELEMETRY</span>
              </div>
              <p className="text-xs text-slate-300 pt-1">
                Engineered real-time telemetry pipelines connecting <span className="text-white font-medium">OpenTelemetry (OTLP)</span>, <span className="text-white font-medium">Apache Kafka</span>, and <span className="text-white font-medium">ClickHouse</span> for GPU cluster metrics.
              </p>
            </div>

          </div>

        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="glass-panel-interactive p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-800/80 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
