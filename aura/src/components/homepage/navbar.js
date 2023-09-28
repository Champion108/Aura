import React from 'react';
import { FaBars } from 'react-icons/fa';
import './navbar.css';

export default function Navbar() {
    return (
      <div className='navbar-home-page'>
        <div className="logo-home-page">
            <h1 className='logo'>AURA</h1>
        </div>

        <div className="cont"><FaBars className='bars'/></div>
      </div>
    )
  }