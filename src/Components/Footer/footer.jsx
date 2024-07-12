import React from 'react'
import './Footer.css'
import Logo from "../../assets/LOGO/logo_footer.png"

function Footer() {
  return (
    <div className='footer'>
    <div className='footer_logo'>
        <img src={Logo} alt="logo kasa" width={100} />
    </div>
    <div className='footer_text'>© 2020 Kasa.All right reserved</div>

</div>
  )
}

export default Footer