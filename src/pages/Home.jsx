import React from 'react'
import Header from '../components/Header';
import About from '../components/About';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import react from "../images/atom-2.png"
import git from "../images/git.png"
import api from "../images/api.png"
import nazrinG from "../images/nazrin-green.png"

const Home = () => {
  return (
    <div>
      {/* <img src={react} alt="react logo"  className='animated-icon react'/> */}
      <h1 className='welcome-message'>Nazrin Ibrahimli</h1>
      <img src={nazrinG} alt="" className='nazrin-image' /> 

     {/* <img src={git} alt="git logo"  className='animated-icon git'/> */}
      <About/>  
      <Projects/>
      {/* <img src={api} alt="api logo"  className='animated-icon api'/> */}
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home
