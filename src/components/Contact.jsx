// src/components/Contact.jsx
import React from "react";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "../data/resumeData";

const Contact = () => {
  return (
    // Ensure SectionWrapper itself doesn't have an opaque bg via className prop from App.jsx.
    // Or if you want a very subtle full-section tint: className="bg-black/10" for example.
    <SectionWrapper id="contact" animationType="fade-in-up">
      {" "}
      {/* Example animation */}
      <div className="text-center mb-12">
        <p className="text-text-secondary text-lg">Get in Touch</p>
        <h2 className="text-4xl font-merienda font-bold text-text-primary mt-2">
          <span
            className="animate-text-clip"
            style={{ animationDelay: "0.2s" }}
          >
            Contact{" "}
          </span>
          <span
            className="animate-text-clip"
            style={{ animationDelay: "0.4s" }}
          >
            Me
          </span>
        </h2>
      </div>
      {/* Main contact info card - make this semi-transparent */}
      {/* From: bg-card-bg */}
      {/* To: bg-card-bg/80 or similar */}
      <div
        className="max-w-3xl mx-auto bg-card-bg/25 p-8 rounded-lg shadow-xl
                      border border-border-color/50 backdrop-blur-sm"
      >
        <p className="text-text-secondary text-center mb-8 leading-relaxed">
          Feel free to reach out! I'm always open to discussing new projects,
          creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {personalInfo.contact.map((item, index) => (
            // Individual contact item cards - make these semi-transparent
            // From: bg-secondary-bg
            // To: bg-secondary-bg/70 or bg-card-bg/60 (choose one consistent with other cards or slightly different)
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-secondary-bg/70 rounded-lg shadow-md
                         border border-border-color/30 backdrop-blur-sm
                         hover:bg-secondary-bg/20 hover:shadow-lg hover:border-accent/50
                         transition-all duration-300 group transform hover:scale-105"
            >
              <item.icon
                className="h-8 w-8 text-accent mr-4 
                                  transition-transform duration-300 group-hover:scale-110 
                                  group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]"
              />
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
