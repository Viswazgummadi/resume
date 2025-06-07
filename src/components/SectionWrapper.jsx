// src/components/SectionWrapper.jsx
import React from "react";
import { useInView } from "react-intersection-observer";

const SectionWrapper = ({ children, id, className = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <section
      ref={ref}
      id={id}
      className={`container mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${
        inView ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
