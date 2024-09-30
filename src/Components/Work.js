import React from 'react'
import Pastel3 from "../assets/pastel_1.png"
import Pastel2 from "../assets/pastel_2.png"
import Pastel1 from "../assets/pastel_3.png"

const Work = () => {

    const workInfoData = [
        {
          image: Pastel1,
          title: "Tres Leches",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          image: Pastel2,
          title: "Suspiro de Limon",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },
        {
          image: Pastel3,
          title: "Pan de Muerto",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
        },
    ]; 

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Nuestras Propuestas</p>
            <h1 className='primary-heading'>Especialidades</h1>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
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