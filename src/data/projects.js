const projects = [
  {
    id: 1,
    title: 'Sample Project 1',
    category: 'Commercial',
    description: 'This is a sample project with a video.',
    thumbnailSrc: '', // Leave empty to use video as thumbnail
    videoSrc: '/videos/sample-video.mp4', // Update this with your actual video filename
    media: [
      { type: 'video', src: '/videos/sample-video.mp4', isFullWidth: true },
      // You can add more media items here (images or videos)
    ],
    height: 'medium',
    slug: 'sample-project-1'
  },
  {
    id: 2,
    title: 'Sample Project 2',
    category: 'Documentary',
    description: 'Another sample project with video content.',
    thumbnailSrc: '',
    videoSrc: '/videos/sample-video-2.mp4', // Update this with your actual video filename
    media: [
      { type: 'video', src: '/videos/sample-video-2.mp4', isFullWidth: true },
    ],
    height: 'tall',
    slug: 'sample-project-2'
  }
  // Add more projects as needed, using your actual video filenames from the public/videos folder
];

export default projects;