// Collection of portfolio projects
const projects = [
  {
    id: 1,
    title: 'Wedding Highlight',
    category: 'Wedding',
    description: 'A cinematic wedding highlight film capturing the special day at a beautiful venue.',
    thumbnailSrc: 'https://source.unsplash.com/random/600x800?wedding',
    videoSrc: '/videos/Annie 1080p.mov',
    media: [
      { type: 'video', src: '/videos/Annie 1080p.mov', isFullWidth: true },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?bride' },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?groom' },
    ],
    height: 'tall',
    slug: 'wedding-highlight'
  },
  {
    id: 2,
    title: 'DLE Hybrid Event',
    category: 'Event',
    description: 'Coverage of the DLE Hybrid Event at Gotham, showcasing key moments and highlights.',
    thumbnailSrc: 'https://source.unsplash.com/random/800x600?event',
    videoSrc: '/videos/DLE Hybrid Event at Gotham.mov',
    media: [
      { type: 'video', src: '/videos/DLE Hybrid Event at Gotham.mov', isFullWidth: true },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?event' },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?conference' },
    ],
    height: 'normal',
    slug: 'dle-hybrid-event'
  },
  {
    id: 3,
    title: 'FIWWA$ - Connection',
    category: 'Music Video',
    description: 'A short music video clip for FIWWA$ showcasing their track "Connection".',
    thumbnailSrc: 'https://source.unsplash.com/random/600x800?music',
    videoSrc: '/videos/FIWWA$ - Connection [21 Sec].mov',
    media: [
      { type: 'video', src: '/videos/FIWWA$ - Connection [21 Sec].mov', isFullWidth: true },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?musician' },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?concert' }
    ],
    height: 'tall',
    slug: 'fiwwa-connection'
  },
  {
    id: 4,
    title: 'Coffee Shop Commercial',
    category: 'Commercial',
    description: 'A short commercial for a coffee shop, highlighting their aesthetic and products.',
    thumbnailSrc: 'https://source.unsplash.com/random/800x600?coffee',
    videoSrc: '/videos/Video 2 - Coffee outfit 6 seconds [Revison 3.51].mov',
    media: [
      { type: 'video', src: '/videos/Video 2 - Coffee outfit 6 seconds [Revison 3.51].mov', isFullWidth: true },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?cafe' },
      { type: 'image', src: 'https://source.unsplash.com/random/600x800?barista' }
    ],
    height: 'short',
    slug: 'coffee-commercial'
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