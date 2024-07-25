// AppartPage.jsx
import React, { useEffect, useState } from 'react';
import "./AppartPage.css";
import Description from '../../Components/description/Description.jsx';
import AppartBanner from '../../Components/Appartbanner/AppartBanner.jsx';
import AppartHeader from '../../Components/Appartheader/AppartHeader.jsx';
import { useNavigate, useParams } from 'react-router-dom';

function AppartPage() {
  const { appartId } = useParams(); // Obtient l'ID de l'appartement depuis les paramètres de l'URL
  const [selectedFlat, setSelectedFlat] = useState(null); // État pour stocker les données de l'appartement sélectionné
  const navigate = useNavigate(); // Fonction pour naviguer entre les routes

  useEffect(() => {
    fetchAppartdata(); // Appelle la fonction pour récupérer les données de l'appartement lorsque le composant est monté
  }, []); // Le tableau vide [] indique que l'effet se déclenche uniquement lors du premier rendu

  function fetchAppartdata() {
    fetch("/kasa.json") // Fait une requête pour récupérer les données depuis un fichier JSON
      .then((res) => res.json()) // Convertit la réponse en JSON
      .then((flats) => {
        const selectedFlat = flats.find(flat => flat.id === appartId); // Cherche l'appartement correspondant à l'ID
        if (!selectedFlat) { // Si aucun appartement n'est trouvé
          return navigate("/Error"); // Navigue vers la page d'erreur
        }
        setSelectedFlat(selectedFlat); // Met à jour l'état avec les données de l'appartement sélectionné
      })
      .catch(console.error); // Gère les erreurs éventuelles
  }

  if (!selectedFlat) return <div>Loading...</div>; // Affiche un message de chargement si les données de l'appartement ne sont pas encore disponibles

  return (
    <div className='AppartPage'> {/* Conteneur principal de la page */}
      {selectedFlat.pictures && <AppartBanner images={selectedFlat.pictures} />} {/* Affiche la bannière si les images de l'appartement sont disponibles */}
      <AppartHeader flat={selectedFlat} /> {/* Affiche les détails de l'appartement */}
      <div className='Bottom_area'> {/* Conteneur pour la description et les équipements */}
        {selectedFlat && <Description title="Description" content={selectedFlat.description} />} {/* Affiche la description de l'appartement */}
        {selectedFlat && <Description title="Equipement" content={selectedFlat.equipments.map((equip, index) => <li key={index}>{equip}</li>)} />} {/* Affiche les équipements sous forme de liste */}
      </div>
    </div>
  );
}

export default AppartPage;
