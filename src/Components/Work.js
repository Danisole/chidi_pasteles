import React, { useState } from 'react';
import Pastel3 from "../assets/pastel_1.png";
import Pastel2 from "../assets/pastel_2.png";
import Pastel1 from "../assets/pastel_3.png";
import Pastel4 from "../assets/pastel_4.jpg";
import Pastel5 from "../assets/pastel_5.jpg";
import Pastel6 from "../assets/pastel_6.jpg";

const Work = () => {
  const [cart, setCart] = useState([]);

  const workInfoData = [
    {
      image: Pastel1,
      title: "Tres Leches",
      text: "Bizcocho húmedo bañado en leche evaporada, condensada y crema, coronado con nata. Un clásico irresistible.",
      price: 500,
    },
    {
      image: Pastel2,
      title: "Suspiro de Limón",
      text: "Postre cremoso con manjar blanco y merengue suave, perfumado con canela. Dulzura auténtica.",
      price: 450,
    },
    {
      image: Pastel3,
      title: "Pan de Muerto",
      text: "Pan esponjoso con esencia de azahar, cubierto de azúcar. Tradicional en la festividad mexicana.",
      price: 300,
    },
    {
      image: Pastel4,
      title: "Chocoflan",
      text: "Un postre mágico que combina flan cremoso y pastel de chocolate en un solo bocado irresistible.",
      price: 600,
    },
    {
      image: Pastel5,
      title: "Tarta de Fresas",
      text: "Base crujiente con crema pastelera, decorada con fresas frescas y un toque de gelatina brillante.",
      price: 550,
    },
    {
      image: Pastel6,
      title: "Conchas",
      text: "Pan dulce mexicano con cobertura azucarada en forma de concha. Ideal para el desayuno o merienda.",
      price: 200,
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className='work-section-wrapper' id='work'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Especialidades</p>
        <h1 className='primary-heading'>Nuestras Propuestas</h1>
        <p className='primary-text'>
          Te presentamos algunas de las especialidades que nos destacan
        </p>
      </div>
      <div className='work-section-bottom'>
        {workInfoData.map((data) => (
          <div className='work-section-info' key={data.title}>
            <div className='info-boxes-img-container'>
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <p>Precio: ${data.price}</p>
            <button
              className='secondary-button'
              onClick={() => addToCart(data)}
            >
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
      <div className='cart-section'>
        <h2>Carrito de Compras</h2>
        {cart.length > 0 ? (
          <div>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.title} - ${item.price} 
                  <button onClick={() => removeFromCart(index)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </div>
    </div>
  );
};

export default Work;
