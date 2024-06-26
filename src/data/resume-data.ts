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
  personalWebsiteUrl: "https://jarocki.me",
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
      company: "Film.io",
      link: "https://film.io",
      badges: ["Remote"],
      title: "Software Architect",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Leading the development of the Film.io platform. Technologies: React, TypeScript, Node.js",
    },
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led a squad, improved code delivery process, and initiated migration from Emotion to Tailwind CSS. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, and AAA. Built a live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Led the Android team and developed apps for major Polish companies like LOT, Polskie Radio, Agora, and PolskaPress",
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Developed and tested software for LTE base stations",
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
