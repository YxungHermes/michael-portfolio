import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

const HomePage = () => {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll('.animate-on-scroll');
    animatableElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      animatableElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="word">Creative</span>{' '}
            <span className="word">Vision</span>{' '}
            <span className="word">Realized</span>
          </h1>
          <p className="hero-subtitle">
            Transforming ideas into compelling visual narratives
          </p>
          <button onClick={scrollToProjects} className="hero-cta">
            View Projects
          </button>
        </div>
        <div className="scroll-indicator" onClick={scrollToProjects}>
          <span className="sr-only">Scroll down</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" ref={projectsRef}>
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">
            A curated collection of projects that showcase creativity, innovation, and attention to detail
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Link
              to={`/project/${project.slug}`}
              key={project.id}
              className={`project-grid-item ${project.size || ''} animate-on-scroll`}
              style={{ '--item-index': index }}
            >
              <div className="project-media-wrapper">
                {project.videoSrc ? (
                  <video
                    className="project-media"
                    src={project.videoSrc}
                    poster={project.thumbnailSrc}
                    muted
                    loop
                    playsInline
                    onMouseEnter={e => e.target.play()}
                    onMouseLeave={e => e.target.pause()}
                  />
                ) : (
                  <img
                    className="project-media"
                    src={project.thumbnailSrc}
                    alt={project.title}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="project-overlay">
                <div className="project-info">
                  <span className="project-number">0{project.id}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;