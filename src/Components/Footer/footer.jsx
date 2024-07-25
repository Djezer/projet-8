import React from 'react'
import './Footer.css'
import Logo from "../../assets/LOGO/logo_footer.png"

function Footer() {
  return (
    <div className='footer'> {/* Conteneur principal du pied de page avec la classe CSS 'footer' */}
      <div className='footer_logo'> {/* Conteneur pour le logo avec la classe CSS 'footer_logo' */}
        <img src={Logo} alt="logo kasa" width={100} /> {/* Image du logo avec une description textuelle pour l'accessibilité et une largeur de 100 pixels */}
      </div>
      <div className='footer_text'>© 2020 Kasa. All rights reserved</div> {/* Texte du pied de page avec la classe CSS 'footer_text' */}
    </div>
  );
}


export default Footer