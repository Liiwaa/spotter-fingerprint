import React, { useState, useRef } from "react";
import "./hover-svg.css";

const HoverSVG = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, visible: false });
  const svgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setCursorPos({ x, y, visible: true });
    checkElementsInsideCircle(x, y);
  };

  const handleMouseLeave = (e) => {
    const { clientX: x, clientY: y } = e;
    setCursorPos({ x, y, visible: false });
    checkElementsInsideCircle(x, y);
  };

  const checkElementsInsideCircle = (x, y) => {
    const svg = svgRef.current;
    if (!svg) return;

    const rectElements = svg.querySelectorAll('.svg-square');
    const circleRadius = 40;

    rectElements.forEach((rect) => {
      const rectBounds = rect.getBoundingClientRect();
      const distX = x - rectBounds.left - rectBounds.width / 2;
      const distY = y - rectBounds.top - rectBounds.height / 2;
      const distance = Math.sqrt(distX ** 2 + distY ** 2);

      rect.classList.toggle('hovered', distance < circleRadius/1.1);
    });
  };

  return (
    <div className="hover-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div
        className="magnifier"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          opacity: cursorPos.visible ? 1 : 0,
        }}
      />

      <svg ref={svgRef} className="hover-svg">
        <rect x="20" y="20" width="8px" height="7px" fill="grey" className="svg-square"/>
        <rect x="40" y="20" width="9px" height="7px" fill="grey" className="svg-square"/>
        <rect x="60" y="20" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="100" y="20" width="6px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="120" y="20" width="8px" height="7px" fill="grey" className="svg-square"/>
        <rect x="160" y="20" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="200" y="20" width="8px" height="7px" fill="grey" className="svg-square"/>
        <rect x="240" y="20" width="9px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="280" y="20" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="300" y="20" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="320" y="20" width="9px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="360" y="20" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="380" y="20" width="8px" height="7px" fill="grey" className="svg-square"/>

        <rect x="20" y="40" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="40" y="40" width="8px" height="7px" fill="grey" className="svg-square"/>
        <rect x="60" y="40" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="100" y="40" width="8px" height="7px" fill="grey" className="svg-square"/>
        <rect x="120" y="40" width="9px" height="7px" fill="grey" className="svg-square"/>
        <rect x="160" y="40" width="6px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="180" y="40" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="200" y="40" width="8px" height="7px" fill="grey" className="svg-square"/>
        <rect x="240" y="40" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="260" y="40" width="9px" height="7px" fill="grey" className="svg-square"/>
        <rect x="280" y="40" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="320" y="40" width="7px" height="7px" fill="grey" className="svg-square color"/>

        <rect x="20" y="60" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="40" y="60" width="9px" height="7px" fill="grey" className="svg-square"/>
        <rect x="60" y="60" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="100" y="60" width="8px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="120" y="60" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="160" y="60" width="9px" height="7px" fill="grey" className="svg-square"/>
        <rect x="180" y="60" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="200" y="60" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="240" y="60" width="8px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="260" y="60" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="280" y="60" width="9px" height="7px" fill="grey" className="svg-square"/>
        <rect x="320" y="60" width="8px" height="7px" fill="grey" className="svg-square"/>

        <rect x="20" y="80" width="9px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="40" y="80" width="8px" height="7px" fill="grey" className="svg-square"/>
        <rect x="60" y="80" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="100" y="80" width="8px" height="7px" fill="grey" className="svg-square"/>
        <rect x="120" y="80" width="7px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="160" y="80" width="9px" height="7px" fill="grey" className="svg-square"/>
        <rect x="180" y="80" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="200" y="80" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="240" y="80" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="260" y="80" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="280" y="80" width="9px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="320" y="80" width="8px" height="7px" fill="grey" className="svg-square"/>

        <rect x="20" y="100" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="40" y="100" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="60" y="100" width="9px" height="7px" fill="grey" className="svg-square"/>
        <rect x="100" y="100" width="7px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="120" y="100" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="160" y="100" width="8px" height="7px" fill="grey" className="svg-square"/>
        <rect x="180" y="100" width="9px" height="7px" fill="grey" className="svg-square"/>
        <rect x="200" y="100" width="8px" height="7px" fill="grey" className="svg-square"/>
        <rect x="240" y="100" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="260" y="100" width="9px" height="7px" fill="grey" className="svg-square"/>
        <rect x="280" y="100" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="320" y="100" width="7px" height="7px" fill="grey" className="svg-square color"/>

        <rect x="20" y="120" width="7px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="40" y="120" width="9px" height="7px" fill="grey" className="svg-square"/>
        <rect x="60" y="120" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="100" y="120" width="8px" height="7px" fill="grey" className="svg-square"/>
        <rect x="120" y="120" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="160" y="120" width="9px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="180" y="120" width="8px" height="7px" fill="grey" className="svg-square"/>
        <rect x="200" y="120" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="240" y="120" width="6px" height="7px" fill="grey" className="svg-square"/>
        <rect x="260" y="120" width="7px" height="7px" fill="grey" className="svg-square"/>
        <rect x="280" y="120" width="9px" height="7px" fill="grey" className="svg-square color"/>
        <rect x="320" y="120" width="7px" height="7px" fill="grey" className="svg-square"/>
      </svg>
    </div>
  );
};

export default HoverSVG;
