// AppartBanner.jsx
import React, { useState } from 'react';
import './AppartBanner.css';
import ArrowR from '../../assets/Carrousel/flech-right.png';
import ArrowL from '../../assets/Carrousel/flech-left.png';

function AppartBanner({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Déclaration de l'état pour gérer l'index courant de l'image

  // Vérifie si le tableau d'images est vide et affiche un message s'il n'y a pas d'images
  if (images.length === 0) {
    return <div>Pas d'images disponibles</div>;
  }

  // Fonction pour passer à l'image précédente
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour passer à l'image suivante
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Rendu du composant
  return (
    <div className='AppartBanner'> {/* Conteneur principal avec la classe CSS 'AppartBanner' */}
      <img
        src={ArrowL}
        alt="Previous"
        className='carousel-button prev'
        onClick={goToPrevious} // Gestionnaire d'événements pour la flèche gauche
      />
      <div className='carousel-container'> {/* Conteneur pour l'image du carrousel */}
        <img src={images[currentIndex]} alt="Appartement" className='carousel-image' /> {/* Image de l'appartement */}
      </div>
      <img
        src={ArrowR}
        alt="Next"
        className='carousel-button next'
        onClick={goToNext} // Gestionnaire d'événements pour la flèche droite
      />
      <div className='carousel-counter'> {/* Compteur pour l'image courante */}
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
}

export default AppartBanner;
