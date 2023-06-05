import React from 'react'
import TwiceCard from '../components/SingleProject'
import Skills from './Skills'
import '../styles/Project.css'
import ecommerce from '../images/ecommerce.png'
import ecommerce2 from '../images/ecommerce-2.png'
import restaurant from '../images/restaurant.png'
import restaurant2 from '../images/restaurant-2.png'
import tasktracker from '../images/task-tracker.png'
import caspiansoft from '../images/caspiansoft-3.png'
import flutter from '../images/flutter-triple.png'
import agency from '../images/aaaagency.png'
import dejavu from '../images/dejavuu.png'
import icon from "../images/projects.png"
import neventy from '../images/neventy.png'

import html from '../images/html5.png'
import css from '../images/css-3.png'
import js from '../images/java-script-logo.png'
import bootstrap from '../images/bootstrap-2.png'
import react from "../images/atom-2.png"
import tailwind from "../images/tailwind.png"
import api from "../images/api.png"
import responsive from "../images/responsive.png"
import git from "../images/git.png"
import flutterIcon from "../images/flutter.png"
import next from "../images/nextJs.png"
import mui from "../images/mui.png"
import { useRef } from 'react';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {forwardRef} from 'react'



const Projects = forwardRef((props,ref) => {



  return (
    <div ref={ref} className='projects-div' id="projects">
     <p className="project">Recent Projects 
     </p>
     <TwiceCard  link="https://event-nazrinibrahimli.vercel.app/" title="Neventy" image={neventy} info="Website for the event organization-Neventy. This website is a fully responsive and written with Vanilla JS, Tailwind, and HTML. " icon1={html} icon2={tailwind} icon3={js}/>


     <TwiceCard  link="https://agency-website-sage.vercel.app/" title="A'gency" image={agency} info="A'gency website is a fully responsive and written with Next.js,Tailwind, and MUI. " icon1={next} icon2={tailwind} icon3={mui}/>
   
        <TwiceCard link="https://e-commerce-bookstore-five.vercel.app/" title="E-commerse Bookshop" image={ecommerce}  info="E-commerce website is written in React and Tailwind CSS . It is a fully responsive website."  icon1={react} icon2={tailwind} icon3/>




      {/* <TwiceCard link="https://github.com/nargayeva/caspiansoft" title="Caspian Soft Company's Website" image={caspiansoft}  info="Caspian Soft company's website. Written with Vanilla Javascript, SASS, and HTML. It is responsive website."  icon1={html} icon2={js} icon3={css} /> */}
       <TwiceCard link="https://github.com/nazrinibrahimli/Booking" title="Flutter Booking App" image={flutter}  info="Ticket Booking App is written with advanced Flutter concepts."  icon1={flutterIcon} icon2 icon3 />
  
    <p className='github-link '><a href="https://github.com/nazrinibrahimli" target="_blank" className=''>See all projects</a></p>
 
      </div>


  )
})

export default Projects
