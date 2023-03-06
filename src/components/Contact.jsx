import React from 'react'
import '../styles/Contact.css'
import { Document } from 'react-pdf'
import resume from '../assets/Resume.pdf'
// import linkedin from '../images/linkedin.jpg'
// import github from '../images/github.png'

const Contact = () => {
  return (
    <div className='contact-div'>
              <p className='contact-header'>Hello. </p>
      <div className='all-links-div'>
      <p className='contact-info'>I can help build you next website.  </p>
              <div className='link-icon'>
              <a href = "mailto:nazaibraqimli99@gmail.com?subject = Contact for collaboration = Message" target="_blank">
          Send me an Email! nazaibraqimli99@gmail.com </a> 
          <p >On the Internet:</p>
              <a href="https://www.linkedin.com/in/nazrinibrahimli/"  target="_blank" >Linkedin </a>
              <a href="https://github.com/nazrinibrahimli" target="_blank">Github</a>
              </div>
      </div>
    </div>
  )
}

export default Contact
