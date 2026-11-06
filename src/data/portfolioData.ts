import { Project, Experience, Education, SkillCategory, Certification, ContactDetails } from '../types/portfolio';

export const contactDetails: ContactDetails = {
  name: "Katta Nikshitha",
  title: "Software Engineer | Backend Developer | Cloud & Distributed Systems | AI/ML Enthusiast",
  email: "kattanikshitha9@gmail.com",
  phone: "+91 7075892413",
  location: "Nellore, Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/katta-nikshitha",
  github: "https://github.com/katta-nikshitha",
};

export const professionalSummary = {
  headline: "Computer Science undergraduate with hands-on experience in backend development, cloud infrastructure, distributed systems and AI/ML.",
  body: "Skilled in Go, Python, Java, SQL, REST APIs, gRPC, Kafka, ClickHouse, PostgreSQL, OpenTelemetry (OTLP), and FastAPI. Passionate about architecting scalable microservices, high-throughput telemetry pipelines, and resilient distributed platforms.",
  badge: "Available for Software Engineering & Backend Roles",
  coreFocus: [
    "High-Throughput Distributed Systems & Microservices",
    "Real-Time Telemetry & Observability Pipelines (Kafka + ClickHouse + OTLP)",
    "Secure Fintech & Model Context Protocol (MCP) Workflows",
    "Production-Ready AI/ML Inference & Predictive Systems"
  ]
};

export const featuredProjects: Project[] = [
  {
    id: "skycommand-gpu-cloud",
    title: "SkyCommand GPU Cloud Platform",
    subtitle: "Cloud-Native GPU Infrastructure Management & High-Throughput Telemetry Platform",
    category: "Cloud & Distributed",
    featured: true,
    badge: "Cloud Infrastructure",
    techStack: ["Go", "gRPC", "OpenTelemetry (OTLP)", "Kafka", "ClickHouse", "PostgreSQL", "REST APIs", "Microservices"],
    purpose: "Engineered as a cloud-native GPU infrastructure management platform designed to orchestrate high-performance computing resources, streamline multi-tenant onboarding, and ingest real-time hardware telemetry at scale across distributed cluster nodes.",
    architecture: {
      overview: "A distributed microservices architecture implemented in Go. Microservices communicate internally via high-performance gRPC channels for sub-millisecond control-plane coordination and expose RESTful APIs for client interfaces. Telemetry data from GPU nodes is collected via OpenTelemetry (OTLP) collectors, streamed through an Apache Kafka message broker for buffer-isolated ingestion, and indexed into ClickHouse columnar storage for real-time aggregation and ultra-fast analytical queries, alongside PostgreSQL for relational tenant state.",
      highlights: [
        "Go microservices architecture built for high concurrency and minimal memory overhead",
        "Dual API interface: Low-latency internal gRPC services paired with external REST API gateway",
        "Decoupled event streaming pipeline utilizing Apache Kafka for reliable metric buffering",
        "High-performance OLAP storage engine via ClickHouse for lightning-fast multi-dimensional metric queries",
        "Relational tenant metadata, user provisioning, and state management via PostgreSQL"
      ],
      dataFlow: [
        "GPU Nodes / Agents -> OTLP Telemetry Exporter -> OpenTelemetry Collector",
        "OTLP Collector -> Apache Kafka Telemetry Topics (Partitioned by Tenant/Cluster)",
        "Kafka Consumers (Go Services) -> ClickHouse Columnar OLAP Database (Time-series Ingestion)",
        "Control Plane & Tenant Onboarding -> gRPC / REST APIs -> PostgreSQL Metadata Store",
        "Observability Dashboard -> High-Speed Analytical Queries -> ClickHouse Engine"
      ]
    },
    technologies: [
      {
        category: "Backend & Systems",
        items: ["Go", "Cloud-Native Microservices", "REST APIs", "gRPC / Protobuf"]
      },
      {
        category: "Telemetry & Streaming",
        items: ["OpenTelemetry (OTLP)", "Apache Kafka", "Real-Time Ingestion Pipelines"]
      },
      {
        category: "Databases & Storage",
        items: ["ClickHouse (Columnar OLAP)", "PostgreSQL (Relational State)"]
      },
      {
        category: "Architecture & Protocols",
        items: ["Distributed Systems", "Tenant Onboarding & Orchestration", "High-Concurrency Pipelines"]
      }
    ],
    contributions: [
      "Developed backend components for a cloud-native GPU infrastructure management platform supporting tenant onboarding, telemetry, and orchestration.",
      "Built scalable telemetry pipelines using OpenTelemetry, Kafka, and ClickHouse for real-time collection, ingestion, storage, and querying of infrastructure metrics.",
      "Implemented REST APIs and gRPC services to manage infrastructure resources, telemetry configuration, and platform communication.",
      "Worked with distributed microservices, PostgreSQL, and cloud-native architectures to improve scalability, observability, and operational reliability."
    ],
    keyChallenges: [
      {
        challenge: "Massive Metric Velocity & Ingestion Bottlenecks: Ingesting high-frequency GPU telemetry metrics (compute load, memory utilization, thermal dynamics, power consumption) across concurrent cluster nodes without overloading transactional databases or losing data packets.",
        solution: "Decoupled metric generation from storage by inserting an Apache Kafka event streaming layer and directing time-series writes in micro-batches to ClickHouse's columnar engine, preserving low write latency and enabling sub-second analytical querying."
      },
      {
        challenge: "Multi-Protocol Coordination (gRPC vs REST): Maintaining strict schema synchronization and low latency between internal microservices requiring high-throughput binary serialization while serving external REST endpoints for web consoles.",
        solution: "Implemented gRPC services with strongly-typed Protocol Buffers for cluster orchestration and inter-service telemetry communication, complemented by a structured REST API layer with unified validation and error handling."
      },
      {
        challenge: "Multi-Tenant Resource Isolation & Observability: Ensuring that high-frequency metric queries from one tenant never compromise platform responsiveness or expose cross-tenant hardware metrics.",
        solution: "Architected multi-tenant partition keys within Kafka topics and structured ClickHouse table schemas partitioned by tenant ID and timestamp, backed by PostgreSQL tenant authorization policies."
      }
    ],
    stats: [
      { label: "Pipeline Stack", value: "OTLP + Kafka + ClickHouse" },
      { label: "Inter-Service IPC", value: "gRPC & Protobuf" },
      { label: "Primary Language", value: "Go (Golang)" },
      { label: "Architecture", value: "Cloud-Native Microservices" }
    ]
  },
  {
    id: "stablecoin-as-a-service",
    title: "Stablecoin-as-a-Service Platform",
    subtitle: "Enterprise Fintech Infrastructure with Model Context Protocol (MCP) AI Workflows",
    category: "Fintech & AI",
    featured: true,
    badge: "Fintech & AI Agents",
    techStack: ["Python", "FastAPI", "MCP", "PostgreSQL", "Plaid", "Middesk", "Unit21", "Blockchain Fundamentals"],
    purpose: "Built as an enterprise-grade backend platform enabling compliant financial institutions and modern fintechs to manage the lifecycle of stablecoins (minting, redemption, transfers, and custody account management) while integrating AI agents safely through Model Context Protocol (MCP).",
    architecture: {
      overview: "Constructed on FastAPI and PostgreSQL, this platform orchestrates critical financial workflows with strict transactional atomicity. It links into Plaid for banking connectivity and liquidity verification, Middesk for automated Know-Your-Business (KYB) corporate identity verification, and Unit21 for anti-money laundering (AML) and risk monitoring. Additionally, it integrates a Model Context Protocol (MCP) server layer that translates conversational AI prompts into strictly typed, permissioned financial tool executions.",
      highlights: [
        "FastAPI asynchronous backend delivering secure, high-concurrency REST endpoints",
        "Model Context Protocol (MCP) server integration empowering autonomous AI agents with bounded financial tools",
        "Deep integrations with regulated fintech verification providers: Plaid, Middesk, and Unit21",
        "ACID-compliant PostgreSQL database schema enforcing double-entry ledger bookkeeping and account state integrity",
        "Role-based authorization and cryptographic signature verification for all mint/burn/transfer requests"
      ],
      dataFlow: [
        "Client Request / AI Agent Prompt -> MCP Tool Protocol Server -> Auth & Permission Validator",
        "Identity & KYB Onboarding -> Middesk API -> PostgreSQL Compliance Records",
        "Bank Account Linking & Funding -> Plaid API -> Liquidity Verification",
        "Transaction Execution (Mint / Transfer / Redeem) -> Unit21 Risk & AML Rule Evaluation",
        "Verified State Commit -> PostgreSQL Ledger -> Transaction Confirmation Webhook"
      ]
    },
    technologies: [
      {
        category: "Core Backend",
        items: ["Python", "FastAPI", "Asynchronous Programming", "REST APIs"]
      },
      {
        category: "AI & Protocol Layer",
        items: ["Model Context Protocol (MCP)", "Autonomous Tool Calling", "Natural Language FinOps"]
      },
      {
        category: "Third-Party Fintech APIs",
        items: ["Plaid (Bank Connectivity)", "Middesk (KYB Verification)", "Unit21 (AML & Risk Management)"]
      },
      {
        category: "Database & Security",
        items: ["PostgreSQL", "Blockchain Fundamentals", "Double-Entry Ledger Integrity"]
      }
    ],
    contributions: [
      "Built backend services for a Stablecoin-as-a-Service platform supporting mint, redeem, transfer, and account management operations.",
      "Integrated Plaid for bank connectivity, Middesk for KYB verification, and Unit21 for compliance monitoring and risk management.",
      "Developed Model Context Protocol (MCP) workflows to enable AI agents to securely execute financial operations through natural language interactions.",
      "Designed secure REST APIs for compliant fintech applications."
    ],
    keyChallenges: [
      {
        challenge: "AI Agent Financial Safety & Guardrails: Allowing large language models / AI agents to interact with financial infrastructure without risking arbitrary tool execution, unauthorized fund transfers, or prompt injections.",
        solution: "Engineered strict Model Context Protocol (MCP) schema definitions with fine-grained parameter validation, schema checks, idempotent operation tokens, and dual-layer authorization rules before triggering any ledger mutations."
      },
      {
        challenge: "Asynchronous Compliance Orchestration: Coordinating disparate verification responses from Middesk (multi-hour or multi-day business entity verification) and Unit21 (real-time risk scoring) without stalling client requests.",
        solution: "Implemented an asynchronous state machine with webhook listeners and resilient retry policies in FastAPI, keeping tenant accounts in strictly regulated intermediate states until compliance requirements are certified."
      },
      {
        challenge: "Financial Ledger Consistency: Ensuring that mint, redeem, and transfer operations maintain absolute mathematical balance without race conditions or concurrent double-spend anomalies.",
        solution: "Enforced PostgreSQL transactional locks and immutable ledger entry patterns with atomic balance updates, ensuring that every debit corresponds to an exact credit."
      }
    ],
    stats: [
      { label: "Framework", value: "FastAPI + Python" },
      { label: "AI Integration", value: "Model Context Protocol (MCP)" },
      { label: "Compliance APIs", value: "Plaid, Middesk, Unit21" },
      { label: "Ledger Store", value: "PostgreSQL" }
    ]
  },
  {
    id: "ai-crop-prediction",
    title: "AI Crop Prediction System",
    subtitle: "Precision Agriculture & Economic Feasibility Recommendation Platform",
    category: "AI & Agritech",
    featured: true,
    badge: "AI/ML & Agritech",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "Random Forest", "Open-Meteo API", "Scikit-Learn"],
    githubUrl: "https://github.com/katta-nikshitha",
    purpose: "An intelligent agronomic recommendation platform that analyzes soil chemistry, live meteorological data, agricultural datasets, and mandi market commodity prices to deliver data-backed crop suggestions with comprehensive ROI projections.",
    architecture: {
      overview: "The system is structured into a full-stack predictive architecture. The frontend is built with React and TypeScript, providing farmers and agronomists with an intuitive, responsive parameter input console and visual ROI dashboard. The backend is powered by FastAPI, serving a Scikit-Learn Random Forest classification pipeline trained on over 246,000 agricultural records. It integrates real-time weather and forecast data via the Open-Meteo API and calculates live economic feasibility against regional mandi commodity pricing datasets.",
      highlights: [
        "Machine Learning pipeline trained on 246,000+ agricultural data records using Random Forest classification",
        "FastAPI inference microservice optimized for low-latency JSON response times",
        "Live weather and atmospheric condition integration via the Open-Meteo API",
        "Holistic recommendation logic combining soil N-P-K, pH, weather, mandi market price trends, and ROI analysis",
        "Modern, accessible React and TypeScript frontend with dynamic charts and comparative metrics"
      ],
      dataFlow: [
        "User Location & Soil Parameters -> React + TypeScript Interface",
        "Geocoded Coordinates -> Open-Meteo API (Fetches Real-Time Temp, Humidity, Precipitation)",
        "Aggregated Input Vector -> FastAPI ML Endpoint",
        "Random Forest Classifier (246K+ records) -> Yield & Top Crop Probabilities",
        "Crop Probabilities + Mandi Market Prices -> ROI Feasibility Engine -> Comprehensive Farmer Dashboard"
      ]
    },
    technologies: [
      {
        category: "Machine Learning & Data",
        items: ["Random Forest", "Scikit-Learn", "246K+ Agricultural Records", "Pandas & NumPy"]
      },
      {
        category: "Backend & APIs",
        items: ["Python", "FastAPI", "Open-Meteo API Integration", "RESTful Architecture"]
      },
      {
        category: "Frontend & UI",
        items: ["React", "TypeScript", "Responsive Design", "Data Visualization"]
      },
      {
        category: "Domain Analytics",
        items: ["Soil Chemistry Analysis (N-P-K, pH)", "Mandi Commodity Pricing", "Farmer ROI Projections"]
      }
    ],
    contributions: [
      "Built an AI-powered crop recommendation system using Random Forest models trained on 246K+ agricultural records.",
      "Integrated real-time weather, soil, location, mandi price analysis and ROI analysis to provide personalized crop recommendations.",
      "Developed REST APIs with FastAPI and integrated them with a React frontend."
    ],
    keyChallenges: [
      {
        challenge: "Training on Large Heterogeneous Agricultural Datasets: Handling 246K+ records with varying agricultural parameters (soil nutrients, rainfall variances, temperature deviations) while preventing overfitting and class imbalance across rare crop varieties.",
        solution: "Implemented rigorous data preprocessing, feature engineering, and hyperparameter-tuned Random Forest ensemble methods to achieve high precision and generalizability across diverse climatic zones."
      },
      {
        challenge: "Real-Time Weather Integration & Fault Tolerance: Relying on third-party meteorological APIs (Open-Meteo) without introducing latency spikes or failing when network requests timeout.",
        solution: "Engineered FastAPI caching mechanisms and fallback climate baseline heuristics, ensuring instant prediction feedback even in low-bandwidth rural connectivity scenarios."
      },
      {
        challenge: "Transforming ML Probabilities into Actionable Business ROI: Farmers need more than raw botanical confidence scores; they require actionable economic profitability projections.",
        solution: "Built a dedicated financial modeling module combining predicted crop yields with live mandi market commodity rates, factoring in cultivation expenses to output ranked net-profit projections."
      }
    ],
    stats: [
      { label: "Training Dataset", value: "246K+ Agricultural Records" },
      { label: "ML Model", value: "Random Forest Classifier" },
      { label: "Weather Feed", value: "Open-Meteo Live API" },
      { label: "Full-Stack", value: "FastAPI + React + TypeScript" }
    ]
  }
];

export const experience: Experience[] = [
  {
    id: "nerdpine-intern",
    role: "Software Engineering Intern",
    company: "NerdPine",
    location: "Remote / Hybrid",
    period: "Mar 2026 – Jul 2026",
    type: "Internship",
    summary: "Engineered core backend services and scalable telemetry ingestion pipelines for the SkyCommand GPU Cloud Platform using Go, cloud-native microservices, Kafka, ClickHouse, and OpenTelemetry.",
    contributions: [
      "Contributed to the development of backend services for the SkyCommand GPU Cloud Platform using Go and cloud-native microservices.",
      "Built and enhanced REST APIs and gRPC services to support telemetry, orchestration, and infrastructure management workflows.",
      "Worked with OpenTelemetry, Kafka, ClickHouse, and PostgreSQL to enable scalable telemetry collection, processing, and querying.",
      "Collaborated with senior engineers in Agile development, code reviews, testing, debugging, documentation, and feature implementation."
    ],
    technologies: ["Go", "REST APIs", "gRPC", "OpenTelemetry (OTLP)", "Kafka", "ClickHouse", "PostgreSQL", "Cloud-Native Microservices", "Docker"],
    highlights: [
      "Engineered real-time telemetry processing pipelines for high-velocity GPU cluster metrics",
      "Integrated dual-protocol communication with low-latency gRPC services and REST endpoints",
      "Implemented ClickHouse analytical queries to unlock high-speed time-series metric aggregation",
      "Actively contributed across the full Agile engineering lifecycle with rigorous code reviews and documentation"
    ]
  }
];

export const education: Education[] = [
  {
    institution: "Rajiv Gandhi University of Knowledge Technologies (RGUKT)",
    degree: "Bachelor of Technology – Computer Science",
    period: "Dec 2020 – Apr 2026",
    cgpa: "8.89",
    maxCgpa: "10.0",
    badge: "Undergraduate Degree",
    details: [
      "Rigorous 6-year integrated curriculum encompassing Computer Science Engineering fundamentals and Pre-University foundations.",
      "Key coursework: Distributed Systems, Cloud Computing, Database Management Systems, Computer Networks, Operating Systems, Data Structures & Algorithms, Machine Learning.",
      "Consistent academic excellence with a CGPA of 8.89 / 10.0 in Computer Science."
    ]
  },
  {
    institution: "Rajiv Gandhi University of Knowledge Technologies (RGUKT)",
    degree: "Pre-University Course (PUC)",
    period: "Dec 2020 – 2022",
    cgpa: "9.67",
    maxCgpa: "10.0",
    badge: "Higher Secondary Foundation",
    details: [
      "Earned an exceptional CGPA of 9.67 / 10.0 in foundational Sciences and Mathematics (M.Bi.P.C / M.P.C curriculum).",
      "Top-tier performance qualifying for premier Computer Science Engineering specialization."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    iconName: "Code2",
    description: "Core programming and query languages for scalable systems and services",
    skills: [
      { name: "Go (Golang)", level: "Core Proficiency", highlight: true },
      { name: "Python", level: "Core Proficiency", highlight: true },
      { name: "Java", level: "Proficient", highlight: true },
      { name: "SQL", level: "Advanced", highlight: true },
      { name: "HTML5", level: "Proficient", highlight: false },
      { name: "CSS3", level: "Proficient", highlight: false }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    iconName: "Server",
    description: "API design, asynchronous services, and distributed microservices",
    skills: [
      { name: "REST APIs", level: "Advanced Architecture", highlight: true },
      { name: "FastAPI", level: "Advanced", highlight: true },
      { name: "gRPC & Protobuf", level: "Core Systems", highlight: true },
      { name: "OpenTelemetry (OTLP)", level: "Telemetry & Tracing", highlight: true },
      { name: "Microservices", level: "Cloud-Native", highlight: true }
    ]
  },
  {
    id: "cloud-distributed",
    title: "Cloud & Distributed Systems",
    iconName: "Cloud",
    description: "Event streaming, containerization, AI protocols, and decentralized systems",
    skills: [
      { name: "Apache Kafka", level: "Event Streaming", highlight: true },
      { name: "Docker", level: "Containerization", highlight: true },
      { name: "Model Context Protocol (MCP)", level: "AI Agent Workflows", highlight: true },
      { name: "Blockchain Fundamentals", level: "Decentralized Protocols", highlight: false },
      { name: "Cloud-Native Arch", level: "Scalable Infrastructure", highlight: true }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    iconName: "Database",
    description: "Relational, columnar OLAP, and NoSQL storage systems",
    skills: [
      { name: "PostgreSQL", level: "Relational & ACID", highlight: true },
      { name: "ClickHouse", level: "High-Speed Columnar OLAP", highlight: true },
      { name: "MySQL", level: "Relational", highlight: false },
      { name: "MongoDB", level: "Document Store", highlight: false }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools & Workflow",
    iconName: "Wrench",
    description: "Version control, IDEs, AI-assisted development, and data science notebooks",
    skills: [
      { name: "Git", level: "Version Control", highlight: true },
      { name: "GitHub", level: "CI/CD & Collaboration", highlight: true },
      { name: "VS Code", level: "Development", highlight: false },
      { name: "Cursor", level: "AI-Augmented Development", highlight: true },
      { name: "Jupyter Notebook", level: "Data Science & Prototyping", highlight: false }
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: "nptel-deep-learning",
    title: "Deep Learning",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    type: "Academic Certification",
    skillsGained: [
      "Neural Network Architectures",
      "Backpropagation & Optimization",
      "Convolutional & Recurrent Networks",
      "Deep Learning Model Training & Evaluation"
    ]
  },
  {
    id: "excelr-aiml",
    title: "Artificial Intelligence Machine Learning Internship",
    issuer: "ExcelR",
    type: "Industry Internship Certification",
    skillsGained: [
      "Supervised & Unsupervised Machine Learning",
      "Ensemble Models & Random Forest",
      "Feature Engineering & Data Preprocessing",
      "Model Evaluation Metrics & Predictive Deployment"
    ]
  }
];
