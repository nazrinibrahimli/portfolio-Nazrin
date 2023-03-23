import React, { useState } from 'react'
import Card from './Card'
import '../styles/Skills.css'
import { Container, Row, Col } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import html from '../images/html5.png'
import css from '../images/css-3.png'
import js from '../images/java-script-logo.png'
import bootstrap from '../images/bootstrap-2.png'
import icon from "../images/skills.png"
import react from "../images/atom-2.png"
import tailwind from "../images/tailwind.png"
import api from "../images/api.png"
import responsive from "../images/responsive.png"
import git from "../images/git.png"
import flutter from "../images/flutter.png"
import next from "../images/nextJs.png"
import mui from "../images/mui.png"

const Skills = () => {

const [more, setMore] = useState(false);



  return (
    <div className='skills-div' >
        <p className='skills-header '>Skills-Set</p>
    <Container>
      <Row>
        <Col >
        <Card  name="HTML5" image={html}/>
        </Col >
        <Col >
        <Card name="CSS3" image={css} />
        </Col>
        <Col>
        <Card name="Boostrap"  image={bootstrap} />
        </Col>
        <Col>
        <Card name="Javascript" image={js} />
        </Col>
        <Col>
        <Card  name="React" image={react}/>
        </Col>
        <Col>
        <Card  name="Next.js" image={next}/>
        </Col>
      </Row>

      <Row>
      <Col >
        <Card name="Flutter" image={flutter} />
        </Col >
        <Col >
        <Card name="Tailwind " image={tailwind} />
        </Col>
        <Col >
        <Card name="MUI  " image={mui} />
        </Col>
        <Col>
        <Card name="Rest APIs"  image={api} />
        </Col>
        <Col>
        <Card name="Git" image={git} />
        </Col>
        <Col>
        <Card name="Responsive Design" image={responsive} />
        </Col>
      </Row>
    </Container>
   

    </div>
  )
}

export default Skills
