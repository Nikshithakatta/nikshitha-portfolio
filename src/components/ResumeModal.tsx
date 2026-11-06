import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  contactDetails, 
  professionalSummary, 
  education, 
  experience, 
  featuredProjects 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const generatePlainTextResume = () => {
    return `KATTA NIKSHITHA
Nellore, Andhra Pradesh, India
Email: ${contactDetails.email} | Phone: ${contactDetails.phone}
LinkedIn: ${contactDetails.linkedin} | GitHub: ${contactDetails.github}

PROFESSIONAL SUMMARY
${professionalSummary.headline} ${professionalSummary.body}

EDUCATION
Rajiv Gandhi University of Knowledge Technologies (RGUKT)
Dec 2020 – Apr 2026
Bachelor of Technology – Computer Science
CGPA: 8.89 / 10.0

Pre-University Course (PUC)
CGPA: 9.67 / 10.0

TECHNICAL SKILLS
- Languages: Go, Python, Java, SQL, HTML, CSS
- Backend: REST APIs, FastAPI, gRPC, OpenTelemetry (OTLP)
- Cloud: Kafka, Docker, MCP, Blockchain Fundamentals
- Databases: PostgreSQL, ClickHouse, MySQL, MongoDB
- Tools: Git, GitHub, VS Code, Cursor, Jupyter Notebook

WORK EXPERIENCE
Software Engineering Intern | NerdPine
Mar 2026 – Jul 2026
- Contributed to the development of backend services for the SkyCommand GPU Cloud Platform using Go and cloud-native microservices.
- Built and enhanced REST APIs and gRPC services to support telemetry, orchestration, and infrastructure management workflows.
- Worked with OpenTelemetry, Kafka, ClickHouse, and PostgreSQL to enable scalable telemetry collection, processing, and querying.
- Collaborated with senior engineers in Agile development, code reviews, testing, debugging, documentation, and feature implementation.

PROJECTS
1. SkyCommand GPU Cloud Platform
Tech Stack: Go, REST APIs, gRPC, OpenTelemetry, Kafka, ClickHouse, PostgreSQL
- Developed backend components for a cloud-native GPU infrastructure management platform supporting tenant onboarding, telemetry, and orchestration.
- Built scalable telemetry pipelines using OpenTelemetry, Kafka, and ClickHouse for real-time collection, ingestion, storage, and querying of infrastructure metrics.
- Implemented REST APIs and gRPC services to manage infrastructure resources, telemetry configuration, and platform communication.
- Worked with distributed microservices, PostgreSQL, and cloud-native architectures to improve scalability, observability, and operational reliability.

2. Stablecoin-as-a-Service Platform
Tech Stack: Python, FastAPI, MCP, PostgreSQL, Plaid, Middesk, Unit21
- Built backend services for a Stablecoin-as-a-Service platform supporting mint, redeem, transfer, and account management operations.
- Integrated Plaid for bank connectivity, Middesk for KYB verification, and Unit21 for compliance monitoring and risk management.
- Developed Model Context Protocol (MCP) workflows to enable AI agents to securely execute financial operations through natural language interactions.
- Designed secure REST APIs for compliant fintech applications.

3. AI Crop Prediction System (GitHub: https://github.com/katta-nikshitha)
Tech Stack: Python, FastAPI, React, TypeScript, Random Forest, Open-Meteo API
- Built an AI-powered crop recommendation system using Random Forest models trained on 246K+ agricultural records.
- Integrated real-time weather, soil, location, mandi price analysis and ROI analysis to provide personalized crop recommendations.
- Developed REST APIs with FastAPI and integrated them with a React frontend.

CERTIFICATIONS
- NPTEL: Deep Learning
- ExcelR: Artificial Intelligence Machine Learning Internship
`;
  };

  const handlePrint = () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    window.print();
  };

  const handleDownloadText = () => {
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.8 } });
    const text = generatePlainTextResume();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Katta_Nikshitha_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = () => {
    const text = generatePlainTextResume();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden during print) */}
        <div className="no-print bg-[#0f172a] px-5 py-4 border-b border-white/[0.08] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <h3 className="font-bold text-white text-base sm:text-lg">
              Official Resume Preview
            </h3>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded">
              ATS-Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-white/10 transition-all"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .txt</span>
            </button>

            <button
              onClick={handleCopyText}
              className="p-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-white/10 transition-all"
              title="Copy resume text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-white/10 transition-all"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Sheet */}
        <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-10 bg-[#070b14] text-slate-100 print-sheet font-sans text-xs sm:text-sm leading-relaxed space-y-6">
          
          {/* Header */}
          <div className="border-b border-slate-700 pb-5 text-center sm:text-left space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {contactDetails.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-300 font-mono">
              <span>{contactDetails.location.split(',')[0]}</span>
              <span>•</span>
              <a href={`mailto:${contactDetails.email}`} className="text-blue-400 hover:underline">
                {contactDetails.email}
              </a>
              <span>•</span>
              <a href={`tel:${contactDetails.phone}`} className="text-blue-400 hover:underline">
                {contactDetails.phone}
              </a>
              <span>•</span>
              <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href={contactDetails.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed pt-1">
              {professionalSummary.headline} {professionalSummary.body}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-2 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm">
                    Rajiv Gandhi University of Knowledge Technologies
                  </h3>
                  <p className="text-slate-300">
                    Bachelor of Technology – Computer Science
                  </p>
                </div>
                <div className="text-xs text-slate-400 font-mono sm:text-right">
                  <span>{education[0].period}</span>
                  <p className="text-emerald-400 font-bold">CGPA: {education[0].cgpa}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-1">
                <div>
                  <p className="text-slate-300 font-medium">{education[1].degree}</p>
                </div>
                <div className="text-xs text-slate-400 font-mono sm:text-right">
                  <span className="text-emerald-400 font-bold">CGPA: {education[1].cgpa}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-1.5 pt-1 text-xs">
              <p>
                <strong className="text-white">Languages:</strong>{' '}
                <span className="text-slate-300">Go, Python, Java, SQL, HTML, CSS</span>
              </p>
              <p>
                <strong className="text-white">Backend:</strong>{' '}
                <span className="text-slate-300">REST APIs, FastAPI, gRPC, OpenTelemetry (OTLP)</span>
              </p>
              <p>
                <strong className="text-white">Cloud:</strong>{' '}
                <span className="text-slate-300">Kafka, Docker, MCP, Blockchain Fundamentals</span>
              </p>
              <p>
                <strong className="text-white">Databases:</strong>{' '}
                <span className="text-slate-300">PostgreSQL, ClickHouse, MySQL, MongoDB</span>
              </p>
              <p>
                <strong className="text-white">Tools:</strong>{' '}
                <span className="text-slate-300">Git, GitHub, VS Code, Cursor, Jupyter Notebook</span>
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-1">
              Work Experience
            </h2>
            <div className="space-y-2 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm">Software Engineering Intern</h3>
                  <p className="text-blue-400 font-medium">NerdPine</p>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Mar 2026 – Jul 2026
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                {experience[0].contributions.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-1">
              Projects
            </h2>

            {featuredProjects.map((p) => (
              <div key={p.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <span>{p.title}</span>
                    {p.githubUrl && (
                      <span className="text-[11px] font-normal text-blue-400">(GitHub)</span>
                    )}
                  </h3>
                </div>
                <p className="text-xs font-mono text-slate-400">
                  <strong className="text-slate-300">Tech Stack:</strong> {p.techStack.join(', ')}
                </p>
                <ul className="list-disc list-outside pl-4 space-y-1 text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                  {p.contributions.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 border-b border-slate-800 pb-1">
              Certifications
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-slate-300 text-xs sm:text-[13px] leading-relaxed pt-1">
              <li>
                <strong className="text-white">NPTEL:</strong> Deep Learning
              </li>
              <li>
                <strong className="text-white">ExcelR:</strong> Artificial Intelligence Machine Learning Internship
              </li>
            </ul>
          </div>

        </div>

        {/* Modal Footer (Hidden in print) */}
        <div className="no-print bg-[#0f172a] px-6 py-4 border-t border-white/[0.08] flex items-center justify-between">
          <p className="text-xs text-slate-400">
            Click <strong>Print / PDF</strong> to save a clean, high-resolution PDF copy.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-white/10 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
