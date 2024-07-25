import React from 'react';
import "./HomeBanner.css";
import Banner from "../../assets/Banniere/Banner.jpg";

function HomeBanner() {
  return (
    <div className="banner-container"> {/* Conteneur principal avec la classe CSS 'banner-container' */}
      <div className="banner"> {/* Sous-conteneur avec la classe CSS 'banner' */}
        <img src={Banner} alt="Bannière" /> {/* Image de la bannière avec une description textuelle pour l'accessibilité */}
        <div className="banner-overlay"></div> {/* Superposition sur l'image de la bannière pour ajouter des effets visuels */}
        <h2>Chez vous, partout et ailleurs</h2> {/* Titre affiché sur la bannière */}
      </div>
    </div>
  );
}

export default HomeBanner;
