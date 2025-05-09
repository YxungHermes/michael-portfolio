import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const location = useLocation(); // To pass current path to NavBar if needed for active states

  return (
    <>
      <NavBar key={location.pathname} /> {/* Add key to force re-render on path change for NavLink active states */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          {/* Add other routes here if needed, e.g., for individual project pages */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;