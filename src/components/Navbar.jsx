// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { personalInfo, navLinks } from "../data/resumeData";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger change after scrolling 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinkItem = ({ to, children, isMobile = false }) => (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={-80} // Adjusted offset slightly due to navbar height
      className={`cursor-pointer font-medium transition-colors duration-300
                  ${
                    isMobile
                      ? "block py-3 px-4 text-lg hover:bg-black/20 rounded-md"
                      : "hover:text-accent hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] py-2"
                  } 
                  text-text-primary relative group`}
      activeClass={isMobile ? "bg-accent text-primary-bg" : "text-accent"}
      onClick={() => isMobile && setIsOpen(false)}
    >
      {children}
      {!isMobile && (
        <span
          className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
                         ${
                           ScrollLink.prototype.state &&
                           ScrollLink.prototype.state.link === to &&
                           ScrollLink.prototype.state.active
                             ? "scale-x-100"
                             : ""
                         }`}
        ></span>
        // Note: The active underline for react-scroll can be tricky.
        // A simpler way for active state is just the text color change from activeClass.
        // The span above is an attempt for a visual underline on hover/active.
      )}
    </ScrollLink>
  );

  // Determine the background class for the navbar
  // When scrolled or mobile menu is open: semi-transparent with blur
  // When at top and menu closed: fully transparent
  const navBackgroundClass =
    isScrolled || isOpen
      ? "bg-black/65 backdrop-blur-md shadow-lg" // Semi-transparent black with blur
      : "bg-transparent";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${navBackgroundClass}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {" "}
          {/* h-20 for navbar height */}
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            offset={-100}
            className="flex items-center cursor-pointer"
          >
            <img
              src={personalInfo.logo}
              alt="Logo"
              className="h-10 w-10 mr-3"
            />
            <div className="text-xl font-merienda font-bold text-text-primary">
              {personalInfo.name.split(" ")[0]} <br className="sm:hidden" />{" "}
              {personalInfo.name.split(" ")[1]}
            </div>
          </ScrollLink>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <NavLinkItem key={link.id} to={link.id}>
                {link.title}
              </NavLinkItem>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-primary hover:text-accent focus:outline-none p-2 rounded-md" // Added padding and rounded for better touch
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - also needs semi-transparent background with blur */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md absolute w-full top-full left-0 shadow-xl">
          {/* 
            The 'top-full' might need to be 'top-[calc(100%-1px)]' or similar if there's a tiny gap
            or if you want the blur to seamlessly transition from the navbar itself.
            For now, 'top-full' is usually fine.
          */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLinkItem key={link.id} to={link.id} isMobile={true}>
                {link.title}
              </NavLinkItem>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
