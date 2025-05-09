import React from 'react';
import ProjectGridItem from '../components/ProjectGridItem';

// Sample project data - replace with actual data
// Ensure video paths are correct (e.g., /videos/sample1.mp4 if in public/videos)
// and thumbnail paths if used.
const projects = [
  {
    id: 1,
    title: 'Wedding Highlight – Ari & Billy',
    videoSrc: '/videos/sample1.mp4',
    // thumbnailSrc: '/images/thumbnails/ari_billy_thumb.jpg' // Example thumbnail
  },
  {
    id: 2,
    title: 'BTS – Dakota Blue "Nonexistent"',
    videoSrc: '/videos/sample2.mp4',
    // thumbnailSrc: '/images/thumbnails/dakota_blue_thumb.jpg'
  },
  {
    id: 3,
    title: 'Corporate Event Recap',
    thumbnailSrc: 'https://via.placeholder.com/800x450/2a2a2a/e0e0e0?text=Project+Alpha',
    // videoSrc: '/videos/corporate_event.mp4'
  },
  {
    id: 4,
    title: 'Music Video – "City Lights"',
    thumbnailSrc: 'https://via.placeholder.com/800x450/3a3a3a/e0e0e0?text=Project+Beta',
    // videoSrc: '/videos/city_lights_mv.mp4'
  },
  {
    id: 5,
    title: 'Short Film – "The Wanderer"',
    thumbnailSrc: 'https://via.placeholder.com/800x450/4a4a4a/e0e0e0?text=Project+Gamma',
  },
  {
    id: 6,
    title: 'Commercial – "Nova X Drone"',
    thumbnailSrc: 'https://via.placeholder.com/800x450/5a5a5a/e0e0e0?text=Project+Delta',
  },
];

const HomePage = () => {
  return (
    <div className="project-grid">
      {projects.map(project => (
        <ProjectGridItem
          key={project.id}
          title={project.title}
          videoSrc={project.videoSrc}
          thumbnailSrc={project.thumbnailSrc}
        />
      ))}
    </div>
  );
};

export default HomePage;