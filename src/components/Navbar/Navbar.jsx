import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { CartContext } from '../../App';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  // Calculate total items in cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const scrollToSection = (sectionId, menuItem) => {
    setMenu(menuItem);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="navbar">
      <img 
        src={assets.lugo} 
        alt="Logo" 
        className="logo" 
        onClick={() => scrollToSection('home', 'Home')}
      />

      {/* Mobile Menu Toggle Button */}
      <div className="navbar-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        ☰
      </div>

      <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
        <li 
          className={menu === "Home" ? "active" : ""} 
          onClick={() => scrollToSection('home', 'Home')}
        >
          Home
        </li>
        <li 
          className={menu === "Menu" ? "active" : ""} 
          onClick={() => scrollToSection('explore-canteens', 'Menu')}
        >
          Menu
        </li>
        <li 
          className={menu === "Our Team" ? "active" : ""} 
          onClick={() => scrollToSection('members-section', 'Our Team')}
        >
          Our Team
        </li>
        <li 
          className={menu === "Contact-us" ? "active" : ""} 
          onClick={() => scrollToSection('footer', 'Contact-us')}
        >
          Contact us
        </li>
      </ul>

      <div className="navbar-right">
        <Link to="/cart" className="cart-icon-container">
          <img src={assets.basket_icon} alt="Cart" className="cart-icon" />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
        <Link to="/signin" className="signin-link">Sign In</Link>
      </div>
    </div>
  );
};

export default Navbar;
