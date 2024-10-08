import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Mostrar el SweetAlert
    Swal.fire({
      title: 'Consulta enviada!',
      text: 'Nos pondremos en contacto contigo pronto.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      
      document.getElementById("contactForm").submit(); 
    });
  };

  return (
    <div className="contact-page-wrapper" id="contacto">
      <p className="primary-subheading">Contacto</p>
      <h1 className="primary-heading">¿Tienes alguna pregunta?</h1>
      <h1 className="primary-heading">Te ayudamos</h1>

      <form 
        className="contact-form-container" 
        action="https://formsubmit.co/danisole82@gmail.com" 
        method="POST" 
        id="contactForm"
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="Envia tu consulta..." required />
        <button type="submit" className="secondary-button">Enviar</button>

        <input type="hidden" name="_next" value="http://localhost:3001/"/>
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
  );
};

export default Contact;