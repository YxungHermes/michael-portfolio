import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    // Trigger animations on mount
    const animatableElements = document.querySelectorAll('.animate-on-scroll');
    animatableElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
      el.classList.add('animated');
    });
  }, []);

  return (
    <div className="about-section">
      <div className="about-content animate-on-scroll">
        <h1 className="about-title">Crafting Visual Stories</h1>
        
        <p className="about-text">
          I'm a creative director and visual storyteller passionate about transforming ideas into compelling narratives. With over a decade of experience in film and digital media, I specialize in creating content that resonates on both emotional and aesthetic levels.
        </p>
        
        <p className="about-text">
          My approach combines technical precision with artistic intuition, resulting in work that not only looks beautiful but also communicates powerfully. From intimate wedding films to large-scale commercial productions, each project is an opportunity to push creative boundaries and exceed expectations.
        </p>
        
        <p className="about-text">
          Based in New York, I collaborate with brands, agencies, and individuals who share a commitment to quality and innovation. Whether it's capturing the energy of a live event, the elegance of a fashion campaign, or the authenticity of a documentary, I bring dedication, creativity, and a unique perspective to every project.
        </p>
        
        <Link to="/contact" className="about-cta">
          Let's work together →
        </Link>
      </div>
      
      <div className="about-image animate-on-scroll">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
          alt="Portrait"
        />
      </div>
    </div>
  );
};

export default AboutPage;