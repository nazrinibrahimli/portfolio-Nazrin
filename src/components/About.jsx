import React from 'react'
import '../styles/About.css'
import Skills from './Skills'
import icon from "../images/icon.svg"
import Projects from "./Projects"
import resume from '../assets/Resume.pdf'


const About = () => {
  return (
    <div className='about-div'>
     <h1 className="name">About Me  <img src={icon} alt="code-icon" className='icon'/>  </h1>
     <h1 className='front-developer'>Front-end web developer</h1>
       <p className="inside-span"><b>{"<"}</b>  Hello World, I'm<span className='myName'>Nazrin Ibrahimli</span>, a front-end web developer and problem solver based out of Azerbaijan,Baku. I enjoy integrating creative designs to create appealing, easily accessible, and user-friendly websites and applications<b>{"/>"}</b>  </p>
       {/* <p className='about-me-info'> <b>{"<"}</b> I create front-end solutions that are scalable and have excellent user experiences. I look forward to helping companies grow or launch their products to the next level  
       </p> */}
      <button className='resume-button'>
        <a href={resume} download="Resume Nazrin Ibrahimli">resume</a>
      </button>

    </div>
  )
}

export default About
