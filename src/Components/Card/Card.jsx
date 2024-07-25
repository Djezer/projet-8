import React, { useState, useEffect } from 'react';
import "./Card.css";
import Appartment from "./Appartment.jsx";

function Card() {
  const [cards, setCard] = useState([]); // Initialisation de l'état cards avec un tableau vide

  useEffect(fetchCard, []); // Appel de fetchCard au premier rendu du composant

  // Fonction pour récupérer les données depuis kasa.json
  function fetchCard() {
    fetch("kasa.json") // Effectue une requête pour obtenir le fichier kasa.json
      .then((res) => res.json()) // Convertit la réponse en JSON
      .then((res) => setCard(res)) // Met à jour l'état cards avec les données reçues
      .catch(console.error); // Gère les erreurs éventuelles
  }

  return (
    <div className='Card'> {/* Conteneur principal avec la classe CSS 'Card' */}
      {cards.map((card) => ( // Itère sur le tableau cards
        <Appartment
          key={card.id} // Clé unique pour chaque élément
          title={card.title} // Passe le titre de la carte en prop
          imagecard={card.cover} // Passe l'image de la carte en prop
          id={card.id} // Passe l'id de la carte en prop
        />
      ))}
    </div>
  );
}
export default Card;
