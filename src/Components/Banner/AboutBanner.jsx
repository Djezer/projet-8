import React from 'react'
import "./AboutBanner.css"
import About from '../../assets/Banniere/Banner2.jpg'

function AboutBanner() {
  return (
    <div className='Aboutbanner'>
      <div className='About'>
        <img src={About} alt="Bannière" />
      </div>
    </div>
  )
}

export default AboutBanner