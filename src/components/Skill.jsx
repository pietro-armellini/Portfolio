import { useState } from "react";
import {
  FrontEnd,
  BackEnd,
  Technology,
  ExtendedReality,
  Languages,
} from "../Images";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("FrontEnd");

  const handleToggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="skills" className="my-16">
      <div className="sm:w-[90%] lg:w-[70%] mx-auto my-2 p-6 font-sans text-base sm:text-xl max-w-[1400px]">
        {/* Section Title */}
        <h1 className="text-center text-5xl text-primary font-semibold mt-20 mb-8">
          Skills
        </h1>

        {/* Tabs */}
        <div
          role="tablist"
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {[
            "FrontEnd",
            "BackEnd",
            "Languages",
            "ExtendedReality",
            "Technologies",
          ].map((tab) => (
            <button
              key={tab}
              role="tab"
              onClick={() => handleToggle(tab)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border font-semibold transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-primary text-white border-primary"
                  : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
              }`}
            >
              {tab === "ExtendedReality" ? "XR" : tab}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,max-content))] justify-center gap-4 place-items-center w-full">

          {(activeTab === "FrontEnd"
            ? FrontEnd
            : activeTab === "BackEnd"
            ? BackEnd
            : activeTab === "Languages"
            ? Languages
            : activeTab === "ExtendedReality"
            ? ExtendedReality
            : Technology
          ).map(([img, name], index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl p-3"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow-sm">
                <img
                  src={img}
                  alt={name}
                  className="object-contain w-12 h-12"
                />
              </div>
              <span className="mt-3 text-sm text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
