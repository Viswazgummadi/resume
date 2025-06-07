// src/components/SectionWrapper.jsx
import React from "react";
import { useInView } from "react-intersection-observer";

const SectionWrapper = ({
  children,
  id,
  className = "",
  animationType = "fade-in-up",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Map animationType to Tailwind class
  const animationClass =
    {
      "fade-in-up": "animate-fade-in-up",
      "slide-in-left": "animate-slide-in-left",
      "slide-in-right": "animate-slide-in-right",
    }[animationType] || "animate-fade-in-up"; // Default to fade-in-up

  return (
    <section
      ref={ref}
      id={id}
      // Apply base fade-in-section for initial opacity 0 and transform
      // Then apply the specific animation class when inView
      className={`container mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${
        inView ? `is-visible ${animationClass}` : ""
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
