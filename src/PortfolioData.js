import towerdefensear from "./assets/towerdefensear.png";
import carpentrymanager from "./assets/carpentrymanager.png";
import softwaremanager from "./assets/softwaremanager.png";
const header = {
  homepage: "",
  title: "Pietro Armellini",
};
const about = {
  name: "Pietro Armellini",
  role: ["FrontEnd Developer", "BackEnd Developer", "Full Stack Developer", "XR Developer"],
  description:
    "Computer Science graduate with a minor in Business & Economics, passionate about XR and full-stack development. I’m driven by a love for immersive, impactful technology with real-world applications and a strong focus on productivity.",
  resume:
    "https://drive.google.com/file/d/1pT9pWsXvFTfIcP-pTy7rX7Qihl6-kY-5/view?usp=sharing",
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
    stack: ["NextJS", "NodeJS", "MUI", "MySQL", "Express", "Prisma", "Zod"],
    image: softwaremanager,
    sourceCode: "https://github.com/pietro-armellini/SoftwareManager",
    livePreview: "http://pietroarmellini.com:3000/",
  },
  {
    name: "Tower Defense AR",
    description:
      "This project is an AR tower defense game developed with Unity and Google ARCore. It enables gameplay within real-world environments using a mobile device's camera. Features include tower placement, enemy pathing, wave progression, and spatial interaction.",
    stack: ["ARCore", "Unity3D", "C#"],
    image: towerdefensear,
    sourceCode: "https://github.com/pietro-armellini/TowerDefense-AR",
  },
	{
    name: "Carpentry Manager",
    description:
      "This project is a Carpentry Management System developed using Node.js, Express.js and MySQL. It was created as part of the Software Engineering course at the University of Trento.",
     stack: ["Vue.js", "NodeJS", "MySQL", "Express"],
    image: carpentrymanager,
    sourceCode: "https://github.com/pietro-armellini/CarpentryManager",
    livePreview: "http://pietroarmellini.com:8081/",
  },
	/*
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
