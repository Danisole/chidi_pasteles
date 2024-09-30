import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const WhatsappBtn = () => {
  return (
    <div>
        <FloatingWhatsApp  phoneNumber="+5492645042782"
        accountName="Chidi Pasteleria"
        statusMessage='Contesta en unos instantes'
        chatMessage='Bienvenido! Indicanos como podemos ayudarte'
        placeholder='Escribe tu mensaje'
        allowEsc
        allowClickAway
        notification
        notificationSound/>
    </div>
  )
}

export default WhatsappBtn