import React, { useState } from 'react'
// import Logo from '../assets/logo.png'
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
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


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon/>
        },
        {
            text: "Nosotros",
            icon: <InfoIcon/>
        },
        {
            text: "Testimonios",
            icon: <CommentRoundedIcon/>
        },
        {
            text: "Contacto",
            icon: <PhoneRoundedIcon/>
        }
    
    ]

  return <nav>

    <div className='navbar-logo-container'>
        {/* <a href='/'><img src={Logo} alt='logo'/></a> */}
    </div>
    <div className='navbar-links-container'>
        <a href='/'>Home</a>
        <a href='/'>Nosotros</a>
        <a href='/'>Especialidades</a>
        <a href='/'>Testimonios</a>
        <a href='/'>Contacto</a>
    </div>
    <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={()=> setOpenMenu(true)}/>
    </div>
    <Drawer open={openMenu} onClose={()=> setOpenMenu(false)}
    anchor='right'>
        <Box 
            sx={{ width:250 }}
            role="presentation"
            onClick={()=> setOpenMenu(false)}
            onKeyDown={()=> setOpenMenu(false)}
        >
            <List>
                {menuOptions.map((item)=>(
                   <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}></ListItemText>
                    </ListItemButton>
                   </ListItem> 
                ))}
            </List>

        </Box>
    </Drawer>




  </nav>
}

export default Navbar