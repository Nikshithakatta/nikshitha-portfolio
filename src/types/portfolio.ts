export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Cloud & Distributed' | 'Fintech & AI' | 'AI & Agritech';
  period?: string;
  techStack: string[];
  purpose: string;
  architecture: {
    overview: string;
    highlights: string[];
    dataFlow: string[];
  };
  technologies: {
    category: string;
    items: string[];
  }[];
  contributions: string[];
  keyChallenges: {
    challenge: string;
    solution: string;
  }[];
  githubUrl?: string;
  featured: boolean;
  badge?: string;
  stats?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  contributions: string[];
  technologies: string[];
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  maxCgpa: string;
  badge?: string;
  details?: string[];
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "Advanced", "Proficient", "Core"
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  period?: string;
  type: string;
  skillsGained: string[];
}

export interface ContactDetails {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}
