import { Link } from 'react-router-dom';
import React from 'react'
import './navbar.css'

import logo from '../../logo.svg'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='logo'>
        <Link style={{display: 'flex'}} to={'/'}>
          <img src={logo} alt="APP_LOGO" width="40px" srcset="" />
        </Link>
      </ul>
        <ul className='navbar-nav'>
            {props.children}
        </ul>
    </nav>
  )
}

export default Navbar