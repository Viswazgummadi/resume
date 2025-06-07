// src/components/Experience.jsx
import React from "react";
import SectionWrapper from "./SectionWrapper";
import SkillCard from "./SkillCard";
import { experienceData } from "../data/resumeData";

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-secondary-bg">
      <div className="text-center mb-12">
        <p className="text-text-secondary text-lg">Explore My</p>
        <h2 className="text-4xl font-merienda font-bold text-text-primary mt-2">
          Experience
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Courses */}
        <div>
          <h3 className="text-2xl font-semibold text-accent mb-6 text-center md:text-left">
            Courses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experienceData.courses.map((course, index) => (
              <SkillCard
                key={index}
                icon={course.icon}
                name={course.name}
                level={course.level}
              />
            ))}
          </div>
        </div>

        {/* Libraries & Tools */}
        <div>
          <h3 className="text-2xl font-semibold text-accent mb-6 text-center md:text-left">
            Libraries & Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experienceData.libraries.map((lib, index) => (
              <SkillCard
                key={index}
                icon={lib.icon}
                name={lib.name}
                level={lib.level}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
