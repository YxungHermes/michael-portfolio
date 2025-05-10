import React, { useRef, useEffect } from 'react';

const ProjectGridItem = ({ title, videoSrc, thumbnailSrc, category }) => {
  const videoRef = useRef(null);
  const hasVideo = videoSrc && videoSrc.trim() !== "";
  const hasThumbnail = thumbnailSrc && thumbnailSrc.trim() !== "";

  // Attempt to play video if it exists and is visible
  useEffect(() => {
    if (hasVideo && videoRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(error => {
                console.warn("Video autoplay prevented:", error);
                if (videoRef.current) videoRef.current.muted = true;
                videoRef.current.play().catch(e => console.warn("Muted autoplay also failed:", e));
              });
            } else {
              if (videoRef.current && !videoRef.current.paused) {
                videoRef.current.pause();
              }
            }
          });
        },
        { threshold: 0.5 }
      );
      
      observer.observe(videoRef.current);
      
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }
  }, [hasVideo]);

  return (
    <div className="project-grid-item">
      {hasVideo ? (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          poster={thumbnailSrc}
        >
          Your browser does not support the video tag.
        </video>
      ) : hasThumbnail ? (
        <img src={thumbnailSrc} alt={title || 'Project thumbnail'} />
      ) : (
        <div className="project-placeholder">
          <span>Preview N/A</span>
        </div>
      )}
      <div className="project-item-overlay">
        <h3 className="project-item-title">{title}</h3>
        {category && <span className="project-item-category">{category}</span>}
      </div>
    </div>
  );
};

export default ProjectGridItem;