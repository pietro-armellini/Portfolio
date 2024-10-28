import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import Project from "./Projects";
import Skill from "./Skill";

const Body = () => {
  return (
    <>
      <Hero />
      <Project />
      <Skill />
			<Experience />
			<Education />
      {/* <Contact /> */}	
    </>
  );
};

export default Body;
