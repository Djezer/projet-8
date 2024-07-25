import React from 'react'; // Importation de la bibliothèque React
import HomeBanner from '../../Components/Homebanner/HomeBanner.jsx'; // Importation du composant HomeBanner pour la bannière de la page d'accueil
import Card from '../../Components/Card/Card.jsx'; // Importation du composant Card pour afficher des cartes de contenu
import "./App.css"; // Importation du fichier CSS pour les styles spécifiques à ce composant

// Déclaration du composant fonctionnel App
function App() {
  return (
    <main> {/* Élément principal pour encapsuler le contenu de la page d'accueil */}
      <HomeBanner /> {/* Composant pour afficher une bannière en haut de la page */}
      <Card /> {/* Composant pour afficher des cartes de contenu */}
    </main>
  );
}

export default App; // Exportation du composant pour qu'il puisse être utilisé ailleurs
