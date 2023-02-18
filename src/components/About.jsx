import React from 'react'
import '../styles/About.css'
import Skills from './Skills'
import icon from "../images/icon.svg"
import Projects from "./Projects"
import resume from '../assets/Resume.pdf'


const About = () => {
  return (
    <div className='about-div'>

     <div className='left'>
       <img src={icon} alt="code-icon" />
     <h1 className="name">About.</h1>
       <p className="inside-span">Hi, I'm<span className='myName'>Nazrin Ibrahimli</span>. A front-end developer and problem solver. </p>
       <p className='about-me-info'>I create front-end solutions that are scalable and have excellent user experiences. I look forward to helping companies grow or launch their products to the next level. 
       </p>
      <button className='see-projects-button'>
        {/* <a href="https://github.com/nazrinibrahimli" target="_blank">see projects</a> */}
        <a href={resume} download="Resume Nazrin Ibrahimli">see resume</a>

      </button>
     </div>

    </div>
  )
}

export default About
