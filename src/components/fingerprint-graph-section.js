import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { chartData, chartOptions } from '../data/graph-data';

import './fingerprint-graph-section.css';

const FingerprintGraphSection = () => {
  const [graphHeight, setGraphHeight] = useState(400); // Default height for larger screens

  const updateGraphHeight = () => {
    const width = window.innerWidth;

    if (width < 480) {
      setGraphHeight(300); // Height for mobile screens
    } else if (width < 768) {
      setGraphHeight(250); // Height for tablet screens
    } else {
      setGraphHeight(300); // Height for desktop screens
    }
  };

  useEffect(() => {
    updateGraphHeight();
    window.addEventListener('resize', updateGraphHeight);

    return () => {
      window.removeEventListener('resize', updateGraphHeight);
    };
  }, []);

  const chartOptionsResponsive = {
    ...chartOptions,
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }
    },
  };

  return (
    <div className="fingerprint-graph-section element">
      <div className="tag">
        <span className="tag-span">Why Fingerprint<span className="blinking">_</span></span>
      </div>
      <h1>The internet's most <span className="main-color">accurate</span> visitor identifier</h1>
      <p><b>Industry-leading accuracy</b> that lasts for months or years, even when cookies are cleared.</p>
      <button href="https://fingerprint.com/products/fingerprint-pro/">Learn More</button>
      
      <div className="graph" style={{ height: `${graphHeight}px` }}>
        <Line data={chartData} options={chartOptionsResponsive} />
      </div>
    </div>
  );
};

export default FingerprintGraphSection;
