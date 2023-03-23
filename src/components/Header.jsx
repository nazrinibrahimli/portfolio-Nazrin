import React from 'react'
import '../styles/Header.css'
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
  } from "react-router-dom";



const Header = () => {



const handleClickScroll = () => {
    const element = document.getElementById()
}    

const [color, setColor] = useState(false)

const ChangeColor = () => {
    if(window.scrollY>=120)
    {    setColor(true)
    }

    else{    
        setColor(false)
    }
}

window.addEventListener('scroll', ChangeColor)


  return (
    <div className={color ? 'header-div header-div-bg a-bg' : 'header-div'} >
                    <h1>Nazrin</h1>

        <nav className="nav-links">
            <ul>
            <li>
                    <a href="https://www.linkedin.com/in/nazrinibrahimli/ " target="_blank" className={color ? 'link-item link-item-bg' : 'link-item'}>About</a>
                </li>
                <li>

                    <a href="https://github.com/nazrinibrahimli" target="_blank"className={color ? 'link-item link-item-bg' : 'link-item'}>Projects</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nazrinibrahimli/ " target="_blank" className={color ? 'link-item link-item-bg' : 'link-item'}>Contact</a>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default Header
