import React, {useState} from "react";
import Logo from "../assets/Logo.svg"
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import {Box, Drawer, ListItem, ListItemIcon, ListItemText, List} from "@material-ui/core";
import {Home, Info, CommentRounded, PhoneRounded, ShoppingCartRounded} from "@material-ui/icons";
import {ListItemButton} from "@mui/material";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: 'Home',
            icon: <Home/>,
            href: '/'
        },
        {
            text: 'About',
            icon: <Info/>,
            href: '/about'
        },
        {
            text: 'Testimonials',
            icon: <CommentRounded/>,
            href: '/testimonials'
        },
        {
            text: 'Contact',
            icon: <PhoneRounded/>,
            href: '/contact'
        },
        {
            text: 'Work',
            icon: <ShoppingCartRounded/>,
            href: '/work'
        }
    ]

    return (
        <nav>
            <div className={'nav-logo-container'}>
                <img src={Logo} alt="Foodie"/>
            </div>
            <div className={'navbar-links-container'}>
                {menuOptions && menuOptions.map((item, i) => (
                    <a key={i} href={item.href}>{item.text}</a>
                ))}
                <a href="#">
                    <BsCart2 className={'navbar-cart-icon'} size={35}/>
                </a>
                <button className={'primary-button'}>Booking Now</button>
            </div>
            <div className={'navbar-menu-container'}>
                <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor={"right"}>
                <Box
                    sx={{width: 250}}
                    role={"presentation"}
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disableGutters>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                </Box>
            </Drawer>
        </nav>

    )
}

export default Navbar