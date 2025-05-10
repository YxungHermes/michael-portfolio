import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);
  
  // Redirect to home if project not found
  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);
  
  // If project is still loading or not found
  if (!project) {
    return <div className="project-detail">Loading...</div>;
  }
  
  const { title, category, description, media } = project;
  const { prevProject, nextProject } = getAdjacentProjects(project.id);
  
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1 className="project-title">{title}</h1>
        {category && <p className="project-category">{category}</p>}
      </div>
      
      {description && (
        <div className="project-description">
          <p>{description}</p>
        </div>
      )}
      
      {media && media.length > 0 && (
        <div className="project-media">
          {media.map((item, index) => {
            const mediaClass = item.isFullWidth ? 'project-media-full' : '';
            
            return item.type === 'video' ? (
              <div key={index} className={mediaClass}>
                <video
                  src={item.src}
                  controls
                  muted
                  playsInline
                  style={{ width: '100%', height: 'auto', aspectRatio: item.isFullWidth ? '16/9' : '0.8' }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div key={index} className={mediaClass}>
                <img
                  src={item.src}
                  alt={`${title} - media ${index + 1}`}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            );
          })}
        </div>
      )}
      
      <div className="project-navigation">
        <Link to={`/project/${prevProject.slug}`} className="prev-project">
          Previous Project
        </Link>
        <Link to={`/project/${nextProject.slug}`} className="next-project">
          Next Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;