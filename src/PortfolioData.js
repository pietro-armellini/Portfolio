import yumrun from "./assets/YumRun.png";
import netflix from "./assets/Netflix.jpg";
import focustube from "./assets/FocusTube.png";
import softwaremanager from "./assets/softwaremanager.png";
const header = {
  homepage: "",
  title: "Ankit Singh",
};
const about = {
  name: "Pietro Armellini",
  role: ["FrontEnd Developer", "BackEnd Developer", "Full Stack Developer", "XR Developer"],
  description:
    "Computer Science student with a minor in Business & Economics, focused on full-stack development to create practical solutions that solve problems and simplify life for people and companies. Also passionate about Extended Reality (XR), with a keen interest in its potential in gaming and industrial sectors.",
  resume:
    "https://drive.google.com/file/d/1_0lbtfy9mhsvnRQWOxN5hDEWCVZeBLxr/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/pietro-armellini/",
    github: "https://github.com/pietro-armellini",
  },
};
const projects = [
   {
    name: "Software Manager",
    description:
      "This project is a Software Manager designed to streamline the management of a system focused on products and their associated firmware. It offers a comprehensive set of features such as version tracking; firmware deployment; product configuration management; and status reporting.",
    stack: ["NextJS", "NodeJS", "MUI", "MySQL", "Express", "Prisma"],
    image: softwaremanager,
    sourceCode: "https://github.com/pietro-armellini/SoftwareManager",
    livePreview: "http://pietroarmellini.com:3000/",
  },
  /* {
    name: "NetFlix GPT",
    description:
      "Netflix GPT is a single-page web application that allows users to explore movies from the TMDB API, while offering AI-powered content generation through GPT. The app leverages React for the frontend, Redux for state management, and Firebase for authentication.",
    stack: ["React", "Redux", "Tailwind CSS"],
    image: netflix,
    sourceCode: "https://github.com/sankitdev/YumRun",
    livePreview: "https://netflixgpt-b8752.web.app/",
  },
  {	
    name: "FocusTube",
    description:
      "A YouTube clone focused on providing a clean and minimal video browsing experience. Built with React and Redux, featuring responsive design.",
    stack: ["React", "Redux", "Tailwind CSS"],
    image: focustube,
    sourceCode: "https://github.com/sankitdev/focus-tube",
    livePreview: "",
  }, */
]; 
const contact = {
  email: "pietro.armellini.personale@gmail.com",
};

export { header, about, projects, contact };
