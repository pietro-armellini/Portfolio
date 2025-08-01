import EducationCard from "./EducationCards";
import { educationData } from "../EducationData";

const Education = () => {
  return (
    <div id="education" className="my-20">
      <h1 className="text-center text-4xl text-primary font-semibold mb-10">
        Education
      </h1>
      <div className="flex justify-center items-center flex-col">
        {educationData.length === 0 ? (
          <p className="text-center text-gray-500">Under Construction</p>
        ) : (
          educationData.map((item) => (
            <EducationCard
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

export default Education;
