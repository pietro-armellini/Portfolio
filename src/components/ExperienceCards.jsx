import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";

const ExperienceCard = ({
  title,
  institution,
  timeframe,
  description,
  logo,
  link,
}) => {
  return (
    <div className="relative bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300 ease-in-out w-full sm:w-[90%] lg:w-[70%] min-w-[300px] mx-auto my-2 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 font-sans text-base sm:text-xl max-w-[1400px]">

      {/* Logo */}
      <figure className="w-28 h-28 flex-shrink-0 flex justify-center items-center rounded-2xl overflow-hidden bg-gray-50 mx-auto sm:mx-0">
        {logo ? (
          <img
            src={logo}
            alt={`${institution} logo`}
            className="object-contain w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex justify-center items-center text-gray-400 text-sm">
            No Logo
          </div>
        )}
      </figure>

      {/* Content */}
      <div className="flex-1 min-w-0 text-center sm:text-left">
        {/* Title + Timeframe */}
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-2 w-full text-center sm:text-left">
          <h2 className="text-primary text-xl sm:text-2xl font-semibold break-words">
            {title}
          </h2>
          <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-base sm:text-lg">
            {timeframe}
          </span>
        </div>

        {/* Institution */}
        <div className="mt-2 flex items-center gap-3 flex-wrap justify-center sm:justify-start">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium inline-flex items-center gap-2 hover:underline text-base sm:text-xl"
            >
              {institution}
              <FaExternalLinkAlt className="text-sm" />
            </a>
          ) : (
            <span className="text-gray-800 font-medium text-base sm:text-xl">
              {institution}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  timeframe: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string,
  link: PropTypes.string,
};

export default ExperienceCard;
