import React from 'react'
//import bymas_logo from '../bymas-fondogris.png';
import logo_motorola from '../logo-motorola.png';

const Navbar = () => {
  return (
    <div className='nav'>
      {/*<img src={bymas_logo} className="bymas-logo" alt="logo"/>*/}
      <span>
        <img src={logo_motorola}/>
      </span>
      <span>Navbar de bymas spa</span>
    </div>
  )
}

export default Navbar
