import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling

const NavBar = () => {
  // Helper function to apply active class
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        Michael Andrade
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" className={getNavLinkClass} end>
          {/* 'end' prop ensures this only matches exactly "/" */}
          Work
        </NavLink>
        <NavLink to="/about" className={getNavLinkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={getNavLinkClass}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;