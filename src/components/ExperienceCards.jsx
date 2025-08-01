import PropTypes from "prop-types";

const ExperienceCard = ({
  title,
  institution,
  timeframe,
  description,
  logo,
  link,
}) => {
  return (
    <div className="card card-bordered w-[90%] lg:w-[70%] bg-base-100 shadow-sm my-3 mx-auto p-4 flex-row items-center space-x-4">
      <figure className="w-24 h-24 flex-shrink-0 flex justify-center items-center">
        {logo ? (
          <img
            src={logo}
            alt={`${institution} logo`}
            className="object-contain w-full h-full rounded-lg"
          />
        ) : (
          <div className="w-20 h-20 bg-gray-200 rounded-lg flex justify-center items-center text-gray-400 text-sm">
            No Logo
          </div>
        )}
      </figure>
      <div className="flex-1 text-left">
        <div className="flex flex-wrap items-baseline justify-between">
          <h2 className="text-primary text-2xl font-semibold">{title}</h2>
          <h4 className="text-secondary text-sm leading-snug">{timeframe}</h4>

        </div>
        {link ? (
          <h3 className="font-medium">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-primary"
            >
              {institution}
            </a>
          </h3>
        ) : (
          <h3 className="font-medium">{institution}</h3>
        )}
       <p className="mt-1 leading-snug">{description}</p>

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