import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ProjectCards = ({
  name,
  description,
  image,
  techStack,
  github,
  live,
  cropImage = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  // Open/close animation lifecycle
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // ensure mounted before starting animation
      requestAnimationFrame(() => setAnimateIn(true));
    }
  }, [isOpen]);

  // Close modal with animation
  const closeModal = () => {
    setAnimateIn(false);
    // wait for animation to finish before unmounting
    setTimeout(() => {
      setMounted(false);
      setIsOpen(false);
    }, 500);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
  <div className="relative bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300 ease-in-out w-full sm:w-[90%] lg:w-[70%] min-w-[300px] mx-auto my-5 p-6 font-sans text-base sm:text-xl max-w-[1400px]">
      {/* Title */}
      <h1 className="text-center text-4xl text-primary font-semibold mb-8">
        {name}
      </h1>

  {/* Content Grid */}
  <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-10 items-start">
  {/* Image */}
  <figure className="relative w-full h-72 xl:h-full overflow-hidden rounded-2xl group">
          <img
            src={image}
            alt={name}
            onClick={() => setIsOpen(true)}
            // when cropImage is true we want the image to fill the container and be cropped
            style={cropImage ? undefined : { maxHeight: 300 }}
            className={`relative z-10 cursor-pointer transform group-hover:scale-105 transition-transform duration-500 ease-in-out ${
              cropImage
                ? "w-full h-full object-cover object-top"
                : "w-auto max-w-full h-auto object-contain mx-auto"
            }`}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
        </figure>

        {/* Text Content */}
        <div className="flex flex-col justify-center w-full mt-6 xl:mt-0">
          <p className="text-gray-700 leading-relaxed text-justify">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 py-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-2xl text-sm sm:text-base"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} GitHub`}
            >
              <button className="px-4 py-2 rounded-2xl border border-gray-400 text-gray-600 font-semibold hover:bg-gray-100 hover:border-gray-500 hover:text-gray-700 transition-colors duration-200 shadow-sm flex items-center justify-center gap-1 text-base sm:text-lg bg-transparent">
                <FaGithub className="text-gray-600" />
                <span>Source Code</span>
              </button>
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} Live preview`}
            >
              <button className="px-4 py-2 rounded-2xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-1 text-base sm:text-lg">
                <FaExternalLinkAlt className="" />
                <span>Live Preview</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 bg-black/90 flex items-center justify-center transition-opacity duration-500 ${
              animateIn ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeModal}
          >
            <div
              className={`relative w-full h-full transform transition-transform duration-500 ${
                animateIn ? "scale-100" : "scale-95"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={image}
                alt={`${name} preview`}
                // prevent modal image from overflowing the viewport vertically
                style={{ maxHeight: "90vh" }}
                className="w-full h-auto object-contain bg-transparent"
              />
              <button
                aria-label="Close preview"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow transition-all duration-200"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
          </div>,
          document.body
        )}
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
  cropImage: PropTypes.bool,
};

export default ProjectCards;
