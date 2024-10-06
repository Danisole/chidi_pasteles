import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <p className="primary-subheading">Contacto</p>
      <h1 className="primary-heading">¿Tienes alguna pregunta?</h1>
      <h1 className="primary-heading">Te ayudamos</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="chidimail@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;