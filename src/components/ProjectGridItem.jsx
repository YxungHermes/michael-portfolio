import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectGridItem = ({ project }) => {
  const videoRef = useRef(null);
  const { id, title, category, videoSrc, thumbnailSrc, height, slug } = project;
  const hasVideo = videoSrc && videoSrc.trim() !== "";
  const hasThumbnail = thumbnailSrc && thumbnailSrc.trim() !== "";

  // Attempt to play video if it exists and is visible
  useEffect(() => {
    if (hasVideo && videoRef.current) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(error => {
              // Autoplay was prevented, usually requires user interaction or muted
              if (videoRef.current) videoRef.current.muted = true;
              videoRef.current.play().catch(e => console.warn("Muted autoplay also failed:", e));
            });
          } else {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          }
        });
      }, options);

      observer.observe(videoRef.current);

      return () => {
        if (videoRef.current) observer.unobserve(videoRef.current);
      };
    }
  }, [hasVideo]);

  const heightClass = height ? `project-grid-item ${height}` : "project-grid-item";

  return (
    <Link to={`/project/${slug}`} className={heightClass}>
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#2a2a2a', color: '#777' }}>
          <span>Preview N/A</span>
        </div>
      )}
      <div className="project-item-overlay">
        <h3 className="project-item-title">{title}</h3>
        {category && <p className="project-item-category">{category}</p>}
      </div>
    </Link>
  );
};

export default ProjectGridItem;