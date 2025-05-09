# Michael Andrade Portfolio

## How to Add Videos to Your Portfolio

### Step 1: Upload Video Files
Place your video files in the `public/videos` folder.

### Step 2: Reference Videos in Projects
Edit the `src/data/projects.js` file to reference your videos:

#### For Grid Thumbnails (Homepage)
```javascript
{
  // Other project properties...
  videoSrc: '/videos/your-video-filename.mp4', // Path to your video file
}
```

#### For Project Detail Pages
```javascript
{
  // Other project properties...
  media: [
    { type: 'video', src: '/videos/your-video-filename.mp4', isFullWidth: true },
    // Other media items...
  ]
}
```

### Video Format Recommendations
- Use MP4 format for best compatibility
- Keep file sizes reasonable (compress videos if needed)
- Recommended resolution: 1920x1080 (HD) or 1280x720
- Use H.264 encoding for best web compatibility

### Example
```javascript
{
  id: 9,
  title: 'Client Project - Brand Video',
  category: 'Commercial',
  description: 'A brand video created for Client XYZ showcasing their services.',
  thumbnailSrc: '', // Leave empty to use video as thumbnail
  videoSrc: '/videos/client-brand-video.mp4',
  media: [
    { type: 'video', src: '/videos/client-brand-video.mp4', isFullWidth: true },
    { type: 'image', src: '/images/client-photo-1.jpg' },
    { type: 'video', src: '/videos/client-behind-scenes.mp4', isFullWidth: false }
  ],
  height: 'tall',
  slug: 'client-brand-video'
}
```