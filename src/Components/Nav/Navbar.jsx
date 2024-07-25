import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO/LOGO.png"

// Déclaration du composant fonctionnel Navbar
function Navbar() {
  return (
    <nav className='Navbar'> {/* Élément de navigation principal avec la classe CSS 'Navbar' */}
      <div className='Navbar_logo'> {/* Conteneur pour le logo */}
        <img src={Logo} alt="Logo" /> {/* Affichage de l'image du logo avec le texte alternatif 'Logo' */}
      </div>
      <NavLink to="/" >Accueil</NavLink> {/* Lien de navigation vers la page d'accueil */}
      <NavLink to="/about"> {/* Lien de navigation vers la page "À propos" */}
        <div>A Propos</div> {/* Texte pour le lien "À propos" */}
      </NavLink>
    </nav>
  );
}

export default Navbar;