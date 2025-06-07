// src/components/Footer.jsx
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { navLinks, personalInfo } from "../data/resumeData";

const Footer = () => {
  return (
    <footer className="bg-primary-bg border-t border-secondary-bg py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <ul className="flex flex-wrap justify-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <ScrollLink
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-text-secondary hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          {personalInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-text-secondary hover:text-accent transition duration-300 transform hover:scale-125"
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Built with React & Tailwind CSS. Designed with{" "}
          <span className="font-merienda text-accent">love</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
