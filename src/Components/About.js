import React from 'react'
// import AboutBackground from "..assets/about-background.png"
// import AboutBackgroundImage from "../assets/about-background-image-png"
import { BsFill0CircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            {/* <img src={AboutBackground} alt='' /> */}
        </div>
        <div>
            {/* <img src={AboutBackgroundImage} alt=''/> */}
        </div>
        <div className='about-section-text-container'>
          <p className='primary-subheading'>Nosotros</p>
          <h1 className='primary-heading'>De Mexico para Argentina</h1>
          <p className='primary-text'>
            hdhcklwhdfcweldk
          </p>
          <p className='primary-text'>
              ikjlkjdcflkdsfcldskw
          </p>
          <div className='about-buttons-container'>
            <button className='secondary-button'> learn More</button>
            <button className='watch-video-button'>
              {""}
              <BsFill0CircleFill/> Watch video
            </button>

          </div>
        </div>
    </div>
  )
}

export default About