// src/components/Hero.jsx
import React from "react";
import { personalInfo } from "../data/resumeData";
import { Link as ScrollLink } from "react-scroll";
import { BiDownload } from "react-icons/bi";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-primary-bg pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Profile Picture */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-accent transform transition-transform duration-500 hover:scale-105">
            <img
              src={personalInfo.profilePic}
              alt="Viswaz Gummadi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:text-left max-w-xl">
            <p
              className="text-text-secondary text-lg md:text-xl mb-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Hello, I'm
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-merienda font-bold text-text-primary mb-3 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {personalInfo.shortName}
            </h1>
            <p
              className="text-xl md:text-2xl text-accent font-semibold mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              {personalInfo.title}
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-bg bg-accent hover:bg-accent-hover transition duration-300 transform hover:scale-105 shadow-lg"
              >
                <BiDownload className="mr-2 h-5 w-5" /> Download CV
              </a>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-flex items-center justify-center px-8 py-3 border border-accent text-base font-medium rounded-md text-accent bg-transparent hover:bg-accent hover:text-primary-bg transition duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Contact Info
              </ScrollLink>
            </div>

            {/* Social Icons */}
            <div
              className="flex justify-center md:justify-start space-x-6 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-text-secondary hover:text-accent transition duration-300 transform hover:scale-125"
                >
                  <social.icon size={30} />
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
