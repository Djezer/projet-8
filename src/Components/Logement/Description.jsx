import React, { useState } from 'react'
import "./Description.css"

export function Description (props) {

 const [ContentVisible,setContentVisibile] = useState(false)

 const Collapse = () => {
   setContentVisibile(!ContentVisible)
 }

  return (
    <div className="Appartment_description">
            <p className='Description_title'>
              <span>{props.title}</span>
              <i className="fa-solid fa-chevron-up" onClick={Collapse}></i>
            </p>

           {ContentVisible && <p className='Description_content'> {props.content}</p>}
          </div>
  )
}

export default Description