import React, { useEffect, useRef } from 'react';
import ProjectGridItem from '../components/ProjectGridItem';
import projects from '../data/projects';

const HomePage = () => {
  const gridRef = useRef(null);

  // Optional: Add resizing functionality for true masonry layout
  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        const grid = gridRef.current;
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));

        // Reset
        const items = grid.getElementsByClassName('project-grid-item');
        for (let i = 0; i < items.length; i++) {
          items[i].style.gridRowEnd = "";
        }

        // Get updated heights
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
          item.style.gridRowEnd = `span ${rowSpan}`;
        }
      }
    };

    // Initial calculation and on window resize
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="project-grid" ref={gridRef}>
      {projects.map(project => (
        <ProjectGridItem
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};

export default HomePage;