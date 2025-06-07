// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { personalInfo, navLinks } from "../data/resumeData";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      offset={-70} // Adjust offset based on your navbar height
      className={`cursor-pointer font-medium transition-colors duration-300
                  ${
                    isMobile
                      ? "block py-3 px-4 text-lg hover:bg-secondary-bg"
                      : "hover:text-accent"
                  } 
                  text-text-primary`}
      activeClass={isMobile ? "bg-accent text-white" : "text-accent"}
      onClick={() => isMobile && setIsOpen(false)}
    >
      {children}
    </ScrollLink>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
                    ${
                      isScrolled || isOpen
                        ? "bg-secondary-bg shadow-lg"
                        : "bg-transparent"
                    }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
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

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <NavLinkItem key={link.id} to={link.id}>
                {link.title}
              </NavLinkItem>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-primary hover:text-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary-bg absolute w-full top-full left-0 shadow-xl">
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
