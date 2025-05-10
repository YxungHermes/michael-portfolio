import React, { useEffect, useRef } from 'react';
import ProjectGridItem from '../components/ProjectGridItem';
import projects from '../data/projects';

const HomePage = () => {
  const gridRef = useRef(null);

  // Enhanced masonry layout functionality
  useEffect(() => {
    const adjustGridItems = () => {
      if (gridRef.current) {
        const grid = gridRef.current;
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));

        // Reset existing spans
        const items = grid.getElementsByClassName('project-grid-item');
        for (let i = 0; i < items.length; i++) {
          // Get the predefined height class
          const heightClass = items[i].classList.contains('tall') ? 'tall' :
                             items[i].classList.contains('short') ? 'short' : '';
          
          // Calculate appropriate span based on content and predefined class
          const contentHeight = items[i].getBoundingClientRect().height;
          const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
          
          // Apply calculated span, respecting the predefined height class
          if (heightClass === 'tall') {
            items[i].style.gridRowEnd = `span ${Math.max(rowSpan, 45)}`;
          } else if (heightClass === 'short') {
            items[i].style.gridRowEnd = `span ${Math.max(rowSpan, 25)}`;
          } else {
            items[i].style.gridRowEnd = `span ${Math.max(rowSpan, 30)}`;
          }
        }
      }
    };

    // Run when component mounts and on window resize
    adjustGridItems();
    window.addEventListener('resize', adjustGridItems);
    
    // Run again after a short delay to handle image/video loading
    const timeoutId = setTimeout(adjustGridItems, 500);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', adjustGridItems);
      clearTimeout(timeoutId);
    };
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