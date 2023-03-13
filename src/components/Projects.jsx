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
import agency from '../images/agency.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Projects = () => {
  return (
    <div className='projects-div'>
     <p className="project">Projects.</p>
     <Container>
     <Row>
     <Col><TwiceCard  link="https://agency-website-sage.vercel.app/" title="A'gency" image={agency} info="A'gency website is a fully responsive and written with Next.js,Tailwind, and MUI. "/>
        </Col>

        <Col><TwiceCard link="https://e-commerce-bookstore-five.vercel.app/" title="E-commerse Bookshop" image={ecommerce}  info="E-commerce website is written in React and Tailwind CSS . It is a fully responsive website." />
        </Col>
        </Row>
      <Row>
        <Col><TwiceCard link="https://github.com/nazrinibrahimli/Booking" title="Flutter Booking App" image={flutter}  info="Ticket Booking App is written with advanced Flutter concepts." />
        </Col>
    
        <Col><TwiceCard  link="https://github.com/nazrinibrahimli/Restaurant-website" title="Dine Out Restaurant" image={restaurant} info="Restaurant website is a fully responsive and written with Vanilla Javascript, HTML and CSS."/>
        </Col>
        <Col><TwiceCard link="https://github.com/nargayeva/caspiansoft" title="Caspian Soft Company's Website" image={caspiansoft}  info="Caspian Soft company's website. Written with Vanilla Javascript, SASS, and HTML. It is responsive website." />
        </Col>
    
      </Row>
    </Container>
    <p className='github-link '><a href="https://github.com/nazrinibrahimli" target="_blank" className=''>See all projects</a></p>
 
      </div>


  )
}

export default Projects
