import React from 'react';
import logo from "../images/logo.png";
import "./navbar.css"

const NavBar = () => {
  return (
    <div>
        <nav className='nav'>
            <img src={logo} width='90px' />
          
        </nav>
    </div>
  )
}

export default NavBar