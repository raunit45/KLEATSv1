import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <img src={assets.lugo} alt="Logo" className="logo" />

      {/* Mobile Menu Toggle Button */}
      <div className="navbar-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        ☰
      </div>

      <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
        <li className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</li>
        <li className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</li>
        <li className={menu === "About us" ? "active" : ""} onClick={() => setMenu("About us")}>About us</li>
        <li className={menu === "Contact-us" ? "active" : ""} onClick={() => setMenu("Contact-us")}>Contact us</li>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="cart icon" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
