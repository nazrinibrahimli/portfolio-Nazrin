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
import { motion as m } from "framer-motion"

import {forwardRef} from 'react'

const About = forwardRef((props,ref) => {

  return (
    <m.div  initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.7, ease: "easeOut"}} ref={ref} className='about-div' id='about'>
       {/* <img src={nazrinG} alt="" className='nazrin-image' />  */}
     {/* <img src={react} alt="react logo"  className='animated-icon react'/>
     <img src={api} alt="api logo"  className='animated-icon api'/>
     <img src={git} alt="git logo"  className='animated-icon git'/> */}
     {/* <h1 className="name">   About Me  </h1> */}

       <div>
       <h1 className='welcome-message'>Nazrin Ibrahimli</h1>
      {/* <img src={nazrinG} alt="" className='nazrin-image' />  */}
       <p className='front-developer'>Data Analyst / Flutter Developer </p>



      <div className="social-media-links-all">
               <a href="https://www.linkedin.com/in/nazrinibrahimli/"  target="_blank" > 
              <div className='for-linkedin-logo'></div>
              </a>
              <a href="https://github.com/nazrinibrahimli" target="_blank"> 
              <div className='for-github-logo'></div>
              </a>
        </div> 


       </div>


       <div className=''>
       <p className="inside-span"> Hello World, I'm<span className='myName'>Nazrin</span>, a flutter developer, data analyst, problem solver and artist based out of Azerbaijan,Baku. I enjoy integrating creative designs to create appealing, easily accessible, and user-friendly websites and applications. Whether it's a simple landing page or a complex e-commerce platform, I will apply my skills to create a website that is both  and highly functional.</p>
       <button className='resume-button'>
        <a href={resume} download="Resume Nazrin Ibrahimli">Resume</a>
      </button>
       </div>



    </m.div>
  )
})

export default About
