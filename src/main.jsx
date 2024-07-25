// Importation des modules nécessaires pour React et le routage
import React from 'react'; // Importation de la bibliothèque React
import { createRoot } from 'react-dom/client'; // Importation de la méthode createRoot pour rendre l'application
import App from './page/Accueil/App'; // Importation du composant App depuis le fichier Accueil
import About from './page/About/About'; // Importation du composant About depuis le fichier About
import Navbar from './Components/Nav/Navbar'; // Importation du composant Navbar depuis le dossier Components/Nav
import Footer from './Components/Footer/footer'; // Importation du composant Footer depuis le dossier Components/Footer
import Container from './Container'; // Importation du composant Container
import './page/Accueil/App.css'; // Importation du fichier CSS pour le style de App
import AppartPage from './page/Logement/AppartPage'; // Importation du composant AppartPage depuis le fichier Logement
import ErrorPage from './page/Error/ErrorPage'; // Importation du composant ErrorPage pour les pages d'erreur

import './index.css'; // Importation du fichier CSS global

// Importation des composants nécessaires pour le routage
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

// Composant qui sert de mise en page avec un en-tête (Navbar), un pied de page (Footer) et un espace pour le contenu (Container)
const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar /> {/* Affiche la barre de navigation en haut */}
      <Container> {/* Conteneur pour le contenu principal */}
        <Outlet /> {/* Espace où les routes enfants seront rendues */}
      </Container>
      <Footer /> {/* Affiche le pied de page en bas */}
    </>
  );
}

// Création du routeur avec les différentes routes et leurs composants associés
const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />, // Le composant de mise en page utilisé pour toutes les routes
    errorElement: <ErrorPage />, // Composant affiché en cas d'erreur
    children: [
      {
        path: "/", // Route pour la page d'accueil
        element: <App /> // Composant affiché pour la page d'accueil
      },
      {
        path: "/Appart/:appartId", // Route dynamique pour les pages d'appartements
        element: <AppartPage /> // Composant affiché pour les pages d'appartements
      },
      {
        path: "/About", // Route pour la page "À propos"
        element: <About /> // Composant affiché pour la page "À propos"
      },
    ],
  }
]);

// Rendu de l'application React en utilisant le routeur défini
createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Mode strict pour aider au développement */}
    <RouterProvider router={router} /> {/* Fournit le routeur à l'application */}
  </React.StrictMode>
);
