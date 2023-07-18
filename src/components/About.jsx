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

       <div className='first-welcome'>
       <h1>Developer</h1>  
       <p id='summary'>Hello World, I'm Nazrin, a front-end web developer, problem solver and artist based in Azerbaijan,Baku.</p>
       </div>

       <h1 className='second-welcome'> & Creative Soul</h1>




        <div className="about-info-button">
        <p className="inside-span">I enjoy integrating creative designs to create appealing, easily accessible, and user-friendly websites and applications. Whether it's a simple landing page or a complex e-commerce platform, I will apply my skills to create a website that is both  and highly functional.</p>
        <div className='all-links-div'>
              <a className='email' href = "mailto:nibrahimli4676@ada.edu.az?subject = Contact for collaboration = Message" target="_blank">
               <button id='contact-button'>Drop me a line  ↗︎</button> </a> 

      </div>
        </div>
       {/* <button className='resume-button'>
        <a href={resume} download="Resume Nazrin Ibrahimli">Resume</a>
      </button> */}
             {/* <img src={nazrinG} alt="" className='nazrin-image' />  */}
        



            <div className="social-media-links-all">
            <p className=''>Let's connect </p>
                       <a href="https://github.com/nazrinibrahimli" target="_blank"> 
                      <div className='for-github-logo'></div>
                      </a>
                      <a href="https://www.linkedin.com/in/nazrinibrahimli/"  target="_blank" > 
                      <div className='for-linkedin-logo'></div>
                      </a>

             </div>  



    </m.div>
  )
})

export default About
