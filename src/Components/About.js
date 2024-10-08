import React from 'react'
import AboutBackground from "../assets/about-background.png"
import AboutBackgroundImage from "../assets/about-background-image.png"
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className='about-section-container' id='about'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt='' />
        </div>
        <div>
            <img src={AboutBackgroundImage} alt=''/>
        </div>
        <div className='about-section-text-container'>
          <p className='primary-subheading'>Nosotros</p>
          <h1 className='primary-heading'>De Mexico para Argentina</h1>
          <p className='primary-text'>
          Familia mexicana amante de la pastelería, llegamos a Argentina para compartir nuestros sabores
          </p>
          <p className='primary-text'>
          Chidi fusiona nuestras raíces con toques argentinos, creando delicias que celebran nuestra historia
          </p>
          <div className='about-buttons-container'>
            <button className='secondary-button'>
             <a href="https://azapflores.com/blogs/noticias/origen-y-significado-del-pan-de-muerto#:~:text=Es%20una%20forma%20de%20honrar,los%20vivos%20y%20los%20muertos." 
              target="_blank"  
              rel="noopener noreferrer"
              style={{textDecoration: 'none', color: "#f6f6f6"}}>Saber mas...
              </a> 
            </button>
            <a 
            href="https://youtube.com/shorts/6aD-980vPCA?si=G9hPPCZdy8FxjNRT" 
            target="_blank"  
            rel="noopener noreferrer"
            style={{textDecoration: 'none', color: "#f6f6f6"}} 
  >
            <button className='watch-video-button'>
              {""}
              <BsFillPlayCircleFill/>Video
            </button>
          </a>

          </div>
        </div>
    </div>
  )
}

export default About