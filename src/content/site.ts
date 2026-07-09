export const site = {
  name: "Vaishnavi Patil",
  role: "Full-Stack Engineer",
  location: "Chicago, IL",
  email: "navipatil24@gmail.com",
  phone: "+1 (312) 912-3283",
  resume: "/resume.pdf",
  socials: {
    github: "https://github.com/VaishnaviVPatil",
    linkedin: "https://www.linkedin.com/in/vaishnavipatil2411/",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Playground", href: "#playground" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type Site = typeof site;
