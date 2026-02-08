export const personalInfo = {
  name: 'Soumyakanta Bera',
  location: 'Florence, Italy',
  focusLocation: 'Milan',
  availability: 'Available for transfer',
  phone: '+39 347 924 9860',
  email: 'bera.soumyakanta@yahoo.com',
  linkedin: 'linkedin.com/in/soumyakantabera/',
  linkedinUrl: 'https://www.linkedin.com/in/soumyakantabera/',
  headline: 'MSc student in Finance & Risk Management — Corporate Finance / FP&A / M&A — Data & ML',
  objective: 'Internship / Junior Analyst in Finance, FP&A or Corporate Finance in Milan/Italy/Europe',
  about: 'MSc Finance & Risk Management student with hands-on experience in M&A, corporate finance, and data analytics. Passionate about leveraging financial modeling, data science, and machine learning to drive strategic decision-making. Seeking internship or junior analyst roles in Finance, FP&A, or Corporate Finance in Milan and across Italy/Europe.',
};

export const experience = [
  {
    id: 1,
    role: 'M&A Intern',
    company: 'Società Agricola Valdonica SRL',
    period: 'Oct 2024 – Dec 2024',
    location: 'Italy',
    responsibilities: [
      'Target screening & market mapping; competitor benchmarking supporting acquisition thesis',
      'Management reporting: KPIs, snapshots, investment materials for decision-making',
      'Due diligence support: data collection, document preparation, tracker management (Excel/PowerPoint)',
      'Advanced Excel (PivotTables, INDEX/MATCH, Power Query basics) for analysis & visuals',
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: 'M.Sc. Finance & Risk Management',
    institution: 'University of Florence',
    period: '2023 – ongoing',
    location: 'Florence, Italy',
    description: 'Specializing in corporate finance, financial modeling, and risk management',
  },
  {
    id: 2,
    degree: 'B.B.A. Business Administration',
    institution: 'Kingston School of Management & Science',
    period: '2019 – 2022',
    location: 'India',
    gpa: '8.87/10',
    description: 'Major in Business Administration with focus on finance and analytics',
  },
];

export const certifications = [
  {
    id: 1,
    name: 'Machine Learning',
    issuer: 'DeepLearning.AI',
    icon: 'Brain',
  },
  {
    id: 2,
    name: 'Mathematics for Machine Learning & Data Science',
    issuer: 'DeepLearning.AI',
    icon: 'Calculator',
  },
  {
    id: 3,
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    icon: 'BarChart3',
  },
  {
    id: 4,
    name: 'IBM Data Science Professional Certificate',
    issuer: 'IBM',
    icon: 'Database',
  },
  {
    id: 5,
    name: 'Fundamentals of Digital Marketing',
    issuer: 'Google Digital Garage',
    icon: 'TrendingUp',
  },
  {
    id: 6,
    name: 'Diploma in IT & Applications',
    issuer: 'Youth Computer Training Centre',
    icon: 'Monitor',
  },
];

export const skillCategories = [
  {
    category: 'Financial Analysis & Models',
    skills: [
      '3-statement model',
      'Index & cash flow analysis',
      'Sensitivity/scenario analysis',
      'DCF',
      'Trading comps',
    ],
  },
  {
    category: 'Corporate Finance',
    skills: [
      'Research',
      'Valuation',
      'Pitch/investment decks',
      'M&A support',
    ],
  },
  {
    category: 'FP&A/EPM',
    skills: [
      'Driver-based planning',
      'Variance analysis',
      'KPI dashboards',
      'Management reporting',
      'Board-ready slides',
    ],
  },
  {
    category: 'Machine Learning & Quant',
    skills: [
      'Regression',
      'Time-series (ARIMA)',
      'Clustering',
      'Classification',
      'Evaluation metrics',
      'Feature engineering',
      'PCA',
      'Forecasting',
      'Anomaly detection',
      'NLP basics',
    ],
  },
  {
    category: 'Tools',
    skills: [
      'Excel (Advanced)',
      'Power BI (DAX/Measures)',
      'Python (pandas/NumPy/sklearn/statsmodels/matplotlib)',
      'R (tidyverse/ggplot2/dplyr)',
      'MATLAB',
      'SQL',
      'Git',
      'PowerPoint',
    ],
  },
  {
    category: 'Domain',
    skills: [
      'IFRS basics',
      'CSRD/ESRS (ESG)',
      'GDPR',
    ],
  },
  {
    category: 'Languages',
    skills: [
      'English (Fluent)',
      'Italian (Intermediate)',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'FP&A KPI Dashboard',
    description: 'Interactive dashboard for financial planning and analysis with driver-based planning, variance analysis, and real-time KPI tracking.',
    tools: ['Power BI', 'DAX', 'Excel', 'Power Query'],
    outcomes: [
      'Automated reporting (60% time reduction)',
      'Drill-down analysis',
      'Variance alerts',
    ],
    category: 'Power BI',
    link: '#',
  },
  {
    id: 2,
    title: 'Valuation Toolkit',
    description: 'Financial modeling toolkit for DCF valuation and comparable company analysis with automated financial statement extraction and metrics calculation.',
    tools: ['Python', 'pandas', 'NumPy', 'matplotlib', 'yfinance'],
    outcomes: [
      'Modular DCF engine',
      'Trading comps analysis',
      'Sensitivity tables',
    ],
    category: 'Python',
    link: '#',
  },
  {
    id: 3,
    title: 'Time-Series Revenue Forecasting',
    description: 'Quarterly revenue prediction with seasonality and anomaly detection using ARIMA and regression models.',
    tools: ['Python', 'statsmodels', 'sklearn', 'pandas', 'matplotlib'],
    outcomes: [
      '94% forecast accuracy',
      'Seasonality identification',
      'Anomaly detection',
    ],
    category: 'ARIMA/Regression',
    link: '#',
  },
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
