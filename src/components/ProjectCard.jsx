// src/components/ProjectCard.jsx
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({ title, image, githubUrl, description }) => {
  return (
    <div
      className="bg-card-bg/50 rounded-lg shadow-xl overflow-hidden group 
                    border border-border-color 
                    transition-all duration-300 transform 
                    hover:scale-105 hover:shadow-card-hover hover:border-accent/70"
    >
      <div className="relative h-56 overflow-hidden">
        {" "}
        {/* Ensure image doesn't overflow on scale */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover 
                                               transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-merienda font-semibold text-text-primary mb-2">
          {title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 h-16 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
          {description}
        </p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 
                     border border-accent text-accent font-medium rounded-md 
                     hover:bg-accent hover:text-primary-bg 
                     transition-all duration-300 transform hover:scale-105 
                     focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50" // Added focus styles
        >
          <BiLinkExternal className="mr-2" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
