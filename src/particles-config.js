// src/particles-config.js
const particlesConfig = {
  fullScreen: {
    enable: true,
    zIndex: -1, // Keep it behind content
  },
  particles: {
    number: {
      value: 1700, // Increased number for a denser star field, but they'll be small
      density: {
        enable: true,
        value_area: 1000, // Adjust to control density along with value
      },
    },
    color: {
      value: ["#ffffff", "#cccccc", "#bbbbbb"], // Array of white/light gray for subtle variation
    },
    shape: {
      type: "circle", // Stars are fundamentally round points of light
    },
    opacity: {
      value: { min: 0.1, max: 0.6 }, // Random opacity for a twinkling effect
      random: true,
      anim: {
        // Subtle animation for opacity (twinkling)
        enable: true,
        speed: 0.5, // Slower speed for twinkling
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: { min: 0.5, max: 1.5 }, // Very small particles
      random: true,
      anim: {
        // Optional: slight size animation for more dynamic stars
        enable: true,
        speed: 8,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false, // Disable lines between particles for a cleaner star look
    },
    move: {
      enable: true,
      speed: 0.2, // Very slow movement speed for a gentle drift
      direction: "none", // Random direction
      random: true,
      straight: false, // Not moving in straight lines, more like a gentle drift
      out_mode: "out", // Particles will go out of the canvas
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble", // "bubble" or "repulse" can be subtle
        // "grab" might be too much if lines are disabled
      },
      onclick: {
        enable: false, // Disable click interactivity for a calmer background
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 100,
        line_opacity: 0.1, // Lines would be very faint even if enabled
      },
      bubble: {
        // Makes particles slightly bigger/more opaque on hover
        distance: 100, // How far the mouse triggers the effect
        size: 2, // Max size on hover
        duration: 2,
        opacity: 0.8,
      },
      repulse: {
        distance: 80,
        duration: 0.4,
      },
      push: {
        particles_nb: 2,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true, // Good for high-resolution displays
};

export default particlesConfig;
