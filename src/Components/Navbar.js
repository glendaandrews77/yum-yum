// Navbar.js

import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { MdPhoneCallback } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const menuOptions = [
    {
      text: "Salaoups",
    },
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/home",
    },
    {
      text: "Menu",
      icon: <MdOutlineRestaurantMenu />,
      subMenu: [
        { text: "🥗Salads", link: "/salads" },
        { text: "🥘Soups", link: "/soups" },
        { text: "🥪Sandwiches", link: "/sandwiches" },
        { text: "🍰Dessert", link: "/desserts" },
        { text: "🥤Drinks", link: "/drinks" },
      ],
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "/contact"
    },
    
   
    {
      icon: <ShoppingCartRoundedIcon />,
      link: "/cart" 
    },
    {
      text: "Phone: (757) 497-5621",
      icon: <MdPhoneCallback />,
      link: "#",
    },
  ];


  return (
    <nav>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <div key={item.text} className="nav-item">
            {item.subMenu ? (
              <div
                className="nav-dropdown"
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}
              >
                <a href={item.link || "#"}>{item.text}</a>
                {openDropdown && (
                  <div className="dropdown-content">
                    {item.subMenu.map((subItem) => (
                      <a key={subItem.text} href={subItem.link}>
                        {subItem.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a href={item.link || "#"}>{item.text}</a>
            )}
          </div>
        ))}
        <div className="nav-cart-icon">
          <BsCart2 />
        </div>
      </div>
      <div className="nav-bar-menu-container">
        <RxHamburgerMenu className="handburger-menu" onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        anchor="right"
        onClose={() => setOpenMenu(false)}
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
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
