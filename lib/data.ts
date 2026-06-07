export const profile = {
  name: 'Harmanjit Singh',
  role: 'AI/ML Engineer · Building Agentic & RAG Systems',
  tagline: 'B.E. CSE (AI/ML) at Chandigarh University · IEEE ICACT 2025 author',
  email: 'singhjitharman13@gmail.com',
  phone: '+91-8284952204',
  github: 'https://github.com/Harman-1344',
  linkedin: 'https://www.linkedin.com/in/harmanjit-singh-2a9979256',
  bio: "I'm an AI/ML engineer passionate about building end-to-end intelligent systems — from data preprocessing and vector embeddings to LLM-powered applications. Currently seeking AI/ML internship opportunities to apply my expertise in practical environments.",
  stats: [
    { label: 'Projects', value: '4' },
    { label: 'Publications', value: '1' },
    { label: 'Certifications', value: '7' },
    { label: 'CGPA', value: '6.9' },
  ],
};

export const skills = {
  Languages: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  'Frameworks & Libraries': ['LangChain', 'FAISS', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'Flask'],
  'ML & AI': ['Large Language Models (LLMs)', 'RAG', 'Regression', 'Classification'],
  'NLP Techniques': ['Vector Embeddings', 'Semantic Search', 'Cosine Similarity', 'Text Preprocessing'],
  'Core Concepts': ['Data Structures', 'OOP', 'REST APIs', 'Model Deployment'],
} as const;

export type SkillCategory = keyof typeof skills;

export const projects = [
  {
    id: 'rag-assistant',
    title: 'Enterprise RAG Assistant',
    tagline: 'Eliminating LLM hallucinations with grounded retrieval',
    description:
      'An advanced Retrieval-Augmented Generation system that performs semantic queries on enterprise PDF datasets. Every answer is strictly grounded in source material, completely eliminating AI hallucinations.',
    tech: ['Python', 'LangChain', 'FAISS', 'Streamlit', 'HuggingFace'],
    github: 'https://github.com/Harman-1344/Enterprise-RAG-Assistant',
    live: null,
    featured: true,
  },
  {
    id: 'agent-squad',
    title: 'Enterprise Agent Squad',
    tagline: 'Multi-agent AI for autonomous market research',
    description:
      'A multi-agent AI system built with CrewAI and powered by Llama-3.3 via Groq. Automates end-to-end market research, strategic analysis, and executive report generation through a collaborative system of autonomous agents.',
    tech: ['Python', 'CrewAI', 'Llama-3.3', 'Groq', 'Streamlit', 'Wikipedia API'],
    github: 'https://github.com/Harman-1344/Enterprise-Agent-Squad',
    live: null,
    featured: true,
  },
  {
    id: 'scalable-nlp',
    title: 'SCALABLE-NLP',
    tagline: 'CUDA-accelerated NLP framework · IEEE ICACT 2025',
    description:
      'A fast, scalable architecture optimizing computational efficiency of large-scale NLP models. Implements CUDA-accelerated pipelines with C++ and Python bindings. Under publication in IEEE ICACT 2025.',
    tech: ['C++', 'CUDA', 'Python', 'CMake', 'Shell'],
    github: 'https://github.com/Harman-1344/SCALABLE-NLP',
    live: null,
    featured: true,
  },
  {
    id: 'data-analysis',
    title: 'Data-Analysis-Projects',
    tagline: 'Hands-on data science with real datasets',
    description:
      'A collection of hands-on data analysis projects exploring real-world datasets using statistical methods, visualization, and machine learning techniques in Python and Jupyter.',
    tech: ['Python', 'Jupyter', 'Pandas', 'NumPy', 'Scikit-learn'],
    github: 'https://github.com/Harman-1344/Data-Analysis-Projects',
    live: null,
    featured: false,
  },
] as const;

export const research = {
  title: 'Scalable NLP Systems: Bridging Efficiency with Advanced Computational Techniques',
  venue: '2025 IEEE International Conference on Advanced Computing Technologies (ICACT)',
  status: 'Under publication',
  abstract:
    'Proposes a fast, scalable, and flexible architecture to optimize computational efficiency of large-scale NLP models. Validated through CUDA-accelerated pipelines and benchmarked against transformer baselines.',
};

export const education = [
  {
    school: 'Chandigarh University',
    degree: 'B.E. CSE (Artificial Intelligence and Machine Learning)',
    period: '2022 – 2026',
    grade: 'CGPA 6.9/10',
  },
  {
    school: 'Triple M Public School, Hoshiarpur',
    degree: 'Punjab School Education Board (PSEB)',
    period: '2022',
    grade: '89.4%',
  },
  {
    school: 'DAV Sr. Sec. School, Urmar',
    degree: '10th Grade',
    period: '2020',
    grade: '95.0%',
  },
] as const;

export const certifications = [
  { name: 'AWS Academy Graduate — Cloud Foundations', issuer: 'Amazon Web Services' },
  { name: 'Python for Data Science, AI and Development', issuer: 'IBM' },
  { name: 'Machine Learning in Python', issuer: 'IBM' },
  { name: 'SQL: A Practical Introduction for Querying Databases', issuer: 'IBM' },
  { name: 'Artificial Intelligence Analyst', issuer: 'IBM' },
  { name: 'DotNet Full Stack', issuer: 'Wipro' },
  { name: 'Java Full Stack Development', issuer: 'Board Infinity / Coursera' },
] as const;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;
