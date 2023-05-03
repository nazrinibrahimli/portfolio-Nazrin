import React from 'react'
import '../styles/Contact.css'
import { Document } from 'react-pdf'
import resume from '../assets/Resume.pdf'
import linkedin from '../images/linkedin.png'
import github from '../images/github-sign.png'
import arrow from '../images/arrow.png'
import {forwardRef} from 'react'


const Contact = forwardRef((props,ref) => {
  return (
    <div ref={ref} className='contact-div'>

      <div className='contactHeader'>
      <p className='contact-header'>Contact Me</p>   
      <p className='contact-info'>
      If you're looking to take your company's online presence to the next level, consider working with a talented front-end developer like me to create a website that truly stands out.
       </p>
      <div className='social-media-links'>
          <a href="https://www.linkedin.com/in/nazrinibrahimli/"  target="_blank" > 
              {/* <img src={linkedin} alt="linkedin logo" className='logo' /> Linkedin */}
              <div className='for-linkedin-logo'></div>
              </a>
              <a href="https://github.com/nazrinibrahimli" target="_blank"> 
              <div className='for-github-logo'></div>
              </a>
              <a href="https://twitter.com/IbrahimliNazrin" target="_blank"> 
              <div className='for-twitter-logo'></div>
              </a>
          </div>
      </div>


              {/* <img src={contact} alt="git logo"  className='animated-icon contact'/> */}

      <div className='all-links-div'>
              <div className='link-icon'>
              <a className='email' href = "mailto:nazaibraqimli99@gmail.com?subject = Contact for collaboration = Message" target="_blank">
               <button>click to send me an email:   <img src={arrow} alt="" className='arrow' /></button> 

                     <br /> nazaibraqimli99@gmail.com </a> 

          </div>
      </div>
    </div>
  )
})

export default Contact
