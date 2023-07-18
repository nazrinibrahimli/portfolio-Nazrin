import React from 'react'
import '../styles/Contact.css'
import { Document } from 'react-pdf'
import resume from '../assets/Resume.pdf'
import linkedin from '../images/linkedin.png'
import github from '../images/github-sign.png'
import arrow from '../images/arrow.png'
import {forwardRef} from 'react'
import nazrinG from "../images/nazrin-face.png"


const Contact = forwardRef((props,ref) => {
  return (
    <div ref={ref} className='contact-div'>

      <div className='contactHeader'>

      <div id='info-button-div'>
      <p className='contact-info'>  <img src={nazrinG} alt="" id='nazrin-img' /> 

      Do you have a project idea? I'm always on the lookout for interesting collaborations. </p>
      </div>
      <div className='all-links-div'>
              <a className='email' href = "mailto:nibrahimli4676@ada.edu.az?subject = Contact for collaboration = Message" target="_blank">
               <button id='contact-button'>Drop me a line  ↗︎</button> </a> 

      </div>


      </div>


              {/* <img src={contact} alt="git logo"  className='animated-icon contact'/> */}


    </div>
  )
})

export default Contact
