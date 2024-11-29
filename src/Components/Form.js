import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.provincias) {
          setProvincias(data.provincias); // Actualiza el estado con la lista de provincias
        }
      })
      .catch((error) => {
        console.error("Error al cargar las provincias:", error);
      });
  }, []);

  return (
    <div className="contact-page-wrapper" id="contacto">
       <p className="primary-subheading">Contacto</p>
      <h1 className="primary-heading">¿Tienes alguna pregunta?</h1>
      <h1 className="primary-heading">Te ayudamos</h1>
      <form onSubmit={handleSubmit(onSubmit)}  className="contact-form-container" >
        <div>
          <label>Nombre</label>
          <input type='text' {...register('nombre')} />
        </div>
        <div>
          <label>Mail</label>
          <input type='email' {...register('email')} />
        </div>
        <div>
          <label>Provincia</label>
          <select {...register('provincia')}>
            <option value="">Seleccione una provincia</option>
            {provincias.map((prov) => (
              <option key={prov.id} value={prov.nombre}>
                {prov.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Consulta</label>
          <input type='text' {...register('consulta')} />
        </div>
        <button type="submit" className="secondary-button">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
