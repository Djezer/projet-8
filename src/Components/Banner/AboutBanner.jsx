import React from 'react'
import "./AboutBanner.css"
import About from '../../assets/Banniere/Banner2.jpg'

function AboutBanner() {
  return (
    <div className='About_banner'> {/* Conteneur principal avec la classe CSS 'About_banner' */}
      <div className='About'> {/* Sous-conteneur avec la classe CSS 'About' */}
        <img src={About} alt="Bannière" /> {/* Image de la bannière avec une description textuelle pour l'accessibilité */}
      </div>
    </div>
  );
}
export default AboutBanner