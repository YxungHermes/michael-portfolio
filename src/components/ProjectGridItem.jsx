import React, { useRef, useEffect } from 'react';

const ProjectGridItem = ({ title, videoSrc, thumbnailSrc }) => {
  const videoRef = useRef(null);
  const hasVideo = videoSrc && videoSrc.trim() !== "";
  const hasThumbnail = thumbnailSrc && thumbnailSrc.trim() !== "";

  // Attempt to play video if it exists and is visible (basic implementation)
  useEffect(() => {
    if (hasVideo && videoRef.current) {
      videoRef.current.play().catch(error => {
        // Autoplay was prevented, usually requires user interaction or muted.
        // console.warn("Video autoplay prevented for:", title, error);
        // Ensure video is muted for better autoplay chances
        if (videoRef.current) videoRef.current.muted = true;
        videoRef.current.play().catch(e => console.warn("Muted autoplay also failed for:", title, e));
      });
    }
  }, [hasVideo, title]);

  return (
    <div className="project-grid-item">
      {hasVideo ? (
        <video
          ref={videoRef}
          src={videoSrc}
          muted  // Muted is often required for autoplay
          loop
          playsInline // Important for iOS
          preload="metadata" // Helps with loading the first frame quickly
          poster={thumbnailSrc} // Show thumbnail while video loads or if it fails
        >
          Your browser does not support the video tag.
        </video>
      ) : hasThumbnail ? (
        <img src={thumbnailSrc} alt={title || 'Project thumbnail'} />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#2a2a2a', color: '#777' }}>
          <span>Preview N/A</span>
        </div>
      )}
      <div className="project-item-overlay">
        <h3 className="project-item-title">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectGridItem;