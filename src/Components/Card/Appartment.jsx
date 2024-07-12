// Appartment.jsx

import React from 'react';
import "./Appartment.css";
import { Link } from "react-router-dom";

function Appartment(props) {
  return (
    <Link to={`/Appart/${props.id}`}>
      <div className='Appartment' style={{ backgroundImage: `url(${props.imagecard})` }}>
        <div className='Card_Title'>{props.title}</div>
      </div>
    </Link>
  );
}

export default Appartment;
