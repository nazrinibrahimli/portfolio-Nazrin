import React from 'react'
import '../styles/Contact.css'
import { Document } from 'react-pdf'
import resume from '../assets/Resume.pdf'
import linkedin from '../images/linkedin.png'
import github from '../images/github-sign.png'
import arrow from '../images/arrow.png'


const Contact = () => {
  return (
    <div className='contact-div'>
              <p className='contact-header'>Contact Me</p>   
              {/* <img src={contact} alt="git logo"  className='animated-icon contact'/> */}

      <div className='all-links-div'>
      <p className='contact-info'>I can help build you next website.  </p>
              <div className='link-icon'>
              <a className='email' href = "mailto:nazaibraqimli99@gmail.com?subject = Contact for collaboration = Message" target="_blank">
              Click to send me an email:  <img src={arrow} alt="" className='arrow' />

                     <br /> nazaibraqimli99@gmail.com </a> 
          <hr />
          <p>On the Internet:</p>
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
      </div>
    </div>
  )
}

export default Contact
