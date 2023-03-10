import React, { useState } from 'react'
import Card from './Card'
import '../styles/Skills.css'
import { Container, Row, Col } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const Skills = () => {

const [more, setMore] = useState(false);



  return (
    <div className='skills-div' >
        <p className='skills-header '>Skills-Set </p>
    <Container className='skills-set'>
      <Row>
        <Col >
        <Card name="HTML5, CSS, Bootstrap"   />
        </Col >
        <Col >
        <Card name="JavaScript, React, Next.js" />
        </Col>
        <Col>
        <Card name="Flutter" className="" />
        </Col>
        <Col>
        <Card name="Tailwind CSS, MUI" />
        </Col>


      </Row>
    </Container>
   

    </div>
  )
}

export default Skills
