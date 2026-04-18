import { Achievement } from '../models/achievement.model';
import { Education } from '../models/education.model';
import { ExperienceDetail } from '../models/experience-detail.model';
import { NavItem } from '../models/nav-item.model';
import { Profile } from '../models/profile.model';
import { Project } from '../models/project.model';
import { SkillCategory } from '../models/skill-category.model';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
];

export const PROFILE: Profile = {
  name: 'Deblena Das',
  title: 'Software Engineering and Digital Transformation Master’s Student',
  subtitle: 'Full-Stack Intern at Presage SAS',
  email: 'deblenad02@gmail.com',
  phone: '+33 7 82 80 89 21',
  location: 'Meudon, France',
  linkedinUrl: 'https://linkedin.com/in/deblena-das-82b58a364',
  githubUrl: 'https://github.com/deblenad02',
  imageUrl: 'images/deblena-profile.jpg',
};

export const ABOUT_TEXT: string =
  `I am currently pursuing a Master’s in Software Engineering and Digital Transformation at ESIGELEC and working as a Full-Stack Intern at Presage SAS in Paris. My work includes frontend development with Angular, backend development in C#, database-related changes, and AI-oriented workflows. I am especially interested in biomedical engineering, medical image analysis, and AI for healthcare, and I enjoy building software for meaningful real-world problems.`;

export const EXPERIENCE: ExperienceDetail = {
  role: 'Full-Stack Intern',
  company: 'Presage SAS',
  duration: '02/2026 - Present',
  location: 'Paris, France',
  shortSummary:
    'Working across frontend, backend, database updates, and an LLM-based patient call workflow.',
  responsibilities: [
    'Developing and modifying frontend features using Angular, including new UI sections and improvements to existing components.',
    'Contributing to backend development in C# by implementing services, endpoints, and business logic.',
    'Working on database-related changes, including schema updates and migrations to support new functionality.',
    'Contributing to an end-to-end LLM-based patient call workflow across multiple services.',
    'Working on backend logic, data flow, and Python-side integration for LLM-based interactions.',
  ],
  technologies: [
    'Angular',
    'TypeScript',
    'C#',
    '.NET',
    'Python',
    'SQL',
    'REST APIs',
  ],
  imageUrl: 'assets/images/llm-pipeline.png',
};

export const PROJECTS: Project[] = [
  {
    id: 'potato-leaf-disease-detection',
    title: 'Potato Leaf Disease Detection',
    subtitle: 'Deep learning project',
    description:
      'Developed a CNN-based deep learning model for potato leaf disease prediction.',
    tags: ['Python', 'Deep Learning', 'CNN'],
  },
  {
    id: 'car-insurance-claim-prediction',
    title: 'Car Insurance Claim Prediction',
    subtitle: 'Machine learning classification project',
    description:
      'Built a supervised learning model to classify insurance policies as claim or no-claim.',
    tags: ['Python', 'Machine Learning', 'Classification'],
  },
  {
    id: 'tictactoe-ai-streamlit-app',
    title: 'TicTacToe AI Streamlit App',
    subtitle: 'Interactive AI app',
    description:
      'Developed an interactive TicTacToe AI application with AI-based opponent behavior.',
    tags: ['Python', 'Streamlit', 'Ipywidgets', 'AI'],
    githubUrl: 'https://github.com/deblenad02/TicTacToe',
  },
  {
    id: 'study-pulse-android-app',
    title: 'Study Pulse Android App',
    subtitle: 'Android application',
    description:
      'Developed a user-friendly Android app for personalized habit assessment and feedback.',
    tags: ['Java', 'Kotlin', 'Android'],
    githubUrl: 'https://github.com/deblenad02/StudyPulseMobileApp',
  },
  {
    id: 'web-development-j2ee',
    title: 'Web Development using J2EE',
    subtitle: 'Full-stack web application',
    description:
      'Developed a web application using JSP, Servlets, MySQL, and Tomcat.',
    tags: ['J2EE', 'JSP', 'Servlets', 'MySQL'],
  },
  {
    id: 'game-zone',
    title: 'Game Zone',
    subtitle: 'Multiplayer gaming website',
    description:
      'Built a multiplayer gaming website with JavaScript-based game logic and ASP.NET backend support.',
    tags: ['HTML', 'CSS', 'JavaScript', 'ASP.NET'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'C#/.NET', 'JavaScript'],
  },
  {
    title: 'Frontend & Web',
    skills: ['Angular', 'HTML', 'CSS', 'ASP.NET', 'Flask'],
  },
  {
    title: 'Backend & APIs',
    skills: ['C#/.NET', 'Servlets', 'J2EE', 'API Development'],
  },
  {
    title: 'AI & ML',
    skills: ['Machine Learning', 'PyTorch'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'Oracle', 'PL/SQL'],
  },
  {
    title: 'Concepts & Tools',
    skills: ['UML', 'Git', 'XML', 'Data Structures'],
  },
  {
    title: 'Operating Systems',
    skills: ['Windows', 'Mac', 'Linux'],
  },
  {
    title: 'IDEs',
    skills: ['Visual Studio Code', 'Eclipse', 'PyCharm', 'IntelliJ'],
  },
];

export const EDUCATION_ITEMS: Education[] = [
  {
    degree: 'Master in Sciences & Technology',
    specialization: 'Software Engineering and Digital Transformation',
    institution: 'ESIGELEC',
    duration: '02/2025 - Present',
    location: 'Rouen, France',
    grade: '15.38/20',
  },
  {
    degree: 'B.Tech - Computer Science and Business Systems',
    institution: 'Meghnad Saha Institute of Technology (MSIT)',
    duration: '11/2020 - 06/2024',
    location: 'Kolkata, India',
    grade: '9.51/10',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'International Young Achiever Award',
    organization: 'ESIGELEC',
    year: '2025',
    icon: 'award',
  },
  {
    title: 'International Student Ambassador',
    organization: 'ESIGELEC',
    year: '2025',
    icon: 'public',
  },
];

export const LANGUAGES: string[] = [
  'English',
  'French',
  'Hindi',
  'Bengali',
];

export const INTERESTS: string[] = [
  'AI for Healthcare',
  'Web Development',
  'Medical Image Analysis',
  'Full-Stack Development',
];