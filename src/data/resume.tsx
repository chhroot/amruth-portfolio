import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amruth Kiran",
  initials: "AK",
  url: "https://dillion.io",
  location: "Chennai, Tamil Nadu",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer, One Well Designed Button at a time. Mounted at /dev/null. Pine Trees are Cool",
  summary:
    "Designer, Developer and 💖 love to craft UI experiences for web and mobile apps 🚀. I make websites so responsive, they text back 🙀! I'm probably obsessing over microinteractions that most people will never notice ✨",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Figma",
    "Svelte",
    "Typescript",
    "Node.js",
    "TailwindCSS",
    "SASS",
    "Python",
    "AWS",
    "Java",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "amruthkiran57@gmail.com",
    tel: "+91 7397468065",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/chhroot",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kiran-amruth/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Playstation: {
        name: "Playstation",
        url: "https://psnprofiles.com/ArrowInTheeKnee",
        icon: Icons.playstation,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AmruthKiran3?t=Hy8F2Kze6tBbpxL97lRKVw&s=09",
        icon: Icons.x,

        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/917397468065",
        icon: Icons.whatsappBlack,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "32Mins",
      href: "https://32mins.com/",
      badges: [],
      location: "Chennai, Tamil Nadu",
      title: "User Experience Engineer",
      logoUrl: "/32mins.jpg",
      start: "November 2024",
      end: "Present",
      description:
        "As part of the IIT-incubated startup team, led the development of Rudram Dynamics' website using Sveltekit and Sanity CMS. Created a robust digital presence for this emerging tech venture, focusing on scalability, seamless content management, and exceptional user experience.",
    },
    {
      company: "Cookr",
      badges: [],
      href: "https://cookr.in/",
      location: "Coimbatore, Tamil Nadu",
      title: "Software Engineer",
      logoUrl: "/cookr.jpg",
      start: "February 2024",
      end: "November 2024",
      description:
        "Spearheaded the successful transition of Cookr’s native food delivery app to a highly responsive web version, augmenting user experience and accessibility, expanding the customer base to 25%. Developed Features for Cookr’s Customer and Internal Android Applications. Led collaboration between design and product teams to integrate UI elements.",
    },
    {
      company: "Kaaylabs",
      href: "",
      badges: [],
      location: "Chennai, Tamil Nadu",
      title: "Frontend Developer Intern",
      logoUrl: "/kaaylabs.jpg",
      start: "April 2022",
      end: "July 2022",
      description:
        "Led the development of intuitive dashboards to enhance functionality within Kaaylabs’ internal employee web app",
    },
  ],
  education: [
    {
      school: "Government College of Technology, Coimbatore",
      href: "",
      degree: "B.Tech Information Technology",
      logoUrl: "/gct.jpg",
      start: "2021",
      end: "2024",
    },
    {
      school: "PSG College of Technology, Coimbatore",
      href: "https://psgtech.edu.in/",
      degree: "Diploma in Computer Science and Engineering",
      logoUrl: "/psg.jpg",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Place Order - Cookr",
      href: "https://www.homefood.cookr.in/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Web Version of Cookr's native food delivery platform. Built the complete ordering system from menu browsing to doorstep delivery.",
      technologies: [
        "React.js",
        "Typescript",
        "Netcore",
        "Google Analytics",
        "TailwindCSS",
        "Sendbird",
        "RazorPay",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.homefood.cookr.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cookr-screenshot.png",
      video: "",
    },
    {
      title: "Cinesthetic - Personal Project",
      href: "https://cinesthetic.netlify.app/",
      dates: "May 2023 - June 2024",
      active: true,
      description:
        "User-friendly movie information application designed to help movie enthusiasts explore details about their favorite movies.",
      technologies: [
        "React.js",
        "Typescript",
        "Redux",
        "MUI",
        "TailwindCSS",
        "Axios",
      ],
      links: [
        {
          type: "Website",
          href: "https://cinesthetic.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/chhroot/cinesthetic",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cinesthetic-screenshot.png",
      video: "",
    },
    {
      title: "SawYou - Personal Project",
      href: "https://sawyou.netlify.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A full-stack image sharing and social media platform which enables creating and saving of images, GIFs and videos, in the form of pinboards.",
      technologies: ["React.js", "Typescript", "Sanity", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://sawyou.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/chhroot/saw-you-sanity",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sawyou-screenshot.png",
      video: "",
    },
    {
      title: "Startup Singam - Noukha",
      href: "https://startupsingam.com/",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "Engineered the complete web platform for Startup Singam, Tamil Nadu's pioneering startup reality show broadcast on Vijay TV.",
      technologies: [
        "Next.js",
        "Typescript",
        "Zoho CRM",
        "Github Actions",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://startupsingam.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/singam-screenshot.png",
      video: "",
    },
  ],
} as const;
