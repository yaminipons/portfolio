import {
  SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiFastapi, SiMongodb, SiGit,
  SiJsonwebtokens, SiN8N, SiPython, SiOpenjdk, SiRasa, SiSpacy,
} from 'react-icons/si'
import { FaReact, FaGithub, FaDatabase } from 'react-icons/fa'
import { FiServer, FiCpu } from 'react-icons/fi'

// NOTE on icons: most are the technology's real brand mark (simple-icons).
// SQL (a language, not a product) and "REST APIs" (a convention, not a product)
// don't have an official single logo, so they use a sensible generic icon
// instead (FaDatabase / FiServer). Prompt Engineering is a skill, not a
// product, so it uses a generic AI icon (FiCpu).

export const categories = [
  { id: 'languages', label: 'Languages', icon: '🚀', color: '#35E7D2' },
  { id: 'frontend', label: 'Frontend', icon: '🎨', color: '#8B5CF6' },
  { id: 'backend', label: 'Backend', icon: '🛰️', color: '#4F7CFF' },
  { id: 'ai', label: 'AI & Machine Learning', icon: '🌌', color: '#35E7D2' },
  { id: 'database', label: 'Databases', icon: '💾', color: '#8B5CF6' },
  { id: 'tools', label: 'Tools', icon: '🛠️', color: '#4F7CFF' },
]

export const skillsUniverse = [
  // Languages
  {
    id: 'java', name: 'Java', category: 'Languages', ring: 'languages', icon: SiOpenjdk, level: 88,
    description: 'Core language for backend and DSA — used across coursework and interview prep.',
    projects: ['AI Prompt Engineering Studio'],
  },
  {
    id: 'python', name: 'Python', category: 'Languages', ring: 'languages', icon: SiPython, level: 90,
    description: 'Primary language for AI/ML work — NLP pipelines, backend services, automation.',
    projects: ['BotTrainer', 'PSYRA', 'Career Compass'],
  },
  {
    id: 'sql', name: 'SQL', category: 'Languages', ring: 'languages', icon: FaDatabase, level: 78,
    description: 'Relational querying and schema design for structured data.',
    projects: [],
  },
  {
    id: 'javascript', name: 'JavaScript', category: 'Languages', ring: 'languages', icon: SiJavascript, level: 82,
    description: 'Frontend interactivity and full-stack glue code across every web project.',
    projects: ['Career Compass', 'PSYRA'],
  },
  {
    id: 'html', name: 'HTML', category: 'Languages', ring: 'languages', icon: SiHtml5, level: 90,
    description: 'Semantic structure for every interface I ship.',
    projects: ['Career Compass', 'PSYRA'],
  },
  {
    id: 'css', name: 'CSS', category: 'Languages', ring: 'languages', icon: SiCss, level: 85,
    description: 'Styling fundamentals underpinning all Tailwind work.',
    projects: ['Career Compass', 'PSYRA'],
  },

  // Frontend
  {
    id: 'react', name: 'React', category: 'Frontend', ring: 'frontend', icon: FaReact, level: 85,
    description: 'Component-driven UI for dashboards and interactive product experiences.',
    projects: ['Career Compass'],
  },
  {
    id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', ring: 'frontend', icon: SiTailwindcss, level: 88,
    description: 'Utility-first styling for fast, consistent, premium UI.',
    projects: ['Career Compass', 'PSYRA'],
  },

  // Backend
  {
    id: 'fastapi', name: 'FastAPI', category: 'Backend', ring: 'backend', icon: SiFastapi, level: 85,
    description: 'Python backend framework powering REST APIs across full-stack projects.',
    projects: ['Career Compass', 'BotTrainer'],
  },
  {
    id: 'restapis', name: 'REST APIs', category: 'Backend', ring: 'backend', icon: FiServer, level: 84,
    description: 'Designing and consuming clean, predictable HTTP APIs.',
    projects: ['Career Compass', 'AI Prompt Engineering Studio'],
  },
  {
    id: 'jwt', name: 'JWT Auth', category: 'Backend', ring: 'backend', icon: SiJsonwebtokens, level: 80,
    description: 'Token-based authentication and secure session handling.',
    projects: ['Career Compass', 'AI Prompt Engineering Studio'],
  },

  // AI
  {
    id: 'nlp', name: 'NLP', category: 'AI', ring: 'ai', icon: FiCpu, level: 85,
    description: 'Natural language processing — intent classification, NER, text pipelines.',
    projects: ['BotTrainer'],
  },
  {
    id: 'rasa', name: 'Rasa', category: 'AI', ring: 'ai', icon: SiRasa, level: 78,
    description: 'Open-source framework for building and evaluating conversational AI.',
    projects: ['BotTrainer'],
  },
  {
    id: 'spacy', name: 'spaCy', category: 'AI', ring: 'ai', icon: SiSpacy, level: 80,
    description: 'Industrial-strength NLP library for NER and zero-shot classification.',
    projects: ['BotTrainer'],
  },
  {
    id: 'promptengineering', name: 'Prompt Engineering', category: 'AI', ring: 'ai', icon: FiCpu, level: 88,
    description: 'Structuring and iterating on prompts for reliable, high-quality LLM output.',
    projects: ['AI Prompt Engineering Studio'],
  },

  // Database
  {
    id: 'mongodb', name: 'MongoDB', category: 'Database', ring: 'database', icon: SiMongodb, level: 82,
    description: 'Document database for flexible, scalable data models.',
    projects: ['Career Compass'],
  },

  // Tools
  {
    id: 'git', name: 'Git', category: 'Tools', ring: 'tools', icon: SiGit, level: 88,
    description: 'Version control for every project, solo and collaborative.',
    projects: ['All projects'],
  },
  {
    id: 'github', name: 'GitHub', category: 'Tools', ring: 'tools', icon: FaGithub, level: 88,
    description: 'Hosting, collaboration, and CI for shipped projects.',
    projects: ['All projects'],
  },
  {
    id: 'n8n', name: 'n8n', category: 'Tools', ring: 'tools', icon: SiN8N, level: 75,
    description: 'Workflow automation connecting tools, APIs, and data pipelines.',
    projects: [],
  },
]