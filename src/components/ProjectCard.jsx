// src/components/ProjectCard.jsx
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({ title, image, githubUrl, description }) => {
  return (
    <div className="bg-card-bg rounded-lg shadow-xl overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-merienda font-semibold text-text-primary mb-2">
          {title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 h-16 overflow-y-auto">
          {description}
        </p>{" "}
        {/* Fixed height for description */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-accent text-accent font-medium rounded-md hover:bg-accent hover:text-primary-bg transition duration-300"
        >
          <BiLinkExternal className="mr-2" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
