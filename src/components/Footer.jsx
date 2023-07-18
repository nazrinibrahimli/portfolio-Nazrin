import React from 'react'
import '../styles/Contact.css'

const Footer = () => {
  return (
    <div className='footer'>
            <div className='social-media-links'>
          <a href="https://www.linkedin.com/in/nazrinibrahimli/"  target="_blank" > 
              {/* <div className='for-linkedin-logo'></div> */}
              Linkedin
              </a>
              <a href="https://github.com/nazrinibrahimli" target="_blank"> 
              {/* <div className='for-github-logo'></div> */}
              Github
              </a>
              <a href="https://twitter.com/IbrahimliNazrin" target="_blank"> 
              {/* <div className='for-twitter-logo'></div> */}
              Twitter
              </a>
              <a href="https://twitter.com/IbrahimliNazrin" target="_blank"> 
              {/* <div className='for-twitter-logo'></div> */}
              CV
              </a>
          </div>
            <p className='credits'>© 2023 All Rights Reserved. </p>

    </div>
  )
}

export default Footer
