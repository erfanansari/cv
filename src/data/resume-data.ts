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
    "Problem-solving Software Engineer with a passion for crafting elegant solutions.",
  summary:
    "I'm a Software Engineer who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces while being clean and efficient behind the scenes. I enjoy constantly learning and improving my skills with the many technologies that power the web.",
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
      end: "2024",
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
        "Triaged and resolved incoming tickets, reporting progress to tech lead and marketing team",
        "Led a team of 3 developers to convert 10 WordPress websites to Next.js and Directus Headless CMS",
        "Migrated five medium projects from pages dir to app dir",
        "Added and maintained a decent amount of unit tests and code coverage over 85% to ensure the quality of the code",
        "Increased the lighthouse score through various methods and optimizations to 90+",
        "Dockerized and set up the CI/CD pipeline to ensure the quality of the code and the deployment process",
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
      start: "Dec 2021",
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
      href: "https://skill.irantvto.ir/uploads/91/2023/Mar/07/%D9%88%D8%A8%20%D8%A8%D8%AF%D9%88%D9%86%20%D9%86%D9%85%D8%B1%D9%87.pdf",
      // https://skill.irantvto.ir/20result
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
