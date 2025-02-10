import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreCanteens from '../../components/ExploreCanteens/ExploreCanteens'
import AboutUs from '../../components/Aboutus/Aboutus'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Header/>
        <ExploreCanteens/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default Home