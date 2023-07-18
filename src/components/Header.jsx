import React from 'react'
import '../styles/Header.css'
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import About from './About';
import Projects from './Projects';
import Skills from './Projects';
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


const Header = ({customRef,customRefProjects,customRefSkills, customRefContact}) => {



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
    <div id='header-to-all'>

    <p id='header-name'>N.</p>
    <p id='header-info'>Available for <b>remote/relocation</b> opportunities</p>

        <div class="topnav">
          <li><a onClick={()=> customRef.current.scrollIntoView({behaviour: "smooth"})} >About me</a></li>
          <li><a onClick={()=> customRefProjects.current.scrollIntoView({behaviour: "smooth"})} >Projects</a></li>
          <li><a onClick={()=> customRefSkills.current.scrollIntoView({behaviour: "smooth"})} >Skills</a></li>
          <li><a onClick={()=> customRefContact.current.scrollIntoView({behaviour: "smooth"})} >Contact</a></li>




        </div>
        </div>


  )

}

export default Header








