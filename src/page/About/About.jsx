import React from 'react'
import AboutBanner from '../../Components/Aboutbanner/AboutBanner.jsx'
import Description from '../../Components/description/Description.jsx'
import "./About.css"


// Déclaration du composant fonctionnel About
function About() {
  return (
    <div>
      <AboutBanner /> {/* Affiche la bannière spécifique à la page "À propos" */}
      <div className='About_container'> {/* Conteneur pour les sections de description, avec une classe CSS spécifique */}
        {/* Composant Description affichant les barre rouge*/}
        <Description
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />

        <Description
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />

        <Description
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />

        <Description
          title="Responsabilité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}

export default About; // Exportation du composant pour qu'il puisse être utilisé ailleurs
