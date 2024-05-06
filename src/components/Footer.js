import React from 'react'
import bymas_logo from '../bymas-fondogris.png';
import Whatsapp from './Whatsapp';

const Footer = () => {
  return (
    <div className='footer'>
      <h1>Contáctanos</h1>
      <img src={bymas_logo} className="bymas-logo" alt="logo"/>
      <Whatsapp></Whatsapp>
    </div>
  )
}

export default Footer
