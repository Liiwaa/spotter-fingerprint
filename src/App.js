import React from 'react';
import './App.css';
import FingerprintGraphSection from './components/fingerprint-graph-section';
import AnyBrowserDevice from './components/any-browser-device';
import IdentifyAnonymousVisitors from './components/identify-anonymous-visitors';
import DelightYourTrustedUsers from './components/delight-your-trusted-users';
import { useState } from "react";

const App = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.nativeEvent.offsetX);
    setScrollLeft(document.querySelector('.right-column').scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.nativeEvent.offsetX;
    const scroll = (x - startX) * 2; // The *2 is to control the scroll speed
    document.querySelector('.right-column').scrollLeft = scrollLeft - scroll;
  };

  return (
    <div className="modal">
      <div
        className="modal-container"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="left-column">
          <FingerprintGraphSection />
        
        </div>

        <div className="right-column">
          <AnyBrowserDevice />
          <IdentifyAnonymousVisitors />
          <DelightYourTrustedUsers />
        </div>
      </div>
    </div>
  );
};

export default App;