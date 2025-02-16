import React from 'react';
import './ExploreCanteens.css';
import { menu_list } from '../../assets/assets';

const ExploreCanteens = ({ category, setCategory }) => {
  const handleCategoryClick = (menuName) => {
    setCategory(prev => (prev === menuName ? "All" : menuName));

    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="explore-canteens" id="explore-canteens">
      <h1>Explore Canteens</h1>
      <p className="explore-canteens-text">
        Welcome to KL Eats, your one-stop platform for discovering and enjoying 
        the best food on campus at KL University, Vijayawada. To become a member, 
        please visit 
        <a href="https://kleats.in/member" target="_blank" rel="noopener noreferrer">
          kleats.in/member
        </a> 
        or find us at KL GLUG (C424). Orders available from KL ADDA and Naturals. 
        We are starting at US Pizza and Hostel Canteens soon.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div 
            onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))} 
            key={index} 
            className="explore-menu-list-item"
          >
            <img 
              className={category === item.menu_name ? "active" : ""} 
              src={item.menu_image} 
              alt={item.menu_name} 
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreCanteens;
