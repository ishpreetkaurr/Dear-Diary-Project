// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="c" style={{fontFamily: "Alex Brush"}}>
        <a href="#pic">Home</a>
        <a href="#sec2">Menstrual Cycle</a>
        <Link to="/" className="logo"></Link>
        <a href="#sec3">Phases</a>
        <a href="#sec4">Track</a>
      </div>
    </nav>
  );
};

export default Navbar;
