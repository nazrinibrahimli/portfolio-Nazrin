import React from 'react'
import '../styles/About.css'
import Skills from './Skills'
import icon from "../images/icon.svg"
import Projects from "./Projects"
import resume from '../assets/Resume.pdf'
import react from "../images/atom-2.png"
import git from "../images/git.png"
import api from "../images/api.png"
import nazrin from "../images/nazrin-blue.png"
import nazrinG from "../images/nazrin-green.png"
import { useRef } from 'react';

import {forwardRef} from 'react'

const About = forwardRef((props,ref) => {

  return (
    <div ref={ref} className='about-div' id='about'>
       {/* <img src={nazrinG} alt="" className='nazrin-image' />  */}
     {/* <img src={react} alt="react logo"  className='animated-icon react'/>
     <img src={api} alt="api logo"  className='animated-icon api'/>
     <img src={git} alt="git logo"  className='animated-icon git'/> */}
     <h1 className="name">   About Me  </h1>
     <h2 className='front-developer'>Front-end web developer <img src={icon} alt="code-icon" className='code-icon'/></h2>
       <p className="inside-span"><b>{"<"}</b>  Hello World, I'm<span className='myName'>Nazrin Ibrahimli</span>, a front-end web developer and problem solver based out of Azerbaijan,Baku. I enjoy integrating creative designs to create appealing, easily accessible, and user-friendly websites and applications. I have a degree in Bachelor of Science in Information Technologies<b>{"/>"}</b>  </p>
       {/* <p className='about-me-info'> <b>{"<"}</b> I create front-end solutions that are scalable and have excellent user experiences. I look forward to helping companies grow or launch their products to the next level  
       </p> */}

      <button className='resume-button'>
        <a href={resume} download="Resume Nazrin Ibrahimli">Resume</a>
      </button>

    </div>
  )
})

export default About
