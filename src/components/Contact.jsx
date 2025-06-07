// src/components/Contact.jsx
import React from "react";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "../data/resumeData";

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-secondary-bg">
      <div className="text-center mb-12">
        <p className="text-text-secondary text-lg">Get in Touch</p>
        <h2 className="text-4xl font-merienda font-bold text-text-primary mt-2">
          Contact Me
        </h2>
      </div>

      <div className="max-w-3xl mx-auto bg-card-bg p-8 rounded-lg shadow-xl">
        <p className="text-text-secondary text-center mb-8">
          Feel free to reach out! I'm always open to discussing new projects,
          creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {personalInfo.contact.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-secondary-bg rounded-lg shadow-md hover:bg-primary-bg hover:shadow-lg transition-all duration-300 group"
            >
              <item.icon className="h-8 w-8 text-accent mr-4 transition-transform duration-300 group-hover:scale-110" />
              <div>
                <p className="text-text-primary font-medium">{item.name}</p>
                <p className="text-text-secondary text-sm group-hover:text-accent transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
