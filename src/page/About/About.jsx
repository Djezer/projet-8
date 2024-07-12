import React from 'react'
import AboutBanner from '../../Components/Banner/AboutBanner.jsx'
import Description from '../../Components/Logement/Description.jsx'
import "./About.css"


function About(props) {
  return (
    <div >
        <AboutBanner />
        <div className='About_container'>
        <Description title = "Fiabilité" content/>
        <Description title = "Respect"/>
        <Description title = "Service"/>
        <Description title = "Responsabilité"/>
        </div>
    </div>
  )
}

export default About