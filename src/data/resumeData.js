// src/data/resumeData.js
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoWhatsapp,
} from "react-icons/bi";

export const personalInfo = {
  name: "Viswaz Gummadi",
  shortName: "Viswaz G",
  title: "IITDH, CSE (22-26)",
  logo: import.meta.env.BASE_URL + "/logo.png",
  profilePic: import.meta.env.BASE_URL + "/profile-pic.jpg",
  cv: import.meta.env.BASE_URL + "/resume-example.pdf",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/viswaz-gummadi-4ba739258/",
      icon: BiLogoLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/Viswazgummadi",
      icon: BiLogoGithub,
    }, // Assuming this is your GitHub
  ],
  contact: [
    {
      name: "Email",
      url: "mailto:viswazgummadi@gmail.com",
      text: "viswazgummadi@gmail.com",
      icon: BiLogoGmail,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/viswaz-gummadi-4ba739258/",
      text: "Viswaz Gummadi",
      icon: BiLogoLinkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/i_am_viswaz/",
      text: "@i_am_viswaz",
      icon: BiLogoInstagram,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/919381779606?text=Ping%20me%20here%20:)",
      text: "+91 9381779606",
      icon: BiLogoWhatsapp,
    },
  ],
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const aboutData = {
  aboutPic: import.meta.env.BASE_URL + "/about-pic.png",
  description:
    "I qualified for the Indian National Mathematical Olympiad (INMO) with a rank of 26 in Andhra Pradesh in 2022, and I consecutively qualified for the Regional Mathematical Olympiad (RMO) from 2019 to 2022. Additionally, I secured 4th place in the Summer Of Innovation (Hack the Bit) organized by the Coding Club at IIT Dharwad in 2023.",
  cards: [
    {
      icon: import.meta.env.BASE_URL + "/work.png",
      title: "Work",
      text: "--- <br /> ------",
    }, // You can use HTML in text
    {
      iconName: "BiSolidGraduation",
      title: "Education",
      text: "B.Tech - Computer Science and Engineering at IIT Dharwad<br />Intermediate at Narayana Junior College",
    },
  ],
};

export const experienceData = {
  courses: [
    {
      name: "Artificial Intelligence",
      level: "Experienced",
      icon: import.meta.env.BASE_URL + "/cert.png",
    },
    {
      name: "DSA",
      level: "Experienced",
      icon: import.meta.env.BASE_URL + "/cert.png",
    },
    {
      name: "Cyber Security",
      level: "Basic",
      icon: import.meta.env.BASE_URL + "/cert.png",
    },
    {
      name: "Cloud Computing",
      level: "Basic",
      icon: import.meta.env.BASE_URL + "/cert.png",
    },
    {
      name: "Web Dev",
      level: "Intermediate",
      icon: import.meta.env.BASE_URL + "/cert.png",
    },
    {
      name: "Reinforcement Learning",
      level: "Basic",
      icon: import.meta.env.BASE_URL + "/cert.png",
    },
  ],
  libraries: [
    {
      name: "Transformers",
      level: "Intermediate",
      icon: import.meta.env.BASE_URL + "/cert.png",
    },
    {
      name: "Scikit-learn",
      level: "Intermediate",
      icon: import.meta.env.BASE_URL + "/cert.png",
    },
    {
      name: "C, C++, Python",
      level: "Intermediate",
      icon: import.meta.env.BASE_URL + "/cert.png",
    },
    {
      name: "Git, BASH",
      level: "Intermediate",
      icon: import.meta.env.BASE_URL + "/cert.png",
    },
  ],
};

export const projectsData = [
  {
    title: "KOKO",
    image: import.meta.env.BASE_URL + "/mis.jpg",
    githubUrl: "https://github.com/Viswazgummadi/Project_K",
    description: "A brief description about KOKO project.", // Add descriptions
  },
  {
    title: "Fashion AI",
    image: import.meta.env.BASE_URL + "/dress.png",
    githubUrl: "https://github.com/Viswazgummadi/Fashion-Suggestor",
    description: "An AI that suggests fashion based on inputs.",
  },
  {
    title: "Movie AI",
    image: import.meta.env.BASE_URL + "/Netflix-Logo.png",
    githubUrl: "https://github.com/lakshmannarendra/Movie-Recommendation",
    description: "Movie recommendation system using AI.",
  },
];
