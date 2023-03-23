import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import react from "./images/atom-2.png"
import git from "./images/git.png"
import api from "./images/api.png"



function App() {
  return (
    <div className="App">
      <Header/>
      <img src={react} alt="react logo"  className='animated-icon react'/>
      <About/>
      <img src={api} alt="api logo"  className='animated-icon api'/>
      <Projects/>
      <Skills/>
      {/* <img src={git} alt="git logo"  className='animated-icon git'/> */}
      <Contact/>
    </div>
  );
}

export default App;
