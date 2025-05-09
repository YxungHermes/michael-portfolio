import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectGridItem = ({ project }) => {
  const videoRef = useRef(null);
  
  // Play video on hover, pause when not hovering
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video play failed:", error);
      });
    }
  };
  
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Link
      to={`/project/${project.slug}`}
      className={`project-grid-item ${project.height || 'medium'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-content">
        {project.videoSrc ? (
          <video
            ref={videoRef}
            src={project.videoSrc}
            muted
            loop
            playsInline
            className="project-media"
          />
        ) : project.thumbnailSrc ? (
          <img src={project.thumbnailSrc} alt={project.title} className="project-media" />
        ) : null}
        
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-category">{project.category}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectGridItem;