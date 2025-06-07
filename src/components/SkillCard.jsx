// src/components/SkillCard.jsx
import React from "react";

const SkillCard = ({ icon, name, level }) => {
  return (
    // From: bg-card-bg
    // To: bg-card-bg/70 (or similar, to match About cards)
    <article
      className="flex items-center bg-card-bg/60 p-4 rounded-lg
                       border border-border-color/50 backdrop-blur-sm
                       transition-all duration-300 transform
                       hover:scale-105 hover:shadow-card-hover hover:border-accent/50 hover:bg-card-bg/90"
    >
      <img
        src={icon}
        alt={`${name} icon`}
        className="h-8 w-8 mr-4 filter grayscale hover:grayscale-0 transition-all duration-300"
      />
      <div>
        <h3 className="text-md font-semibold text-text-primary">{name}</h3>
        <p className="text-sm text-text-secondary">{level}</p>
      </div>
    </article>
  );
};
export default SkillCard;
