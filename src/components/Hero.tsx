import React, { useState } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Activity, 
  Sparkles,
  Database,
  ShieldCheck,
  Play
} from 'lucide-react';
import { contactDetails, professionalSummary } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'telemetry' | 'mcp' | 'ml'>('telemetry');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLog, setSimulationLog] = useState<string[]>([
    '✓ Connected to SkyCommand cluster manager via gRPC :50051',
    '✓ Initialized OTLP collector pipeline [protocol=grpc, target=kafka:9092]',
    '✓ Kafka topic "gpu.telemetry.v1" partitioned [partitions=12, replica=3]',
    '✓ ClickHouse ingestion sink active: batch_size=10000, flush_interval=200ms',
    '● Ingesting GPU hardware metrics: NVIDIA H100 SXM5 [Node id=gpu-us-east-4a]',
    '  - GPU Util: 94.2% | VRAM: 76.4/80 GB | Temp: 68°C | Power: 685W'
  ]);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const runSimulation = () => {
    setIsSimulating(true);
    const newLogs: Record<string, string[]> = {
      telemetry: [
        `[${new Date().toLocaleTimeString()}] [OTLP-Pipeline] Dispatched batch 4829 -> Kafka (latency: 1.4ms)`,
        `[${new Date().toLocaleTimeString()}] [ClickHouse-Sink] Flushed 10,240 rows into "metrics.gpu_telemetry"`,
        `[${new Date().toLocaleTimeString()}] [gRPC-Orchestrator] Tenant tenant_98a tenant health: OPTIMAL`,
        `[${new Date().toLocaleTimeString()}] [SkyCommand-Daemon] Zero packet loss verified across 64 GPU instances`
      ],
      mcp: [
        `[${new Date().toLocaleTimeString()}] [MCP-Server] Agent "FinOps-Copilot" triggered tool "execute_mint_settlement"`,
        `[${new Date().toLocaleTimeString()}] [Plaid-Verify] Bank liquidity confirmed: account_id=acc_***9102`,
        `[${new Date().toLocaleTimeString()}] [Unit21-AML] Risk score: 0.04 (Risk Category: LOW / APPROVED)`,
        `[${new Date().toLocaleTimeString()}] [PostgreSQL-Ledger] Committed 2-phase atomic mint: 50,000.00 USDC`
      ],
      ml: [
        `[${new Date().toLocaleTimeString()}] [Inference-Engine] Received Soil Profile: N=88, P=42, K=40, pH=6.5`,
        `[${new Date().toLocaleTimeString()}] [Open-Meteo] Live weather pulled: Temp=27.4°C, Humidity=71%, Rain=142mm`,
        `[${new Date().toLocaleTimeString()}] [RandomForest] Evaluated model across 246K+ agricultural records`,
        `[${new Date().toLocaleTimeString()}] [ROI-Predictor] Top Recommendation: "Cotton" (Confidence: 96.4%, Est. ROI: +38.5%)`
      ]
    };

    setTimeout(() => {
      setSimulationLog(prev => [...prev.slice(-3), ...newLogs[activeTab]]);
      setIsSimulating(false);
    }, 600);
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-300">
                {professionalSummary.badge}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                  {contactDetails.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-blue-400/90 font-mono tracking-tight">
                Software Engineer | Backend Developer | Cloud &amp; Distributed Systems | AI/ML Enthusiast
              </p>
            </div>

            {/* Professional Summary Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {professionalSummary.headline} {professionalSummary.body}
            </p>

            {/* Quick Skills Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Go', 'Python', 'gRPC', 'Kafka', 'ClickHouse', 'PostgreSQL', 'FastAPI', 'OpenTelemetry', 'MCP', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900/60 border border-slate-800 rounded-md hover:border-blue-500/40 hover:text-blue-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white rounded-xl border border-slate-700/80 hover:border-slate-600 transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View &amp; Download Resume</span>
              </button>
            </div>

            {/* Contact & Social Bar */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a
                href={contactDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-slate-700">•</span>

              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <span className="text-slate-700">•</span>

              <button
                onClick={() => copyToClipboard(contactDetails.email, 'email')}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-300 transition-colors group"
                title="Copy email address"
              >
                <Mail className="w-4 h-4" />
                <span className="font-mono">{contactDetails.email}</span>
                {copiedType === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                )}
              </button>

              <span className="text-slate-700">•</span>

              <button
                onClick={() => copyToClipboard(contactDetails.phone, 'phone')}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-300 transition-colors group"
                title="Copy phone number"
              >
                <Phone className="w-4 h-4" />
                <span className="font-mono">{contactDetails.phone}</span>
                {copiedType === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Backend Architecture & Terminal Widget */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-blue-950/40">
              
              {/* Terminal Window Header */}
              <div className="bg-[#0b101c] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    skycommand@telemetry-daemon:~
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-emerald-400 font-medium">LIVE</span>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="bg-[#0f172a]/90 px-3 pt-2 border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => {
                    setActiveTab('telemetry');
                    setSimulationLog([
                      '✓ SkyCommand GPU Platform backend connected [Go microservices]',
                      '✓ OTLP pipeline streaming GPU load & thermals',
                      '✓ ClickHouse ingestion sink running: 10K events/flush',
                      '● Telemetry: 128 GPUs online | 99.98% pipeline uptime'
                    ]);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors ${
                    activeTab === 'telemetry'
                      ? 'bg-[#090d16] text-blue-400 border-t border-x border-blue-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>skycommand.go</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('mcp');
                    setSimulationLog([
                      '✓ Stablecoin Platform initialized [FastAPI + Python]',
                      '✓ Plaid bank linking & Middesk KYB verification active',
                      '✓ Unit21 risk monitoring engine: active ruleset',
                      '● MCP AI Agent server ready for conversational FinOps'
                    ]);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors ${
                    activeTab === 'mcp'
                      ? 'bg-[#090d16] text-blue-400 border-t border-x border-blue-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>stablecoin_mcp.py</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('ml');
                    setSimulationLog([
                      '✓ AI Crop Prediction Service [Random Forest Classifier]',
                      '✓ Pre-trained on 246K+ diverse agricultural records',
                      '✓ Open-Meteo real-time weather feed connected',
                      '● Mandi price feeds & ROI feasibility engine ready'
                    ]);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors ${
                    activeTab === 'ml'
                      ? 'bg-[#090d16] text-blue-400 border-t border-x border-blue-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>crop_predictor.py</span>
                </button>
              </div>

              {/* Terminal Logs & Output */}
              <div className="p-4 bg-[#090d16]/95 font-mono text-xs text-slate-300 space-y-2.5 min-h-[220px] max-h-[240px] overflow-y-auto">
                <div className="text-slate-500 pb-1">
                  # System Telemetry &amp; Microservices Runtime
                </div>
                {simulationLog.map((log, index) => (
                  <div
                    key={index}
                    className={`leading-relaxed animate-fade-in ${
                      log.startsWith('✓')
                        ? 'text-emerald-400'
                        : log.startsWith('●')
                        ? 'text-cyan-300'
                        : log.startsWith('[')
                        ? 'text-blue-300'
                        : 'text-slate-300'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>

              {/* Interactive Action Bar */}
              <div className="bg-[#0b101c] px-4 py-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <div className="text-slate-400 flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-blue-400" />
                  <span className="hidden sm:inline">Engine:</span>
                  <span className="text-slate-200">
                    {activeTab === 'telemetry' ? 'ClickHouse + Kafka' : activeTab === 'mcp' ? 'PostgreSQL + MCP' : 'Scikit-Learn (246K+)'}
                  </span>
                </div>

                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 hover:text-white rounded border border-blue-500/30 transition-all disabled:opacity-50"
                >
                  <Play className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Executing...' : 'Trigger Simulation'}</span>
                </button>
              </div>
            </div>

            {/* Quick architectural badges below terminal */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                <p className="text-xs font-mono text-slate-400">Microservices</p>
                <p className="text-sm font-semibold text-white mt-0.5">Go &amp; gRPC</p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                <p className="text-xs font-mono text-slate-400">Streaming</p>
                <p className="text-sm font-semibold text-white mt-0.5">Kafka + OTLP</p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                <p className="text-xs font-mono text-slate-400">OLAP Storage</p>
                <p className="text-sm font-semibold text-white mt-0.5">ClickHouse</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
