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
    // {
    //   institution: "Shahid Beheshti University",
    //   href: "https://sbu.ac.ir/",
    //   degree: "Master's degree, Computer Software Engineering",
    //   start: "2026",
    //   end: "2028",
    // },
    {
      institution: "University of Shahrekord",
      href: "https://sku.ac.ir/",
      degree: "Bachelor's degree, Computer Software Engineering",
      start: "2020",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Pragmateam",
      href: null, // "http://pragmidea.com"
      badges: ["Remote", "Full-time"],
      title: "Frontend Developer",
      start: "Nov 2022",
      end: "Present",
      description: [
        "Migrated two large-scale projects from SWR to React Query, resulting in improved performance and a more seamless user experience.",
        "Implemented end-to-end testing, ensuring a higher level of quality control and stability.",
        "Enhanced the user interface through the implementation of animations, improving the overall user experience.",
        "Developed comprehensive documentation and training materials, ensuring the sustainability and maintainability",
        "Led one/two of and fixed incoming tickets, reported to tech lead and marketing team",
        "Led a team of 3 members of developers to convert 10 wordpress websites to Nextjs and Directs Headless CMS",
        "Migrated five medium projects form pages dir to app dir",
        "Add and maintain a decent amount of unit tests and code coverage over 85% to ensure the quality of the code",
        "Increased the lighthouse score through various methods and optimizations to 90+",
        "Dockerize and set up the CI/CD pipeline to ensure the quality of the code and the deployment process",
        "Set up the localization to make them multilingual",
        "Set up the analytics to get the insights and improve the user experience",
        "Set up Sentry to monitor the errors and fix them proactively",
      ],
    },
    {
      company: "Squad",
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
  ],
  honors: [
    {
      title: "WorldSkills Competition",
      description:
        "Awarded Medallion of Excellence in the Web Technologies field",
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
    "CI/CD",
    "Agile Methodologies",
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
