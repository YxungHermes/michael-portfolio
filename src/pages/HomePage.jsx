import React from 'react';
    slug: 'commercial-nova-x-drone',
    category: 'Commercial',
    thumbnailSrc: 'https://images.unsplash.com/photo-1506947411487-a56738267384',
    year: '2021',
    description: 'Showcasing the revolutionary features of the Nova X Drone.'
import { Link } from 'react-router-dom';
import ProjectGridItem from '../components/ProjectGridItem';
// Enhanced project data with slugs for routing and more details
  return (
    <div className="project-grid">
      {projects.map(project => (
        <Link to={`/project/${project.slug}`} key={project.id}>
          <ProjectGridItem
            title={project.title}
            videoSrc={project.videoSrc}
            thumbnailSrc={project.thumbnailSrc}
            category={project.category}
          />
        </Link>
          />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;