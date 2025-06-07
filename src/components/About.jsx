// src/components/About.jsx
import React from "react";
import SectionWrapper from "./SectionWrapper";
import { aboutData } from "../data/resumeData";
import { BiSolidGraduation } from "react-icons/bi";

const iconComponents = {
  BiSolidGraduation: BiSolidGraduation,
};

const About = () => {
  return (
    // Ensure SectionWrapper itself doesn't have an opaque bg via className prop passed to it from App.jsx
    // If you added bg-secondary-bg to SectionWrapper for specific sections, remove it for About.
    // For example, if App.jsx had <About className="bg-secondary-bg" />, remove that class from there.
    // By default, SectionWrapper has no background.
    <SectionWrapper id="about" animationType="slide-in-left">
      {" "}
      {/* Example animation */}
      <div className="text-center mb-12">
        <p className="text-text-secondary text-lg">Get To Know More</p>
        <h2 className="text-4xl font-merienda font-bold text-text-primary mt-2">
          <span
            className="animate-text-clip"
            style={{ animationDelay: "0.2s" }}
          >
            About{" "}
          </span>
          <span
            className="animate-text-clip"
            style={{ animationDelay: "0.4s" }}
          >
            Me
          </span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        <div className="flex-shrink-0 lg:w-1/3">
          <img
            src={aboutData.aboutPic}
            alt="About Viswaz"
            className="rounded-lg shadow-xl w-full max-w-sm mx-auto lg:max-w-none object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="flex-grow lg:w-2/3">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {aboutData.cards.map((card, index) => {
              const IconComponent = card.iconName
                ? iconComponents[card.iconName]
                : null;
              return (
                // Make card backgrounds semi-transparent or more transparent
                // From: bg-card-bg
                // To: bg-card-bg/70 (70% opacity) or bg-black/30 (30% opaque black)
                // Choose a value that looks good with your stars.
                <div
                  key={index}
                  className="bg-card-bg/80 p-6 rounded-lg shadow-lg text-center
                             border border-border-color/50 backdrop-blur-sm
                             transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-card-bg/90"
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
          {/* Make this text container semi-transparent too */}
          {/* From: bg-secondary-bg */}
          {/* To: bg-secondary-bg/70 or bg-black/20 */}
          <div className="bg-secondary-bg/70 p-6 rounded-lg shadow-md backdrop-blur-sm">
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
