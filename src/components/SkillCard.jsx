// src/components/SkillCard.jsx
import React from "react";

const SkillCard = ({ icon, name, level }) => {
  return (
    <article className="flex items-center bg-card-bg p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border border-transparent hover:border-border-color">
      <img src={icon} alt={`${name} icon`} className="h-8 w-8 mr-4" />
      <div>
        <h3 className="text-md font-semibold text-text-primary">{name}</h3>
        <p className="text-sm text-text-secondary">{level}</p>{" "}
        {/* Changed from accent */}
      </div>
    </article>
  );
};
export default SkillCard;
