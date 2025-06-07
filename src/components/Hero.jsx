// src/components/Hero.jsx
import React from "react";
import { personalInfo } from "../data/resumeData";
import { Link as ScrollLink } from "react-scroll";
import { BiDownload } from "react-icons/bi";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-20"
    >
      {" "}
      {/* Adjusted padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
          {/* Profile Picture */}
          <div
            className="relative group animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div
              className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-2 border-accent 
                            transform transition-all duration-500 group-hover:scale-105"
            >
              <img
                src={personalInfo.profilePic}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 rounded-full bg-accent opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500 -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="max-w-2xl">
            {" "}
            {/* Increased max-width slightly */}
            <p
              className="text-text-secondary text-lg md:text-xl mb-2 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Hello, I'm
            </p>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-merienda font-bold text-text-primary mb-3 
                           animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              {personalInfo.shortName}
            </h1>
            <p
              className="text-xl md:text-2xl text-text-primary font-semibold mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              {personalInfo.title}
            </p>
            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <a
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 
                           border-2 border-accent text-accent 
                           font-medium rounded-md transition-all duration-300 
                           transform hover:scale-105 hover:bg-transparent hover:text-accent 
                           shadow-sm hover:shadow-glow-sm shadow-accent" // Glow on hover
              >
                <BiDownload className="mr-2 h-5 w-5" /> Download CV
              </a>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-flex items-center justify-center px-8 py-3 
                           border-2 border-accent text-accent 
                           font-medium rounded-md transition-all duration-300 
                           transform hover:scale-105 hover:bg-transparent hover:text-accent 
                           shadow-sm hover:shadow-glow-sm shadow-accent cursor-pointer" // Glow on hover
              >
                Contact Info
              </ScrollLink>
            </div>
            {/* Social Icons */}
            <div
              className="flex justify-center space-x-6 animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]" // Drop shadow for glow
                >
                  <social.icon size={32} /> {/* Slightly larger icons */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
