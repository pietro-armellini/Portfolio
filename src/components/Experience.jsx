import ExperienceCard from "./ExperienceCards";
import { experienceData } from "../ExperienceData";

const Experience = () => {
  return (
    <div id="experience" className="my-20">
      <h1 className="text-center text-5xl text-primary font-semibold mt-20 mb-8">
        Experience
      </h1>
      <div className="w-full flex flex-col items-center">
        {experienceData.length === 0 ? (
          <p className="text-center text-gray-500">Under Construction</p>
        ) : (
          experienceData.map((item) => (
            <ExperienceCard
              key={item.title + item.timeframe}
              title={item.title}
              institution={item.institution}
              timeframe={item.timeframe}
              description={item.description}
              logo={item.logo}
              link={item.link}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Experience;
