import React from 'react'
import '../styles/SingleProject.css'
import { motion as m } from "framer-motion"


const TwiceCard = (props) => {
  return (
    <div className='cart '>
            <div className='info-div'>
          <h1 className='title'>{props.id}{props.title}</h1>
          <h1 className='info-first'> {props.info_first}</h1>
          <p className='info'>{props.info}</p>

          <div className="tools-used">
            <p>Tools: {props.tools}</p>
            <p>Year: {props.year}</p>

            {/* <img src={props.icon1} alt="" className='logo'/>
            <img src={props.icon2} alt="" className='logo'/>
            <img src={props.icon3} alt="" className='logo'/> */}
          </div>

          <div className="buttons">
          {/* <button className='see-projects-button demo'>
           <a href={props.demo} target="_blank">demo</a>
          </button>       */}
          <button className='see-projects-button code'>
           <a href={props.link} target="_blank"> See code</a>
          </button>   
          </div>

      </div>
      <m.div className='image-div'    cx={500}
  animate={{ cx: [null, 100, 200] }}
  transition={{ duration: 3, times: [0, 0.2, 1] }}>
        <img className='image' src={props.image} alt="" /> 
        </m.div>


      </div>
  )
}

export default TwiceCard
