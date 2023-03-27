import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import About from './components/About';
import Projetcs from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (

    <div className="App">
       <Header/>
        <div className="">
        <Routes>
            <Route path="/"element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projetcs />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
