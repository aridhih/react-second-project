import React from "react";
import "./Navbar.css";
import brandImage from "../Assets/brand-logo.png";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
        <img src={brandImage} alt="brand logo" />
        </div>
        <div className="ul">
            <ul >
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="btn-div">
            <button className="btn">Login</button>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
