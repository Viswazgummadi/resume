// src/App.jsx
import React, { useCallback, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "./particles-config"; // Your configuration for stars

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [particlesMounted, setParticlesMounted] = useState(false);

  // This is the crucial initialization function for the tsParticles engine
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles: Attempting to initialize tsParticles engine...");
    try {
      // You can add more customizations here before loading the engine if needed
      await loadSlim(engine); // Loads the slim version of the particles engine
      console.log("Particles: tsParticles engine loaded successfully.");
      setParticlesMounted(true); // Indicate that the engine has been initialized
    } catch (error) {
      console.error("Particles: Error loading tsParticles engine:", error);
      setParticlesMounted(false); // Indicate failure
    }
  }, []);

  // This callback is called once the particles container is loaded and ready in the DOM
  const particlesLoaded = useCallback(async (container) => {
    if (container) {
      console.log(
        "Particles: Container loaded, particles should be visible now if config is correct."
      );
      // You can access the container instance here if you need to interact with it
      // await console.log("Particles container:", container);
    }
  }, []);

  // Effect to log status (optional, for debugging)
  useEffect(() => {
    if (particlesMounted) {
      console.log(
        "Particles: Engine is initialized. Particles component is active."
      );
    } else {
      // This might log on initial render before init attempt
      // console.log("Particles: Engine not yet initialized or initialization failed.");
    }
  }, [particlesMounted]);

  return (
    <div className="bg-primary-bg min-h-screen relative isolate">
      {" "}
      {/* 'isolate' creates a new stacking context */}
      {/* 
        The Particles component will render a canvas.
        Its 'options' prop takes the configuration.
        'fullScreen: { enable: true, zIndex: -1 }' in particlesConfig is key
        to make it a background element.
      */}
      <Particles
        id="tsparticles" // Important for targeting if needed, and for the library
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        className="absolute top-0 left-0 w-full h-full" // Explicitly make it cover the area
      />
      {/* 
        This wrapper ensures all your page content is rendered above the particles.
        'relative' is important for 'z-10' to work correctly against the
        absolutely positioned particles canvas (if particles didn't use fullScreen.zIndex).
        With fullScreen.zIndex: -1 on particles, this div mainly groups content.
      */}
      <div className="relative z-10">
        {" "}
        {/* z-10 ensures it's above zIndex: -1 (or default zIndex:0) particles */}
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      {/* For Debugging: You can show a message based on particlesMounted state */}
      {/* <div style={{ position: 'fixed', bottom: '10px', left: '10px', backgroundColor: 'rgba(0,0,0,0.7)', color: 'white', padding: '10px', zIndex: 100 }}>
        Particles Engine Initialized: {particlesMounted ? "Yes" : "No/Failed"}
      </div> */}
    </div>
  );
}

export default App;
