import React, { useState } from 'react';
import './NavBar.css';

function Navbar({ activePage, setActivePage }) {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(0);
  };

  return (
    <div className="navbar-container">
      <div
        className={`navbar-item ${activeIndex === 1 ? "active" : ""}`}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => setActivePage('home')}
      >
        Home
      </div>
      <div
        className={`navbar-item ${activeIndex === 2 ? "active" : ""}`}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => setActivePage('about')}
      >
        Contact Me
      </div>
      <div
        className={`navbar-item ${activeIndex === 3 ? "active" : ""}`}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => setActivePage('3dspace')}
      >
        3D-Space
      </div>
      <div
        className={`navbar-item ${activeIndex === 4 ? "active" : ""}`}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => setActivePage('analyticsandfetching')}
      >
        Data Demos
      </div>
    </div>
  );
}

export default Navbar;

