import React from 'react';
import "./ErrorPage.css";
import Navbar from '../../Components/Nav/Navbar';
import Container from '../../Container';
import Footer from '../../Components/Footer/footer'; // Assure-toi que le chemin est correct
import { Link } from 'react-router-dom'; // Import du composant Link depuis react-router-dom

function ErrorPage() {
  return (
    <>
      <Navbar /> {/* Affiche la barre de navigation en haut */}
      <Container>
        <div className='Error'>
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas</h2>
          <Link to="/">Retournez sur la page d'accueil</Link>
        </div>
      </Container>
      <Footer /> {/* Ajoute le pied de page en bas */}
    </>
  );
}

export default ErrorPage;
