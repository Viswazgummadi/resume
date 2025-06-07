// src/components/Experience.jsx
import React from "react";
import SectionWrapper from "./SectionWrapper";
import SkillCard from "./SkillCard"; // Assuming SkillCard's background is already adjusted or will be
import { experienceData } from "../data/resumeData";

const Experience = () => {
  return (
    // REMOVE any opaque background class like 'bg-secondary-bg' from SectionWrapper here.
    // If you want a very subtle differentiation for the whole section area,
    // you could do bg-black/10 or bg-secondary-bg/10 for 10% opacity.
    // Or just leave it fully transparent.
    <SectionWrapper id="experience" animationType="slide-in-right">
      {" "}
      {/* Example animation */}
      <div className="text-center mb-12">
        <p className="text-text-secondary text-lg">Explore My</p>
        <h2 className="text-4xl font-merienda font-bold text-text-primary mt-2">
          <span
            className="animate-text-clip"
            style={{ animationDelay: "0.2s" }}
          >
            My{" "}
          </span>
          <span
            className="animate-text-clip"
            style={{ animationDelay: "0.4s" }}
          >
            Experience
          </span>
        </h2>
      </div>
      {/*
        The grid itself doesn't need a background. The SkillCards inside will have their own.
        If you had a wrapper around the two columns (Courses, Libraries) with a background,
        that would also need to be made transparent or semi-transparent.
        Based on your previous code, the direct children of SectionWrapper are the title div
        and the grid div, neither of which should have an opaque background by default.
      */}
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center md:text-left">
            {/* Previously text-accent, now text-text-primary for better contrast if bg is transparent */}
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

        <div>
          <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center md:text-left">
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
