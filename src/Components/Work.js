import React from 'react'
import Pastel3 from "../assets/pastel_1.png"
import Pastel2 from "../assets/pastel_2.png"
import Pastel1 from "../assets/pastel_3.png"

const Work = () => {

    const workInfoData = [
        {
          image: Pastel1,
          title: "Tres Leches",
          text: "Bizcocho húmedo bañado en leche evaporada, condensada y crema, coronado con nata. Un clásico irresistible.",
        },
        {
          image: Pastel2,
          title: "Suspiro de Limon",
          text: "Postre cremoso con manjar blanco y merengue suave, perfumado con canela. Dulzura auténtica.",
        },
        {
          image: Pastel3,
          title: "Pan de Muerto",
          text: "Pan esponjoso con esencia de azahar, cubierto de azúcar. Tradicional en la festividad mexicana.",
        },
    ]; 

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Especialidades</p>
            <h1 className='primary-heading'>Nuestras Propuestas</h1>
            <p className='primary-text'>
            Te presentamos algunas de las especialidades que nos destacan
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data)=>(
                <div className='work-section-info' key={data.title}>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt=''/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>

            ))}

        </div>
    </div>
  )
}

export default Work