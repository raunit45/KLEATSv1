import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreCanteens from '../../components/ExploreCanteens/ExploreCanteens'

import Members from '../../components/Members/Members'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Kl-eats</h1>
          <p>Discover the Perfect KL-eats for Your Game</p>
          <button className="shop-now-btn">Explore Canteens</button>
        </div>
      </div>

      <div className="features-section">
        <div className="feature">
          <i className="fas fa-shipping-fast"></i>
          <h3>Pre Order</h3>
          <p>Pre Order your favourite food from Kleats</p>
        </div>
        <div className="feature">
          <i className="fas fa-undo"></i>
          <h3>Skip The Queue</h3>
          <p>Enjoy your food at your time </p>
        </div>
        <div className="feature">
          <i className="fas fa-lock"></i>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
      </div>

      <ExploreCanteens />
      
      <Members />
      
      

      <Footer />
    </div>
  )
}

export default Home