
import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import Project from "./Projects";
import Skill from "./Skill";
import Contact from "./Contact";

const Body = () => {
  return (
    <>
      <Hero />
      <Project />
			<Experience />
			<Education />
      <Skill />
      <Contact />	
    </>
  );
};

export default Body;
