import React from 'react';
import HoverSVG from "./hover-svg";
import "./identify-anonymous-visitors.css";

const IdentifyAnonymousVisitors = () => {
  return (
    <div className="element identify-anonymous-visitors">
      <HoverSVG/>
      <div className="element-content">
        <i className="icon fas fa-user-secret" />
        <h2>Identify all anonymous visitors.</h2>
        <p>Get details on suspicious visitors even when VPN, incognito mode, or a tampered browser or device is used.</p>
      </div>
    </div>
  );
};

export default IdentifyAnonymousVisitors;
