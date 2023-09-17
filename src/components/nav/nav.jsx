import React from 'react';
import './nav.css'; 
import logo from '../../assets/logo2.png'; 

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
