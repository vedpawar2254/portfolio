export const personalInfo = {
  name: "Ved Pawar",
  title: "SDE | AI | Backend & Product | Open Source | Coolness",
  email: "ved.pawar2024@nst.rishihood.edu.in",
  phone: "8208689558",
  bio: "Software engineer working on pretty much everything. I design and ship end-to-end platforms—owning architecture, APIs, data flows, and deployment—with real users in production (hundreds across multiple systems).",
  tagline: "Building systems that scale, ship, and matter.",
  links: {
    github: "https://github.com/vedpawar2254",
    linkedin: "https://www.linkedin.com/in/vedpawar2254",
    kaggle: "https://www.kaggle.com/vedpawar2254",
    leetcode: "https://leetcode.com/vedpawar2254"
  }
};

export const experiences = [
  {
    id: "devclub",
    title: "Vice President",
    company: "DevClub, NST",
    type: "Full-time",
    location: "On-site",
    period: "Jan 2025 – Present",
    current: true,
    description: "Built DevClub from the ground up into a structured, product-driven developer organization.",
    highlights: [
      "Led cross-functional teams (engineering, design, logistics, outreach) delivering internal platforms and large-scale events",
      "Directed national-level hackathons and technical programs, managing partnerships, sponsorships, logistics, and execution",
      "Led development of internal platforms and tooling; promoted open-source-first workflows across campus",
      "Mentored developers in full-stack systems, backend engineering, AI, and open-source contribution"
    ]
  },
  {
    id: "codedevverse",
    title: "Backend Developer Intern",
    company: "CodeDevVerse",
    type: "Internship",
    location: "Remote",
    period: "Jun 2025 – Aug 2025",
    description: "Built scalable backend services and implemented AI-driven systems.",
    highlights: [
      "Designed and built scalable backend services and REST APIs",
      "Implemented an end-to-end AI interviewing system, integrating business logic and AI-driven evaluation",
      "Collaborated closely with frontend and product teams to ship features with reliability and performance"
    ]
  },
  {
    id: "vanaha",
    title: "Product Developer",
    company: "Vanaha Agro Forestry",
    type: "Freelance",
    location: "Remote",
    period: "Oct 2025 – Nov 2025",
    description: "Led end-to-end product development from concept to production.",
    highlights: [
      "Led end-to-end development of two production products from concept to launch",
      "Designed system architecture, implemented core features, and shipped user-ready systems",
      "Products currently serve ~15–20 daily active users"
    ]
  },
  {
    id: "dcode",
    title: "Head",
    company: "DCODE Initiative",
    type: "Leadership",
    location: "On-site",
    period: "2024 – Present",
    current: true,
    description: "Co-created and led DCODE, lowering barriers to open-source contribution.",
    highlights: [
      "Built and maintained the DCODE platform and website",
      "Managed multiple teams and contributor workflows",
      "Led outreach to open-source communities",
      "Organized and executed a DCODE-focused hackathon"
    ]
  }
];

export const projects = {
  magnum_opus: [
    {
      id: "dcode",
      name: "DCODE Platform",
      description: "Open-source contribution and mentorship platform with ~300 users. Built core workflows for onboarding, project matching, and contributor tracking.",
      url: "https://dcode.codes",
      github: "https://github.com/DCODE-HQ/dcode-frontend",
      tags: ["Platform", "Open Source", "Mentorship"],
      users: "~300 users",
      status: "Production"
    },
    {
      id: "syftly",
      name: "Syftly.ai",
      description: "AI-powered application for intelligent workflows.",
      url: "https://syftlyai.vercel.app/",
      github: "https://github.com/vedpawar2254/syftly.ai",
      tags: ["AI", "GenAI", "Product"],
      status: "Beta"
    },
    {
      id: "ano",
      name: "Ano",
      description: "AI annotation tool for enhanced productivity.",
      url: "https://anotate.vercel.app",
      github: "https://github.com/vedpawar2254/Ano",
      tags: ["AI", "Annotation", "Tool"],
      status: "Beta"
    }
  ],
  opensource: [
    {
      id: "ripplex",
      name: "RippleX",
      description: "Lightweight reactive state-management library for React with event bus and async state handling.",
      github: "https://github.com/DCODE-HQ/rippleX",
      tags: ["React", "State Management", "Library"],
      status: "Maintained"
    },
    {
      id: "nebula",
      name: "Nebula",
      description: "Backend system for student community platform. Actively maintained.",
      github: "https://github.com/SASTxNST/Nebula_Backed",
      tags: ["Backend", "API", "Community"],
      status: "Maintained"
    },
    {
      id: "vedact",
      name: "Vedact",
      description: "Custom React implementation built from first principles.",
      github: "https://github.com/vedpawar2254/vedact",
      tags: ["React", "Framework", "Learning"],
      status: "Experimental"
    },
    {
      id: "vedpiler",
      name: "Vedpiler",
      description: "Custom compiler implementation.",
      github: "https://github.com/vedpawar2254/vedpiler",
      tags: ["Compiler", "Low-level", "Learning"],
      status: "Experimental"
    }
  ],
  ai: [
    {
      id: "syftly",
      name: "Syftly.ai",
      description: "AI-powered application for intelligent workflows.",
      url: "https://syftlyai.vercel.app/",
      github: "https://github.com/vedpawar2254/syftly.ai",
      tags: ["AI", "GenAI", "Product"],
      status: "Beta"
    },
    {
      id: "ano",
      name: "Ano",
      description: "AI annotation tool for enhanced productivity.",
      url: "https://anotate.vercel.app",
      github: "https://github.com/vedpawar2254/Ano",
      tags: ["AI", "Annotation", "Tool"],
      status: "Beta"
    },
    {
      id: "text-to-video",
      name: "Text to Animated Video",
      description: "Convert text descriptions into animated videos using AI.",
      github: "https://github.com/vedpawar2254/text-to-animated-video",
      demo: "https://www.veed.io/view/cc4ed885-d8c1-4425-b29d-ef2e367c63bf",
      tags: ["AI", "Video", "GenAI"],
      status: "Demo"
    },
    {
      id: "ai-interviewer",
      name: "AI Interviewer",
      description: "End-to-end AI interviewing system with evaluation logic.",
      github: "https://github.com/vedpawar2254/AI_interviewer",
      tags: ["AI", "Interview", "Evaluation"],
      status: "Demo"
    },
    {
      id: "knowledge-bot",
      name: "Simple RAG System",
      description: "Retrieval-Augmented Generation system for knowledge management.",
      github: "https://github.com/vedpawar2254/knowledge_bot",
      tags: ["AI", "RAG", "NLP"],
      status: "Demo"
    }
  ],
  hackathon: [
    {
      id: "construct",
      name: "Construct",
      description: "Chrome Extension for AI context management. Helps manage and organize context for AI interactions.",
      github: "https://github.com/vedpawar2254/Construct-proj",
      image: "/Construct_demo.png",
      tags: ["Chrome Extension", "AI", "Context"],
      status: "Demo"
    },
    {
      id: "promptbase",
      name: "PromptBase",
      description: "Platform for sharing and discovering AI prompts.",
      url: "https://prompterbase.vercel.app/",
      github: "https://github.com/vedpawar2254/PromptBase",
      tags: ["AI", "Prompts", "Community"],
      status: "Demo"
    },
    {
      id: "capstone",
      name: "Capstone Review",
      description: "Platform for reviewing and managing capstone projects.",
      url: "https://capstone-review-nst.vercel.app/",
      github: "https://github.com/orgs/capston-review-nst-ru/repositories",
      tags: ["Education", "Review", "Platform"],
      status: "Production"
    }
  ],
  freelance: [
    {
      id: "vnv24",
      name: "VnV24",
      description: "Event website and management system.",
      github: "https://github.com/vedpawar2254/VnV24",
      image: "/vnv24_demo.png",
      tags: ["Website", "Event", "Frontend"],
      status: "Delivered"
    },
    {
      id: "vanaha",
      name: "Vanaha Products",
      description: "Production systems for an agro-forestry startup; currently serving ~15–20 daily users.",
      github: "https://github.com/vedpawar2254/vanaha-vibes",
      tags: ["Product", "Production", "Agriculture"],
      users: "~15-20 DAU",
      status: "Production"
    },
    {
      id: "Confidential",
      name: "Confidential",
      description: "Built Multiple Backend Systems from idea to architecture to production. And took ownership of all the products",
      tags: ["Product", "Production", "Architecture", "FSD", "Backend"],
      status: "Production"
    }
  ],
  misc: [
    {
      id: "DCODE platform v1",
      name: "DCODE platform v1",
      description: "Initial website for DCODE platform",
      url: "https://dcode-frontend.vercel.app/",
      github: "https://github.com/devclub-nstru/DCODE-frontend",
      tags: ["Website", "Open Source", "Production", "Frontend", "Backend"],
      status: "Production"
    },
    {}
  ]
};

export const contributions = [
  {
    name: "CVE Bin Tool",
    org: "Python Software Foundation (PSF)",
    description: "Security vulnerability scanner",
    url: "https://github.com/intel/cve-bin-tool"
  },
  {
    name: "Grauity",
    org: "Newton School",
    description: "Education platform infrastructure",
    url: "https://github.com/Newton-School/grauity"
  },
  {
    name: "Aeon",
    description: "Open source contribution",
    url: "#"
  },
  {
    name: "Kyverno",
    description: "Kubernetes policy management",
    url: "https://kyverno.io"
  }
];

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "SQL", "C++"],
  backend: ["FastAPI", "Django", "Node.js", "Express", "PostgreSQL", "Redis"],
  frontend: ["React", "Next.js", "Vite"],
  ai: ["Generative AI", "RAG Systems", "AI-integrated Backends", "LLM Integration"],
  devops: ["Git", "API Design", "System Architecture", "Open Source Workflows"],
  leadership: ["Technical Leadership", "Mentoring", "Project Execution", "Event Management"]
};

export const education = {
  degree: "Bachelor of Technology",
  field: "Computer Science & Artificial Intelligence",
  institution: "Newton School of Technology, Rishihood University",
  period: "2024 – 2028",
  year: "2nd Year"
};

// Easter Egg secrets
export const secrets = {
  konamiCode: "↑↑↓↓←→←→BA",
  searchCommands: ["/secret", "/hack", "/matrix", "/credits", "/stats"],
  hiddenMessages: [
    "You found me! 🎉",
    "Looking for easter eggs? You're in the right place.",
    "Built with React + Vite. Deployed with love.",
    "// TODO: Add more easter eggs",
    "console.log('Hello, curious developer!')"
  ]
};
