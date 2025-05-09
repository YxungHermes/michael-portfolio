import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

const ProjectPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  
  useEffect(() => {
    const currentProject = projects.find(p => p.slug === slug);
    setProject(currentProject);
    
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
  
  return (
    <div className="project-detail">
      <div className="project-header">
        <Link to="/" className="back-link">← Back to Projects</Link>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-category">{project.category}</p>
      </div>
      
      <div className="project-description">
        <p>{project.description}</p>
      </div>
      
      <div className="project-media-container">
        {project.media && project.media.map((item, index) => (
          <div
            key={index}
            className={`media-item ${item.isFullWidth ? 'full-width' : ''}`}
          >
            {item.type === 'video' ? (
              <video
                src={item.src}
                controls
                autoPlay={index === 0}
                playsInline
                className="detail-media"
              />
            ) : (
              <img src={item.src} alt={`Project media ${index + 1}`} className="detail-media" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;