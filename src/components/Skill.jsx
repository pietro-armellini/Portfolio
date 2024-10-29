import { useState } from "react";
import { FrontEnd, BackEnd, Technology, ExtendedReality, DataManagment } from "../Images";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("FrontEnd");

  const handleToggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="text-center my-20" id="skills">
      <h1 className="text-4xl font-bold text-primary">Skills</h1>
      <div
        role="tablist"
        className="tabs tabs-boxed mt-10 w-full max-w-4xl mx-auto flex flex-wrap justify-center" // Added max-w-4xl
      >
        {["FrontEnd", "BackEnd", "Data", "ExtendedReality", "Technologies"].map((tab) => (
          <a
            key={tab}
            role="tab"
            className={`tab ${activeTab === tab ? "tab-active" : ""} m-1`}
            onClick={() => handleToggle(tab)}
          >
            {tab === "ExtendedReality" ? "XR" : tab}
          </a>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center mt-10 max-w-4xl mx-auto"> {/* Added max-w-4xl */}
        {activeTab === "FrontEnd" && FrontEnd.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className="hover:scale-95 btn object-contain w-24 h-24"
          />
        ))}
        {activeTab === "BackEnd" && BackEnd.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className="hover:scale-95 btn object-contain w-24 h-24"
          />
        ))}
        {activeTab === "Data" && DataManagment.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className="hover:scale-95 btn object-contain w-24 h-24"
          />
        ))}
        {activeTab === "ExtendedReality" && ExtendedReality.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className="hover:scale-95 btn object-contain w-24 h-24"
          />
        ))}
        {activeTab === "Technologies" && Technology.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className="hover:scale-95 btn object-contain w-24 h-24"
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
