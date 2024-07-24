// Appartment.jsx

import React from 'react';
import "./Appartment.css";
import { Link } from "react-router-dom";

function Appartment(props) {
  return (
    <Link className='Appartment-link' to={`/Appart/${props.id}`}>
      <div className='Appartment'>
        <img src={props.imagecard} alt={props.title} />
        <h2 className='Card_Title'>{props.title}</h2>
      </div>
    </Link>
  );
}

export default Appartment;
