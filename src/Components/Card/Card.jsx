import React, { useState, useEffect } from 'react';
import "./Card.css";
import Appartment from "./Appartment.jsx";

function Card() {
  const [cards, setCard] = useState([])

  useEffect(fetchCard, [])

  function fetchCard() {
    fetch("kasa.json")
      .then((res) => res.json())
      .then((res) => setCard(res))
      .catch(console.error);
  }

  return (
    <div className='Card'>
      {cards.map((card) => (
        <Appartment
          key={card.id}
          title={card.title}
          imagecard={card.cover}
          id={card.id}
        />
      ))}
    </div>
  );
}

export default Card;
