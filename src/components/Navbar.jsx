import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container"> 
      <ul>
        <li className="navElement"><Link to="/">Home</Link></li>
        <li className="navElement"><Link to="/profile">Profile</Link></li>
        <li className="navElement"><Link to="/creation">Creation</Link></li>
        {/* <li><Link to="/login">Registry</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
