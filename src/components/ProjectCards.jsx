import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const ProjectCards = ({
  name,
  description,
  image,
  techStack,
  github,
  live,
}) => {
  return (
    <div className="card card-bordered w-[90%] lg:w-[70%] lg:h-96 bg-base-100 lg:flex-row shadow-xl my-5 mx-auto hover:scale-95 transition-all duration-300 ease-in">
      <figure className="w-full lg:w-1/2 h-64 lg:h-full overflow-hidden flex justify-center items-center p-4">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-cover rounded-xl transition-all duration-300 ease-in"
        />
      </figure>
      <div className="card-body justify-center items-center text-center w-full lg:w-1/2">
        <h2 className="card-title text-primary text-3xl mt-5">{name}</h2>
        <h3 className="md:w-4/5">{description}</h3>
        <h4 className="text-primary pb-4">{techStack.join(" , ")}</h4>
        <div className="card-actions">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-circle">
              <FaGithub />
            </button>
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-circle">
              <FaExternalLinkAlt />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCards.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  github: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
};

export default ProjectCards;

