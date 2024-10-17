import { FaGithub, FaLinkedin } from "react-icons/fa";
import { about } from "../PortfolioData";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const { name, role, description, resume, social, photo } = about; // Add photo to about object

  return (
    <div className="hero min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)]">
      <div className="hero-content text-center flex-col justify-center items-center">
        {/* Center the photo */}
        <div className="mb-6 flex justify-center">
          <img
            src={photo} // photo URL from the about object
            alt="Profile"
            className="rounded-full border-4 border-primary shadow-lg w-50 h-50 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover"
          />
        </div>

        {/* Text section */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold py-2">
          Hi, I am <span className="text-primary">{name}</span>{""}
          
        </h1>
        <h2 className="text-2xl sm:text-3xl pt-6 font-semibold">
          <Typewriter
            options={{
              strings: role,
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="py-6 md:w-4/5 mx-auto sm:text-xl">{description}</p>
        <div className="flex justify-center items-center">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary px-5"
          >
            Resume
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline mx-2 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};


export default Hero;
