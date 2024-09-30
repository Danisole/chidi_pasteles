import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonios = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonios</p>
        <h1 className="primary-heading">Que dicen de nosotros</h1>
        <p className="primary-text">
          Sabores que te transportan en un abrir y cerrar de ojos
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Chidi es una de las mejores propuestas mexicanas ya que explora sabores originales y los trae a nuestra Argentina para el deleite sin perder jamas el espiritu que quiere transmitir con sus sabores
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Juan Perez</h2>
      </div>
    </div>
  );
};

export default Testimonios;