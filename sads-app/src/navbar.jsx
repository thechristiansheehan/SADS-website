import React from 'react';
import './navbar.css';
import logo from './assets/images/sads_logo_cropped.png';

const Navbar = () => {
  return (

 <nav className="navbar">
        <a title="Home" href="/" class="nav-link home-link"><img width="60px" src={logo} /></a>
        <div class="nav-links">
            <a href="about">About</a>
            <a href="calendar">Calendar</a>
            <a href="resources">Resources</a>
        </div>
    </nav>
);
};

export default Navbar;