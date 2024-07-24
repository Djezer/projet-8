import React from 'react';
import "./HomeBanner.css";
import Banner from "../../assets/Banniere/Banner.jpg";

function HomeBanner() {
  return (
    <div className="banner-container">
      <div className="banner">
        <img src={Banner} alt="Bannière" />
        <div className="banner-overlay"></div>
        <h2>Chez vous, partout et ailleurs</h2>
      </div>

    </div>
  );
}

export default HomeBanner;
