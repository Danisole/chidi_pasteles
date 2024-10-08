import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../assets/homeBannerBackground.png'
import { FiArrowRight } from 'react-icons/fi' 
import BannerImage  from '../assets/home-banner-image.png'

const Home = () => {
  return (
    <div className='home-container' id='home'>
        <Navbar/>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt=''/>
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'> 
                Pasteles con toques mexicanos en el corazón de Argentina
                </h1>
                <p className='primary-text'>
                    Pasteleria artesanal con alma mexicana hechos en Argentina 
                </p>
                <button className='secondary-button'>
                    <a href='#contacto'  style={{textDecoration: 'none', color: "#f6f6f6"}}>Contactanos</a><FiArrowRight/>
                </button>


            </div>
            <div className='home-image-container'>
                <img src={BannerImage} alt='portada'/>

            </div>
        </div>
    </div>
  )
}

export default Home