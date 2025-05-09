import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Michael Andrade</h1>
        <p className="hero-subtitle">Creative Direction & Visual Storytelling</p>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('work-samples')}
          >
            View Work
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact-form')}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;