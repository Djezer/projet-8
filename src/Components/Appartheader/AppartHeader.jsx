import React from 'react';
import "./AppartHeader.css";

function AppartHeader(props) {
  // Vérifie si props.flat est null ou non défini
  if (!props.flat) {
    return null; // Si c'est le cas, retourne null pour éviter l'erreur
  }

  const name = props.flat.host.name
  const [firstName, lastName] = name.split(" ");

  return (
    <div className='Appart_Info'> {/* Conteneur principal des informations de l'appartement */}
      <div className='Appart_Title_Container'> {/* Conteneur pour le titre et la localisation */}
        <h1>{props.flat.title}</h1> {/* Affiche le titre de l'appartement */}
        <h2>{props.flat.location}</h2> {/* Affiche la localisation de l'appartement */}
        <div className='Appart_Tags'> {/* Conteneur pour les tags */}
          {props.flat.tags.map((tag, index) => (
            <span key={index}>{tag}</span> //* Affiche chaque tag */ 
          ))}
        </div>
      </div>
      <div className="Appart_statut"> {/* Conteneur pour les informations de l'hôte et la note */}
        <div className='Appart_Owner'> {/* Conteneur pour les informations de l'hôte */}
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="Appart_badge"></div> {/* Badge de l'hôte */}
          <img src={props.flat.host.picture} alt="" /> {/* Affiche la photo de l'hôte */}
        </div>
        <div className='Appart_rate'> {/* Conteneur pour la note */}
          {[1, 2, 3, 4, 5].map((rate) => (
            <span key={rate} className={props.flat.rating >= rate ? "On" : ""}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppartHeader;
