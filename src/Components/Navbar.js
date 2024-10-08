import React, { useState, useEffect } from 'react';
import Logo from './assets/logo.png'
import { HiOutlineBars3 } from "react-icons/hi2";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { BsCart2 } from "react-icons/bs";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);
  
    // Opciones del menú
    const menuOptions = [
      {
        text: "Home",
        id: "#home",
        icon: <HomeIcon />
      },
      {
        text: "Nosotros",
        id: "#about",
        icon: <InfoIcon />
      },
      {
        text: "Especialidades",
        id: "#work",
        icon: <MenuBookIcon />
      },
      {
        text: "Testimonios",
        id: "#testimonios",
        icon: <CommentRoundedIcon />
      },
      {
        text: "Contacto",
        id: "#contacto",
        icon: <PhoneRoundedIcon />
      }
    ];
  
    // Función para manejar el clic de cada opción del menú
    const handleMenuClick = (id) => {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setOpenMenu(false); // Cierra el menú después de seleccionar una opción
    };
  
    // Función para el botón "scroll to top"
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    // Mostrar el botón de scroll al hacer scroll
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav>
        <div className='navbar-logo-container'>
          {/* Aquí puedes poner tu logo */}
        </div>
  
        {/* Links para la vista normal de la navbar */}
        <div className='navbar-links-container'>
          <a href='#home'>Home</a>
          <a href='#about'>Nosotros</a>
          <a href='#work'>Especialidades</a>
          <a href='#testimonios'>Testimonios</a>
          <a href='#contacto'>Contacto</a>
        </div>
  
        {/* Menú responsivo con ícono de hamburguesa */}
        <div className='navbar-menu-container'>
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
  
        {/* Drawer para el menú en modo móvil */}
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor='right'
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton onClick={() => handleMenuClick(item.id)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
  
        {/* Botón de Scroll To Top */}
        {showScrollButton && (
          <button className="scroll-to-top-btn" onClick={scrollToTop}>
            <ArrowUpwardIcon />
          </button>
        )}
      </nav>
    );
  };
  
  export default Navbar;