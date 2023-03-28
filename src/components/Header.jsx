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
        <div class="topnav" id="myTopnav">
          <li><a onClick={()=> customRef.current.scrollIntoView({behaviour: "smooth"})} >about</a></li>
          <li><a onClick={()=> customRefProjects.current.scrollIntoView({behaviour: "smooth"})} >projects</a></li>
          <li><a onClick={()=> customRefSkills.current.scrollIntoView({behaviour: "smooth"})} >skills</a></li>
          <li><a onClick={()=> customRefContact.current.scrollIntoView({behaviour: "smooth"})} >contact</a></li>

                {/* <li><Link onClick={()=> customRef.current.scrollInView({behaviour: "smooth"})} className="" activeClassName="is-active" to="/home">home</Link></li> */}
                {/* <li><Link className="" activeClassName="is-active" to="/about">about</Link></li> */}
                {/* <li><Link className="" activeClassName="is-active" to="/projects">projects</Link></li>
                <li><Link className="" activeClassName="is-active" to="/skills">skills</Link></li>
                <li><Link className="" activeClassName="is-active" to="/contact">contact</Link></li>
 */}




        </div>

  )

}

export default Header








