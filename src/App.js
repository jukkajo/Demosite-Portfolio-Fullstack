import React, { useRef, useState, useEffect } from 'react';
// Universal
import Navbar from './NavBar';
// 3D-space related only
import Space from './Space';
// Home-page related only
import Home from './Home';
// About-page
import Contact from './Contact';
// Analytics and data fetching and displaying related only
// TODO: create more components
import Weather from './Weather';
/*
 * Author: Jukka Joutsalainen
 * Date: 2023-03-10
 * Description: This code defines react based website, that acts like demo/portfolio. It does not
   have any meaningful purpose, other than display some partition of skillset of mine.
   It has following functionalities:
   TODO: add those when app is ready & move separate styles into app.css & remove excess code
 */

function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    console.log('activePage changed:', activePage);
  }, [activePage]);

  return (
    <div id="outer">
      <div className="container">
        {activePage === '3dspace' && (
          <p id="p1" title="This page is demo. It has 3D space and some objects in that space. You can navigate in space with arrow keys and access to different pages of this website also by clicking some of those 3D-objects. Models can be rotated with mouse drag.">Drag mouse here for info</p>
        )}
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      </div>
      {activePage === '3dspace' && (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div id="inner" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
            <Space />
          </div>
        </div>
      )}
      {activePage === 'home' && (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div id="inner" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
            <Home />
          </div>
        </div>
      )}
      {activePage === 'about' && (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div id="inner" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
            <Contact />
          </div>
        </div>
      )}
      {activePage === 'analyticsandfetching' && (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div id="inner" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
              <div className="analyticsandfetching-container">
                <div className="sub-box">
                  /* add component */
                </div>
                <div className="sub-box">
                  <Weather />
                </div>
                <div className="sub-box">
                  /* add component */
                </div>
                <div className="sub-box">
                  /* add component */
                </div>
              </div>
          
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

