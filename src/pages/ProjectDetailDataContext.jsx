import React, { createContext, useContext } from 'react';

// Enhanced project data with slugs for routing and more details
export const projects = [
  {
    id: 1,
    title: 'Wedding Highlight – Ari & Billy',
    slug: 'wedding-highlight-ari-billy',
    category: 'Wedding',
    videoSrc: '/videos/sample1.mp4',
    thumbnailSrc: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
    year: '2023',
    description: 'A beautiful celebration of love captured in cinematic detail.'
  },
  {
    id: 2,
    title: 'BTS – Dakota Blue "Nonexistent"',
    slug: 'bts-dakota-blue-nonexistent',
    category: 'Music',
    videoSrc: '/videos/sample2.mp4',
    thumbnailSrc: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4',
    year: '2023',
    description: 'Behind the scenes of Dakota Blue\'s latest music video.'
  },
  {
    id: 3,
    title: 'Corporate Event Recap',
    slug: 'corporate-event-recap',
    category: 'Corporate',
    thumbnailSrc: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6',
    year: '2022',
    description: 'Highlights from the annual tech conference.'
  },
  {
    id: 4,
    title: 'Music Video – "City Lights"',
    slug: 'music-video-city-lights',
    category: 'Music Video',
    thumbnailSrc: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a',
    year: '2022',
    description: 'A visual journey through the urban landscape at night.'
  },
  {
    id: 5,
    title: 'Short Film – "The Wanderer"',
    slug: 'short-film-the-wanderer',
    category: 'Film',
    thumbnailSrc: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    year: '2021',
    description: 'An exploration of solitude and discovery in unfamiliar places.'
  },
  {
    id: 6,
    title: 'Commercial – "Nova X Drone"',
    slug: 'commercial-nova-x-drone',
    category: 'Commercial',
    thumbnailSrc: 'https://images.unsplash.com/photo-1506947411487-a56738267384',
    year: '2021',
    description: 'Showcasing the revolutionary features of the Nova X Drone.'
  },
];

const ProjectDataContext = createContext(projects);

export const useProjectData = () => useContext(ProjectDataContext);

export const ProjectDataProvider = ({ children }) => {
  return (
    <ProjectDataContext.Provider value={projects}>
      {children}
    </ProjectDataContext.Provider>
  );
};

export default ProjectDataContext;