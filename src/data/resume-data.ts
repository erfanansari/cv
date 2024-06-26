import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  LinktreeIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Erfan Ansari",
  initials: "EA",
  location: null, // "Iran"
  locationLink: null, // "https://www.google.com/maps/place/Iran",
  about:
    "Problem-solving Frontend Engineer with a passion for crafting elegant solutions.",
  summary:
    "I'm a Frontend Engineer who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces while being clean and efficient behind the scenes. I enjoy constantly learning and improving my skills with the many technologies that power the web.",
  avatarUrl: "https://avatars.githubusercontent.com/u/64015416?v=4",
  contact: {
    email: "dev.erfanansari@gmail.com",
    tel: null, // "+48530213401"
    social: [
      {
        name: "GitHub",
        url: "https://github.com/erfanansari",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/erfanansari",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/erfanexp",
        icon: XIcon,
      },
      {
        name: "Linktree",
        url: "https://linktr.ee/erfanansari",
        icon: LinktreeIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Shahrekord",
      degree: "Bachelor of Science in Computer Engineering",
      start: "2020",
      end: "Present",
    },
  ],
  work: [
    {
      company: "PRAGMIDEA LTD",
      href: null, // "http://pragmidea.com"
      badges: ["Remote", "Full-time"],
      title: "Front-end Developer",
      start: "Nov 2022",
      end: "Present",
      description:
        "Worked as a Front-end Developer on various projects. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Squad Global",
      href: null,
      badges: ["Remote", "Full-time"],
      title: "Frontend Developer",
      start: "Aug 2021",
      end: "Nov 2022",
      description:
        "At Squad, I worked on the community os team, which is a platform that helps communities grow by analyzing their users’ data and helping small and medium businesses know their customers and provide better services to them. Technologies: React, TypeScript, GraphQL, Node.js, Docker",
    },
    {
      company: "Avid Arvand",
      href: null,
      badges: ["Remote", "Full-time"],
      title: "Frontend Developer",
      start: "Jun 2019",
      end: "Jun 2021",
      description:
        "At Avid Arvand, I worked on the eduction website web application.",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Go",
    "HTML",
    "CSS",
    "GraphQL",
    "Jest",
    "Cypress",
    "Git",
    "Docker",
    "Bash",
  ],
  projects: [
    {
      title: "CLI Portfolio",
      techStack: ["TypeScript", "React", "Vite", "Tailwind CSS"],
      description: "My personal portfolio as a CLI tool",
      href: "https://cli.erfanansari.com",
    },
    {
      title: "Personal Blog",
      techStack: ["Gatsby", "React", "MD"],
      description: "My personal blog where I write about tech",
      href: "https://blog.erfanansari.com",
    },
  ],
} as const;
