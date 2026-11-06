# Katta Nikshitha — Senior Software Engineer & Backend Systems Portfolio

A personal portfolio website engineered for **Katta Nikshitha**, positioned as **Software Engineer | Backend Developer | Cloud & Distributed Systems | AI/ML Enthusiast**.

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**, featuring an obsidian dark aesthetic, interactive telemetry simulations, deep-dive system architecture modals, and ATS-compliant resume download & print tools.

---

## 🌟 Key Features

1. **Precision Positioning & Obsidian Theme**:
   - Sophisticated dark palette (`#090d16` background, `#0f172a` glassmorphic cards, cyan and indigo accent glows).
   - High-performance typography powered by *Inter* and *JetBrains Mono*.

2. **Interactive Live Telemetry Terminal Widget**:
   - Simulates real-time telemetry ingestion pipelines (`Go` + `Kafka` + `ClickHouse`).
   - Switchable terminal tabs:
     - `skycommand.go`: GPU hardware metrics (NVIDIA H100 SXM5, VRAM, thermals).
     - `stablecoin_mcp.py`: Model Context Protocol AI agent tool calling with Plaid & Unit21.
     - `crop_predictor.py`: Machine learning inference on 246K+ agricultural records.
   - Interactive simulation trigger button for live state updates.

3. **Featured Projects with Architectural Deep-Dives**:
   - **SkyCommand GPU Cloud Platform** (Go, gRPC, OTLP, Kafka, ClickHouse, PostgreSQL)
   - **Stablecoin-as-a-Service Platform** (Python, FastAPI, MCP, PostgreSQL, Plaid, Middesk, Unit21)
   - **AI Crop Prediction System** (Python, FastAPI, React, TypeScript, Random Forest on 246K+ records, Open-Meteo API)
   - Deep-dive architectural modal containing **Purpose**, **Architecture & Data Flow Diagram**, **Technologies Breakdown**, **Resume-Verified Contributions**, and **Key Technical Challenges & Solutions**.

4. **Career Timeline & Academic Excellence**:
   - **NerdPine** Software Engineering Internship (Mar 2026 – Jul 2026) with expandable architectural achievements.
   - **RGUKT** B.Tech in Computer Science (CGPA: **8.89 / 10.0**) & Pre-University Course (CGPA: **9.67 / 10.0**).
   - Verified Certifications: NPTEL Deep Learning & ExcelR AI/ML Internship.

5. **Integrated ATS-Compliant Resume System**:
   - Interactive Resume Modal with 1-click **Print / Save as PDF** (`window.print()` with custom print stylesheets).
   - 1-click **Download Plain Text (.txt)** resume with confetti celebration.
   - 1-click **Copy Resume Text**.

6. **Dedicated Contact Section**:
   - 1-click clipboard copy for Email (`kattanikshitha9@gmail.com`) and Phone (`+91 7075892413`).
   - Interactive message form with validation, success feedback, and automatic mailto client fallback.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18.0 or higher recommended, tested on v24.14)
- npm (v9.0+)

### Setup Instructions

1. **Navigate to the project folder:**
   ```bash
   cd "C:\Users\katta\.gemini\antigravity\scratch\katta-nikshitha-portfolio"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be created in the `dist/` directory.

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 🚢 Deployment Instructions

### Option 1: Vercel (Recommended)

1. Push this repository to GitHub or GitLab.
2. Visit [Vercel](https://vercel.com) and import the repository.
3. Configure the build settings (Vercel automatically detects Vite):
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

Alternatively, via Vercel CLI:
```bash
npm install -g vercel
vercel
```

---

### Option 2: Netlify

1. Visit [Netlify](https://www.netlify.com) and connect your repository.
2. Set build parameters:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Click **Deploy Site**.

Alternatively, deploy via Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

### Option 3: Docker Deployment

A production-ready multi-stage `Dockerfile` and `nginx.conf` are included in the repository.

1. **Build the Docker container:**
   ```bash
   docker build -t katta-nikshitha-portfolio .
   ```

2. **Run the container on port 80:**
   ```bash
   docker run -d -p 80:80 --name nikshitha-portfolio katta-nikshitha-portfolio
   ```

3. Open `http://localhost` in your browser.

---

## 📂 Project Architecture

```
katta-nikshitha-portfolio/
├── dist/                        # Production build output
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── About.tsx            # Background, academic merit & 4 system pillars
│   │   ├── Certifications.tsx   # NPTEL & ExcelR verified credentials
│   │   ├── Contact.tsx          # Direct contact info, copy tooltips & form
│   │   ├── Education.tsx        # RGUKT B.Tech (8.89) & PUC (9.67) cards
│   │   ├── Experience.tsx       # NerdPine internship timeline & architecture
│   │   ├── Footer.tsx           # Social links & back-to-top
│   │   ├── Hero.tsx             # Visual hero & live telemetry simulation terminal
│   │   ├── Navbar.tsx           # Glassmorphism header with active section spy
│   │   ├── ProjectModal.tsx     # Deep-dive architecture & data flow modal
│   │   ├── Projects.tsx         # 3 featured projects with category filters
│   │   └── ResumeModal.tsx      # ATS resume preview, PDF print & .txt download
│   ├── data/
│   │   └── portfolioData.ts     # Single source of truth grounded in resume
│   ├── styles/
│   │   └── index.css            # Tailwind directives, print CSS & glow effects
│   ├── types/
│   │   └── portfolio.ts         # TypeScript interfaces
│   ├── App.tsx                  # Root application component
│   └── main.tsx                 # Entry point
├── Dockerfile                   # Multi-stage production container
├── nginx.conf                   # High-performance Nginx static config
├── package.json                 # Dependencies and build scripts
├── tailwind.config.js           # Obsidian theme & custom animations
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite configuration
```
