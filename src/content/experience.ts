export type Role = {
  title: string;
  company: string;
  href?: string;
  location: string;
  start: string;
  end: string;
  stack: readonly string[];
  outcomes: readonly string[];
};

export const experience: readonly Role[] = [
  {
    title: "Lead AI Engineer",
    company: "24x7 ESI",
    location: "New York, NY",
    start: "Apr 2026",
    end: "Present",
    stack: ["Node.js", "TypeScript", "Python", "AWS", "ETL Pipelines", "PostgreSQL", "Agile"],
    outcomes: [
      "Lead end-to-end delivery of enterprise insurance solutions — translating client business requirements into technical specifications and coordinating execution across cross-functional and offshore teams.",
      "Designed and provisioned AWS cloud services and infrastructure powering production client applications; own configuration, reliability, and operational health.",
      "Built and maintain ETL pipelines for ingesting, transforming, and validating enterprise insurance data — ensuring data quality and consistency across distributed client systems.",
      "Developed backend services and full-stack applications from scratch and shipped them to production, owning the complete software development lifecycle.",
      "Primary technical point of contact for production servers and databases across client environments — monitoring performance and resolving operational issues.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Zimopia Technologies — Talisman Platform",
    location: "Chattanooga, TN (Remote)",
    start: "May 2025",
    end: "Apr 2026",
    stack: [
      "Node.js",
      "GraphQL",
      "TypeScript",
      "AWS Lambda",
      "AppSync",
      "MariaDB",
      "Neo4j",
      "PostgreSQL",
      "Redux",
      "IndexedDB",
    ],
    outcomes: [
      "Designed and implemented scalable backend services and distributed system workflows using Node.js, GraphQL, and AWS (Lambda, AppSync) — shipping 50+ production releases through CI/CD pipelines with automated regression testing.",
      "Engineered modular, maintainable components using OOP principles and TypeScript; reduced duplicated logic by 25% and improved long-term maintainability.",
      "Designed RESTful APIs and backend data pipelines integrating services with distributed databases (MariaDB, Neo4j, PostgreSQL); reduced system data-load errors by 30%.",
      "Led system-wide architectural improvements implementing Redux and IndexedDB for state and data persistence — reduced production defects by 81% and improved overall system reliability.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Grantaide",
    location: "San Francisco Bay Area (Remote)",
    start: "May 2024",
    end: "May 2025",
    stack: ["Python", "Node.js", "TypeScript", "AWS S3", "Amplify", "EC2", "Flask", "Firestore", "GPT-4"],
    outcomes: [
      "Built and deployed AI-integrated systems using Python, Node.js, and TypeScript on AWS (S3, Amplify, EC2) — integrating GPT-4 APIs into production workflows.",
      "Architected RESTful services with Flask and Firebase Firestore; mentored junior engineers through code reviews.",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Aiolos Cloud Solutions",
    location: "Mumbai, India",
    start: "Mar 2021",
    end: "Jul 2022",
    stack: ["React", "Node.js", "Redux", "MongoDB", "REST API"],
    outcomes: [
      "Built scalable full-stack systems using React, Node.js, Redux, and MongoDB; designed RESTful APIs and data models that lifted platform user engagement by 60%.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Boss Global",
    location: "Pune, India",
    start: "Jan 2020",
    end: "Feb 2021",
    stack: ["C", "React", "Electron", "AWS", "Firebase"],
    outcomes: [
      "Developed a cross-platform productivity tracking application in C, React, and Electron on AWS — building data parsing utilities and Firebase integrations.",
    ],
  },
] as const;
