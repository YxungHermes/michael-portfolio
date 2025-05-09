import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center mt-12 py-6 text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Michael Andrade. All rights reserved.
    </footer>
  );
};

export default Footer;