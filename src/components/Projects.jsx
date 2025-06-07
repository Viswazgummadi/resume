// src/components/Projects.jsx
import React from "react";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/resumeData";

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <p className="text-text-secondary text-lg">Browse My Recent</p>
        <h2 className="text-4xl font-merienda font-bold text-text-primary mt-2">
          Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            githubUrl={project.githubUrl}
            description={project.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
