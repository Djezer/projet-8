import React, { useEffect, useState } from 'react';
import "./AppartPage.css";
import Description from '../../Components/description/Description.jsx';
import AppartBanner from '../../Components/Banner/AppartBanner.jsx';
import AppartHeader from '../../Components/header/AppartHeader.jsx';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function AppartPage() {
  const { appartId } = useParams();
  const [selectedFlat, setSelectedFlat] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    fetchAppartdata();
  }, []);

  function fetchAppartdata() {
    fetch("/kasa.json")
      .then((res) => res.json())
      .then((flats) => {
        console.log(flats)
        const selectedFlat = flats.find(flat => flat.id === appartId);
        if (!selectedFlat) {
          return navigate("/Error")
        }
        setSelectedFlat(selectedFlat);
      })
      .catch(console.error);
  }
  console.log(appartId)
  if (!selectedFlat) return <div>test</div>
  return (
    <div className='AppartPage'>
      {selectedFlat && <AppartBanner imageUrl={selectedFlat.cover} />}
      <AppartHeader flat={selectedFlat} />
      <div className='Bottom_area'>
        {selectedFlat && <Description title="Description" content={selectedFlat.description} />}
        {selectedFlat && <Description title="Equipement" content={selectedFlat.equipments.map(equipments => <li>{equipments}</li>)} />}
      </div>
    </div>
  );
}

export default AppartPage;
