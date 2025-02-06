import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container"> 
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/creation">Creation</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
