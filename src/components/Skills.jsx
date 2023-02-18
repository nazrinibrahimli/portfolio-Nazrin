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
        <p className='skills-header '>Skill-Set 🦾</p>
    <Container className='skills-set'>
      <Row>
        <Col >
        <Card name="HTML5" number={"90%"}  />

        </Col >
        <Col>
        <Card name="CSS/Bootstrap" number={"90%"} className=""/>

        </Col>
        <Col>
        <Card name="JavaScript" number={"75%"}className="" />

        </Col>
        <Col >
        <Card name="React" number={"65%"} />

        </Col>
        <Col>
        <Card name="Tailwind CSS" number={"50%"} />

        </Col>
        <Col>
        <Card name="Flutter" number={"50%"} />

        </Col>

      </Row>
    </Container>
   

    </div>
  )
}

export default Skills
