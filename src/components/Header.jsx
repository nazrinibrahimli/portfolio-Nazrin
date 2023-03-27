import React from 'react'
import '../styles/Header.css'
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Outlet, Link } from "react-router-dom";
import { Component } from "react";

import {
  Route,
  HashRouter
} from "react-router-dom";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
  } from "react-router-dom";
import { useRef } from 'react';


const Header = () => {





const [color, setColor] = useState(false)
const ChangeColor = () => {
    if(window.scrollY>=120)
    {    setColor(true)
    }

    else{    
        setColor(false)
    }
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

window.addEventListener('scroll', ChangeColor)

  return (
        <div class="topnav" id="myTopnav">
                <li><NavLink className="" activeClassName="is-active" to="/">home</NavLink></li>
                <li><NavLink className={color ? 'link-item link-item-bg' : 'link-item'} activeClassName="is-active" to="/about">about</NavLink></li>
                <li><NavLink className={color ? 'link-item link-item-bg' : 'link-item'} activeClassName="is-active" to="/projects">projects</NavLink></li>
                <li><NavLink className={color ? 'link-item link-item-bg' : 'link-item'} activeClassName="is-active" to="/skills">skills</NavLink></li>
                <li><NavLink className={color ? 'link-item link-item-bg' : 'link-item'} activeClassName="is-active" to="/contact">contact</NavLink></li>


</div>
  
  )

}

export default Header








