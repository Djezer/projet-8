import React from 'react';
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/LOGO/LOGO.png"

function Navbar() {
 
  return (
    <nav className='Navbar'>
        <div className='Navbar_logo'>
            <img src={Logo} alt="Logo" />
        </div>
        <NavLink to="/" >Accueil</NavLink>
        <NavLink to="/about">
        <div>A Propos</div>
        </NavLink>
    </nav>
  )
}

export default Navbar;