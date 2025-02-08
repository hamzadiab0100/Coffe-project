import React from 'react'
import './Home.css';
import Slider from '../components/Slider';
import Hero from '../components/Hero';
import Menue from '../components/Menue';
import Gallery from '../components/Gallery';
import ContactUs from '../components/ContactUs';

function Home() {

  return (
    <div>
      <Hero/>
      <Menue/>
      <Gallery/> 
      <Slider/>
      <ContactUs/>
    </div>
  )
}

export default Home