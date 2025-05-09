// Collection of portfolio projects
const projects = [
  {
    id: 1,
    title: 'Wedding Highlight – Ari & Billy',
    category: 'Wedding',
    description: 'A cinematic wedding highlight film capturing Ari and Billy\'s special day at the Four Seasons Resort.',
    thumbnailSrc: 'https://source.unsplash.com/random/600x800?wedding',
    videoSrc: '/videos/sample1.mp4',
    media: [
      { type: 'image', src: 'https://source.unsplash.com/random/1200x800?wedding', isFullWidth: true },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?bride' },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?groom' },
      { type: 'video', src: '/videos/sample1.mp4', isFullWidth: true }
    ],
    height: 'tall',
    slug: 'ari-billy-wedding'
  },
  {
    id: 2,
    title: 'BTS – Dakota Blue "Nonexistent"',
    category: 'Music Video',
    description: 'Behind the scenes footage from the making of Dakota Blue\'s music video for their hit single "Nonexistent".',
    thumbnailSrc: 'https://source.unsplash.com/random/800x600?music',
    videoSrc: '/videos/sample2.mp4',
    media: [
      { type: 'video', src: '/videos/sample2.mp4', isFullWidth: true },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?singer' },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?band' },
      { type: 'image', src: 'https://source.unsplash.com/random/1200x800?concert', isFullWidth: true }
    ],
    height: 'normal',
    slug: 'dakota-blue-nonexistent'
  },
  {
    id: 3,
    title: 'Corporate Event Recap',
    category: 'Corporate',
    description: 'A highlight reel from the annual tech conference featuring keynote speakers and product launches.',
    thumbnailSrc: 'https://source.unsplash.com/random/600x800?corporate',
    media: [
      { type: 'image', src: 'https://source.unsplash.com/random/1200x800?conference', isFullWidth: true },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?business' },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?meeting' }
    ],
    height: 'short',
    slug: 'corporate-event-recap'
  },
  {
    id: 4,
    title: 'Music Video – "City Lights"',
    category: 'Music Video',
    description: 'Official music video for indie band Neon Sunset\'s single "City Lights" shot on location in downtown Los Angeles.',
    thumbnailSrc: 'https://source.unsplash.com/random/800x600?city',
    media: [
      { type: 'image', src: 'https://source.unsplash.com/random/1200x800?night', isFullWidth: true },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?lights' },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?musician' }
    ],
    height: 'normal',
    slug: 'city-lights-music-video'
  },
  {
    id: 5,
    title: 'Short Film – "The Wanderer"',
    category: 'Film',
    description: 'An experimental short film following a traveler on a journey of self-discovery through stunning landscapes.',
    thumbnailSrc: 'https://source.unsplash.com/random/600x900?film',
    media: [
      { type: 'image', src: 'https://source.unsplash.com/random/1200x800?landscape', isFullWidth: true },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?portrait' },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?travel' }
    ],
    height: 'tall',
    slug: 'the-wanderer-film'
  },
  {
    id: 6,
    title: 'Commercial – "Nova X Drone"',
    category: 'Commercial',
    description: 'A sleek product commercial showcasing the features and capabilities of the new Nova X Drone.',
    thumbnailSrc: 'https://source.unsplash.com/random/800x600?tech',
    media: [
      { type: 'image', src: 'https://source.unsplash.com/random/1200x800?drone', isFullWidth: true },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?technology' },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?camera' }
    ],
    height: 'short',
    slug: 'nova-x-drone-commercial'
  },
  {
    id: 7,
    title: 'Travel Series – "Hidden Places"',
    category: 'Documentary',
    description: 'A documentary series exploring lesser-known destinations and the stories behind them.',
    thumbnailSrc: 'https://source.unsplash.com/random/600x800?travel',
    media: [
      { type: 'image', src: 'https://source.unsplash.com/random/1200x800?adventure', isFullWidth: true },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?nature' },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?explore' }
    ],
    height: 'tall',
    slug: 'hidden-places-travel'
  },
  {
    id: 8,
    title: 'Fashion Look Book – Spring Collection',
    category: 'Fashion',
    description: 'A vibrant fashion film showcasing the latest spring collection for a boutique clothing brand.',
    thumbnailSrc: 'https://source.unsplash.com/random/800x600?fashion',
    media: [
      { type: 'image', src: 'https://source.unsplash.com/random/1200x800?model', isFullWidth: true },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?style' },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?clothing' }
    ],
    height: 'normal',
    slug: 'spring-fashion-lookbook'
  }
];

// Helper function to find a project by slug
export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get next and previous projects
export const getAdjacentProjects = (currentId) => {
  const currentIndex = projects.findIndex(project => project.id === currentId);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];
  
  return { prevProject, nextProject };
};

export default projects;