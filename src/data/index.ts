import shareMeImg from "../../public/shareme.png";
import portfolioImg from "../../public/portfolio.png";
import leetcodeStatsImg from "../../public/leetcode-stats.png";
import nodejsImg from "../../public/nodejs.png";
import cppImg from "../../public/c++.png";
import ethereumImg from "../../public/ethereum.svg";
import propxImg from "../../public/propx.png";
import frescoGuardImg from "../../public/frescoGuard.png";
import studynotion from "../../public/studynoyion.png"
import chess from "../../public/chess.png"
import house from "../../public/house.png"

export const projectList = [
  {
    id: 4,
    title: "ShareMe",
    category: "FullStack",
    tag: "top",
    image: shareMeImg,
    description:
      "This web application allows users to shares photographs and showcase their photography skills and download them. ",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
      "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
    ],
    url: "https://shareme-frontend-kappa.vercel.app/",
    github: "https://github.com/tripathismt/shareme_frontend",
    features: [""],
    detailedDescription:
      "This project implements GitOps methodology for managing infrastructure, specifically for a web application. It utilizes Argo CD for continuous delivery and integrates with Kubernetes for container orchestration.",
  },
  {
    id: 1,
    tag: "top",
    title: "StudyNotion",
    category: "FullStack",
    image: studynotion,
    description:
      "Built a comprehensive EdTech platform using ReactJS, ExpressJS, Axios, and MongoDB, achieving a 35% increase in data fetching speed through optimized REST API server development. Integrated key features like responsive design, real-time progress tracking, discussion forums, quizzes, and assessments, enhancing user engagement and providing an interactive learning experience.Developed a modular architecture to support scalable growth, enabling seamless integration of additional educational tools and resources, and maintaining platform stability with over 100+ checking active users.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
      "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
    ],
    url: "https://studynotionfinal.vercel.app/",
    github: "https://github.com/tripathismt/studynotionfinal",
    features: [],
  },
  {
    id: 2,
    title: "Chess-Engine",
    category: "FullStack",
    image: chess,
    description:
      "Developed a high-performance chess engine using Flask and python-chess, achieving a 50% reduction in move calculation time through optimized algorithms and backend processing. Implemented AI-driven strategies, including Minimax with Alpha-Beta pruning, which reduced computational overhead by 60% and enhanced decision-making for complex game scenarios. Created a dynamic, responsive interface in Flask that supports real-time game analytics, providing players with insights and suggestions based on historical game data to enhance user engagement",
    tech: [
    ],
    url: "",
    github: "https://github.com/tripathismt/chessEngine",
    features: [],
  },
  {
    id: 3,
    title: "house_prediction_ML_Project",
    category: "ML",
    image: house,
    description:
      "The project incorporates a Flask web application, providing a user-friendly interface for predicting house prices. Users can input details such as the number of bedrooms, bathrooms, house size, and zip code to receive a price prediction.The machine learning model is implemented using Ridge regression, leveraging the scikit-learn library. The trained model is saved for later use.",
    tech: [
    ],
    url: "",
    github: "https://github.com/tripathismt/house_prediction_ML_Project",
    features: [
    ],
  },
];

export const skills = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "NextJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    name: "C++",
  },
  {
    url: "https://education.oracle.com/file/general/p-80-java.png",
    name: "Java",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    url: "https://extensions.dev/assets/img/firebase.svg",
    name: "Firebase",
  },
];

export const socials = [
  {
    id: 1,
    name: "Instagram",
    username: "mahi_the_myth_",
    url: "https://www.instagram.com/mahi_the_myth_/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
  },
  {
    id: 2,
    name: "Github",
    username: "tripathismt",
    url: "https://github.com/tripathismt?tab=repositories",
    image:
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
  },
  {
    id: 3,
    name: "LinkedIn",
    username: "Shubham Mani Tripathi",
    url: "https://www.linkedin.com/in/shubham-mani-tripathi-a04419201/",
    image:
      "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0xMF8xLnBuZw.png",
  },
];

export const WorkExpcontents = [
  {
    title: "SDE Intern - HP Enterprise",
    description: [
      "Architected a client-server system for a 5G Traffic Classifier project using Node.js and HTTP-2, optimizing data handling and communication efficiency for over 500+ data points",
      "Enhanced data analysis and visualization capabilities by integrating MongoDB and Grafana, delivering real-time insights and visualizations for 100+ metrics",
      "Automated data processing workflows using Python scripting and machine learning algorithms, achieving a 28% increase in efficiency and reducing data processing time by 40%."
    ],
    date: "jan 2024 - july 2024",
  },
  {
    title: "Backend Developer Intern - Fluxlabs",
    description: [
      "Designed and maintained Fluxlabs.in's product suite using Node.js, Express, PostgreSQL, and TypeScript to support scalable, high-performance web applications",
      "Achieved a 40% improvement in querying time by restructuring APIs across various microservices, including the end-to-end development of a dedicated shipping microservice",
      "Improved code quality by 40% and reduced bugs by 25% through active participation in bi-weekly code reviews and collaboration with cross-functional teams."
    ],
    date: "may 2024 - july 2024",
  },
  {
    title: "SDE Intern - Xingoda",
    description: [
      "Developed a comprehensive admin application with React, Tailwind CSS, and Material Tailwind, featuring phone OTP authentication using Firebase Authentication for secure access.",
      "Built and optimized RESTful APIs with Firebase Functions, utilizing Node-Cache for enhanced performance and pagination with infinite scrolling.",
      "Implemented Firebase Firestore for efficient data management, enabling admins to control user/vendor profiles, manage enquiries and reports, and implement role-based access control for Superadmin, Admin-1, and Admin-2 roles.",
    ],
    date: "march 2024 - June 2024",
  },
  {
    title: "FullStack developer Intern - G Z Technology Private Limited",
    description: [
      "Streamlined the billing process, improving accuracy by 25% and enhancing tracking and productivity by 40%, optimizing the supply chain, and reducing costs by 10%",
      "Led the integration of ReactJS, MantisUI, and Axios to accelerate data fetching by 33%, resulting in a 28% increase in conversion rates",
      "Boosted operational efficiency by 30% through the development of robust technical solutions that supported business scalability.",
    ],
    date: "march 2024 - June 2024",
  }
];

export  const commandsAnswers = {
  whoami: "Shubham Mani Tripathi",
  about: "Yet another developer from India with a passion for writing code and creating web applications that solve real-life challenges",
  education: "(B.Tech.) - CSE at IIIT, Kottayam (2021-2025)",
  email: "shubham.amnitripathi20012gmail.com",
  socials: "LinkedIn: https://www.linkedin.com/in/shubham-mani-tripathi-a04419201/\nGitHub: https://github.com/tripathismt?tab=repositories",
  skills: "Front-end: React.js, Next.js, TailwindCSS\nBack-end: Node.js, Express.js, Flask\nDatabases: MySQL, MongoDB,PostgreSQL Firestore\nDevOps & Deployments: Vercel, Git/GitHub,",
  experience: "SDE Intern - HP Enterprise (Jan 2024 - July 2024)",
  help: "Available commands: whoami, about, education, email, socials, skills, experience"
};
