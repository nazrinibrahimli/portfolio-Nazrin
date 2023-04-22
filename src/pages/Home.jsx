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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {motion as m } from "framer-motion"

const Home = () => {
  return (
    <m.div  >
      <About/>  
      <Projects/>
      <Skills/>
      <Contact/>


    </m.div>
  )
}

export default Home
