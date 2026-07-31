export const featuredProjects = [
  {
    id: 'ai-prompt-studio',
    name: 'AI Prompt Engineering Studio',
    tag: 'Flagship Project',
    description:
      'A full-stack studio for crafting, testing, and iterating on AI prompts — built as a production-grade platform, not a demo.',
    problem:
      'Prompt engineering workflows are usually scattered across notebooks and chat windows with no versioning, comparison, or structured evaluation.',
    architecture:
      'Full-stack app with a REST API backend handling prompt storage, versioning, and evaluation logic, and a dynamic frontend for interactive prompt building and testing.',
    features: [
      'Prompt Generator with structured templates',
      'Battle Arena — side-by-side prompt/response comparison',
      'AI Chat module for live iteration',
      'Multiple interactive modules covering the full prompt lifecycle',
    ],
    challenges: [
      'Handling auth reliably across protected routes',
      'Migrating the underlying AI API provider without breaking existing modules',
    ],
    solutions: [
      'Root-caused and resolved the auth flow end-to-end rather than patching symptoms',
      'Migrated providers cleanly with no disruption to the eleven existing modules',
    ],
    future: ['Add prompt version diffing', 'Team workspaces for collaborative prompt review'],
    stack: ['Java', 'Spring Boot', 'JavaScript', 'REST APIs', 'JWT', 'MongoDB'],
    github: 'https://github.com/yaminipons',
    demo: 'https://ai-prompt-studio-1.onrender.com',
    layout: 'left',
  },
  {
    id: 'career-compass',
    name: 'Career Compass',
    tag: 'Flagship Project',
    description:
      'An AI-powered career guidance platform helping students choose suitable career paths based on their interests, skills, and goals.',
    problem:
      'Students often pick career paths with little structured self-assessment or guidance on the skill gaps between where they are and where they want to be.',
    architecture:
      'FastAPI backend with MongoDB for user data and JWT/bcrypt auth, serving a responsive frontend with a dashboard, chatbot, and analysis tools.',
    features: [
      'AI-powered career recommendation across 40+ paths',
      'Resume Analyzer',
      'Skill Gap Tracker',
      'Career Comparison tool',
      'AI Career Chatbot for real-time guidance',
      'Secure login with JWT authentication + user dashboard',
    ],
    challenges: ['Migrating the AI provider behind the chatbot and resume analyzer without downtime'],
    solutions: ['Executed a clean Gemini-to-Groq migration, re-verifying every AI-dependent feature after cutover'],
    future: ['Expand career database beyond 40+ paths', 'Add mentor-matching feature'],
    stack: ['Python', 'FastAPI', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'JWT', 'bcrypt'],
    github: 'https://github.com/yaminipons',
    demo: 'https://career-compass.vercel.app',
    layout: 'right',
  },
]

export const otherProjects = [
  {
    id: 'botrainer',
    name: 'BotTrainer',
    tag: 'NLU Model Trainer & Evaluator',
    description:
      'AI-powered chatbot dataset annotation platform using zero-shot classification and NER to auto-label training data and evaluate model accuracy.',
    stack: ['Python', 'Streamlit', 'FastAPI', 'Rasa', 'spaCy'],
    github: 'https://github.com/yaminipons',
  },
  {
    id: 'psyra',
    name: 'PSYRA',
    tag: 'AI Mental Health Assistant',
    description:
      'Privacy-focused mental wellness assistant with emotion detection, an AI chatbot, music recommendation, journaling, and a doodle board.',
    stack: ['Python', 'Flask', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/yaminipons',
  },
]