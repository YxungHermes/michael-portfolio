import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from './HomePage'; // Import projects data

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);

  useEffect(() => {
    // Find the current project
    const projectIndex = projects.findIndex(p => p.slug === slug);
    
    if (projectIndex !== -1) {
      setProject(projects[projectIndex]);
      
      // Find next and previous projects for navigation
      const nextIndex = projectIndex < projects.length - 1 ? projectIndex + 1 : 0;
      const prevIndex = projectIndex > 0 ? projectIndex - 1 : projects.length - 1;
      
      setNextProject(projects[nextIndex]);
      setPrevProject(projects[prevIndex]);
    }
    
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <div className="project-detail">Project not found</div>;
  }

  return (
    <div className="project-detail">
      <div className="project-detail-header">
        <h1 className="project-detail-title">{project.title}</h1>
        <div className="project-detail-meta">
          {project.category} | {project.year}
        </div>
        <div className="project-detail-description">
          <p>{project.description}</p>
        </div>
      </div>

      <div className="project-detail-media">
        {project.videoSrc ? (
          <div className="project-detail-video">
            <video
              controls
              src={project.videoSrc}
              poster={project.thumbnailSrc}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div className="project-detail-image">
            <img src={project.thumbnailSrc} alt={project.title} />
          </div>
        )}
        
        {/* Additional images could be added here */}
        {project.additionalImages && project.additionalImages.map((img, index) => (
          <div className="project-detail-image" key={index}>
            <img src={img} alt={`${project.title} - Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="project-navigation">
        <Link to={`/project/${prevProject.slug}`} className="project-nav-link">
          ← Previous Project
        </Link>
        <Link to="/" className="project-nav-link">
          Back to All Projects
        </Link>
        <Link to={`/project/${nextProject.slug}`} className="project-nav-link">
          Next Project →
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;