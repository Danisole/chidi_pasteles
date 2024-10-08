import React from "react";
// import Logo from '../assets/logo.png'
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
     <> 
        <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
            {/* <img src={Logo} alt="" /> */}
            </div>
            <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
            <a href='#home'>Home</a>
            <a href='#about'>Nosotros</a>
            <a href='#work'>Especialidades</a>
            <a href='#testimonios'>Testimonios</a>
            <a href='#contacto'>Contacto</a>
            </div>
            <div className="footer-section-columns">
                <span>264-5333-7783</span>
                <span>chidimail@gmail.com</span>
            </div>
        </div>
        </div>
        <div className="footer-section-tree">
            <span>Copyright © 2024 Chidi Pasteleria</span>
            <span>All rights reserved</span>
        </div>
    </>
  );
};

export default Footer;