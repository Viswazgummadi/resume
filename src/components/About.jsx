// src/components/About.jsx
import React from "react";
import SectionWrapper from "./SectionWrapper";
import { aboutData } from "../data/resumeData";
import { BiSolidGraduation } from "react-icons/bi"; // Import specific icon

const iconComponents = {
  // Map icon names to components
  BiSolidGraduation: BiSolidGraduation,
};

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-12">
        <p className="text-text-secondary text-lg">Get To Know More</p>
        <h2 className="text-4xl font-merienda font-bold text-text-primary mt-2">
          About Me
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        {/* About Picture */}
        <div className="flex-shrink-0 lg:w-1/3">
          <img
            src={aboutData.aboutPic}
            alt="About Viswaz"
            className="rounded-lg shadow-xl w-full max-w-sm mx-auto lg:max-w-none object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* About Details */}
        <div className="flex-grow lg:w-2/3">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {aboutData.cards.map((card, index) => {
              const IconComponent = card.iconName
                ? iconComponents[card.iconName]
                : null;
              return (
                <div
                  key={index}
                  className="bg-card-bg p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  {IconComponent ? (
                    <IconComponent className="text-accent h-12 w-12 mx-auto mb-4" />
                  ) : (
                    <img
                      src={card.icon}
                      alt={`${card.title} icon`}
                      className="h-12 w-12 mx-auto mb-4"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {card.title}
                  </h3>
                  <p
                    className="text-text-secondary text-sm"
                    dangerouslySetInnerHTML={{ __html: card.text }}
                  ></p>
                </div>
              );
            })}
          </div>
          <div className="text-container bg-secondary-bg p-6 rounded-lg shadow-md">
            <p className="text-text-secondary leading-relaxed text-justify">
              {aboutData.description}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
