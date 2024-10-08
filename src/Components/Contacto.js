import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contacto">
      <p className="primary-subheading">Contacto</p>
      <h1 className="primary-heading">¿Tienes alguna pregunta?</h1>
      <h1 className="primary-heading">Te ayudamos</h1>
      <form className="contact-form-container" action="https://formsubmit.co/danisole82@gmail.com" method="POST">
        
        <input type="text" placeholder="Envia tu consulta..." />
        <button type="submit" className="secondary-button">Enviar</button>

        <input type="hidden" name="_next" value="http://localhost:3001/"/>
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
  );
};

export default Contact;