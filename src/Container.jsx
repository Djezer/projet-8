import React from 'react'; // Importation de la bibliothèque React
import "./Container.css"; // Importation du fichier CSS pour les styles du composant Container

// Déclaration du composant fonctionnel Container
function Container({ children }) {
  return (
    <div className='Container'> {/* Élément div avec la classe CSS 'Container' */}
      {children} {/* Rend le contenu passé en tant qu'enfants du composant */}
    </div>
  );
}

export default Container; // Exportation du composant pour qu'il puisse être utilisé dans d'autres fichiers
