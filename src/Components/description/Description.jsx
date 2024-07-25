import React, { useState } from 'react';
import './Description.css';

// Déclaration du composant fonctionnel Description
export function Description(props) {
  // Déclaration de l'état local ContentVisible, initialisé à false
  const [ContentVisible, setContentVisibile] = useState(false);

  // Fonction pour inverser la valeur de ContentVisible
  const Collapse = () => {
    setContentVisibile(!ContentVisible);
  };

  return (
    <div className="Appartment_description"> {/* Conteneur principal avec la classe CSS 'Appartment_description' */}
      <p className="Description_title"> {/* Conteneur pour le titre de la description avec la classe CSS 'Description_title' */}
        <span>{props.title}</span> {/* Affiche le titre passé via les props */}
        <i
          className={`fa-solid fa-chevron-up ${ContentVisible ? 'rotate' : ''}`} // Classe CSS conditionnelle pour la rotation de l'icône
          onClick={Collapse} // Ajout d'un gestionnaire d'événement onClick pour inverser ContentVisible
        ></i>
      </p>

      {ContentVisible && ( // Affiche le contenu seulement si ContentVisible est true
        <p className="Description_content"> {props.content}</p> // Contenu de la description passé via les props
      )}
    </div>
  );
}
export default Description;
