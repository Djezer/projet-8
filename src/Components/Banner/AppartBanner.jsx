import React from 'react'
import "./AppartBanner.css"

function AppartBanner(props) {
  return (
    <div className='Appartbanner'>
    <img src={props.imageUrl} alt="" />
  </div>
  )
}

export default AppartBanner