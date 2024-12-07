import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const Form = () => {
  const { 
    register, 
    formState: { errors }, 
    handleSubmit 
  } = useForm();
  
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.provincias) {
          setProvincias(data.provincias); 
        }
      })
      .catch((error) => {
        console.error("Error al cargar las provincias:", error);
      });
  }, []);

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <div className="contact-page-wrapper" id="contacto">
      <p className="primary-subheading">Contacto</p>
      <h1 className="primary-heading">¿Tienes alguna pregunta?</h1>
      <h1 className="primary-heading">Te ayudamos</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form-container">
        
        <div>
          {/* <label>Nombre y Apellido</label> */}
          <input 
            type="text" 
            placeholder='Apellido y Nombre'
             {...register("nombre", { 
              required: "El campo nombre es requerido", 
              maxLength: { value: 20, message: "El nombre debe tener hasta 20 caracteres" }, 
              minLength: { value: 3, message: "El nombre debe tener más de 3 caracteres" } 
            })} 
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
        </div>

        
        <div>
          {/* <label>Mail</label> */}
          <input 
            type="email" 
            placeholder='Mail'
            {...register("email", { 
              required: "El campo email es requerido" 
            })} 
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Provincia</label>
          <select 
            {...register("provincia", { 
              validate: value => value !== "" || "Debe seleccionar al menos una provincia"
            })}
          >
            <option value="">Seleccione una provincia</option>
            {provincias.map((prov) => (
              <option key={prov.id} value={prov.nombre}>
                {prov.nombre}
              </option>
            ))}
          </select>
          {errors.provincia && <p>{errors.provincia.message}</p>}
        </div>

        <div>
          <label>Consulta</label>
          <textarea 
            {...register("consulta", { 
              required: "El campo consulta es requerido", 
              minLength: { value: 5, message: "La consulta debe tener al menos 5 caracteres" } 
            })} 
          />
          {errors.consulta && <p>{errors.consulta.message}</p>}
        </div>

        <button type="submit" className="secondary-button">Enviar</button>
      </form>
    </div>
  );
};

export default Form;

