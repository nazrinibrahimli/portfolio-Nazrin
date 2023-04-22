import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import nazrinG from "./images/nazrin-green.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";
import { useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
const aboutRef = useRef(null)
const projectsRef = useRef(null)
const skillsRef = useRef(null)
const contactRef = useRef(null)

  return (

    <div className="App">
      <Header customRef={aboutRef} customRefProjects={projectsRef} customRefSkills={skillsRef} customRefContact={contactRef}/>
      <About ref={aboutRef}/>  
      <Projects ref={projectsRef}/>
      <Skills ref={skillsRef}/>
      <Contact ref={contactRef}/> 
       {/* <Routes>    
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
        </Routes> */}
       <Footer/> 
    </div>
  );
}

export default App;
