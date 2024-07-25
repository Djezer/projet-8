
import React from 'react';
import "./Appartment.css";
import { Link } from "react-router-dom";

function Appartment(props) {
  return (
    <Link className='Appartment-link' to={`/Appart/${props.id}`}> {/* Création d'un lien avec la classe CSS 'Appartment-link' qui navigue vers la route basée sur l'ID de l'appartement */}
      <div className='Appartment'> {/* Conteneur principal avec la classe CSS 'Appartment' */}
        <img src={props.imagecard} alt={props.title} /> {/* Image de l'appartement avec une description textuelle pour l'accessibilité */}
        <h2 className='Card_Title'>{props.title}</h2> {/* Titre de l'appartement avec la classe CSS 'Card_Title' */}
      </div>
    </Link>
  );
}

export default Appartment;
