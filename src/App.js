import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Work from './Components/Work';
import Testimonios from './Components/Testimonios';
import Contact from './Components/Contacto';
import WhatsappBtn from './Components/Whatsapp';
import Form from './Components/Form';


function App() {
  return (
    <>
      <WhatsappBtn/>
      <Home/>
      <About/>
      <Work/>
      <Testimonios/>
      <Form/>
      {/* <Contact/> */}
      <Footer/>
    </>
    
  );
}

export default App;
