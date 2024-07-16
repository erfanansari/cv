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
        title: "GitHub",
        url: "https://github.com/erfanansari",
        icon: GitHubIcon,
      },
      {
        title: "LinkedIn",
        url: "https://linkedin.com/in/erfanansari",
        icon: LinkedInIcon,
      },
      {
        title: "X",
        url: "https://x.com/erfanexp",
        icon: XIcon,
      },
      {
        title: "Linktree",
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
      title: "Frontend Developer",
      start: "Nov 2022",
      end: "Present",
      description: [
        "Migrating two large-scale projects from SWR to React Query, resulting in improved performance and a more seamless user experience.",
        "Upgrading four static WordPress websites to Directus and Strapi CMS and NextJS, providing a more flexible and scalable solution for content management.",
        "Implementing end-to-end testing, ensuring a higher level of quality control and stability.",
        "Enhancing the user interface through the implementation of animations on the Adrian Kreter website, improving the overall user experience.",
        "Developing comprehensive documentation and training materials, ensuring the sustainability and maintainability of the projects.",
        "Led one/two of the projects and fixed incoming texts, reported to tech lead and marketing team",
        "Led a team of 3 members of developers to convert 6 crypto wordpress landings website to Nextjs and Directs Headless CMS",
        "Migrated five medium projects form pages dir to app dir",
      ],
    },
    {
      company: "Squad Global",
      href: null,
      badges: ["Remote", "Full-time"],
      title: "Frontend Developer",
      start: "Aug 2021",
      end: "Nov 2022",
      description: [
        "Established a proactive approach to preventing API-breaking change defects on the Front-end through the automation of type generation from OpenAPI documentation.",
        "Established a fully-containerized development and production environment utilizing Docker technology.",
        "Implemented a robust Git-based development workflow, incorporating best practices such as commit linting and adherence to GitHub flow.",
        "Expanded payment options by integrating the PayPal payment method into the application.",
        "Improved user experience by implementing lazy loading strategies, resulting in a 45% reduction in Largest Contentful Paint (LCP) time.",
      ],
    },
    {
      company: "Avid Arvand",
      href: null,
      badges: ["Remote", "Full-time"],
      title: "Frontend Developer",
      start: "Jun 2019",
      end: "Jun 2021",
      description: [
        "Acquired a comprehensive understanding of React and Next framework, contributing to the overall development process.",
        "Streamlined remote data handling by migrating from Redux/Saga to React Query, resulting in improved performance and efficiency.",
        "Established robust security measures for Authentication and Authorization through the implementation of HTTP-only cookies, and effectively mitigated potential XSS and CSRF attacks.",
        "Enhanced data visualization capabilities through the implementation of various chart variants, providing a comprehensive representation of data insights.",
      ],
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
  // projects: [
  //   {
  //     title: "CLI Portfolio",
  //     techStack: ["TypeScript", "React", "Vite", "Tailwind CSS"],
  //     description: "My personal portfolio as a CLI tool",
  //     href: "https://cli.erfanansari.com",
  //   },
  //   {
  //     title: "Personal Blog",
  //     techStack: ["Gatsby", "React", "MD"],
  //     description: "My personal blog where I write about tech",
  //     href: "https://blog.erfanansari.com",
  //   },
  // ],
} as const;
