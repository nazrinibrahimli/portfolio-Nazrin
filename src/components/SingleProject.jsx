import React from 'react'
import '../styles/SingleProject.css'
import { motion as m } from "framer-motion"


const TwiceCard = (props) => {
  return (
    <div className='cart '>
      <m.div className='image-div'    cx={500}
  animate={{ cx: [null, 100, 200] }}
  transition={{ duration: 3, times: [0, 0.2, 1] }}>
        <img className='image' src={props.image} alt="" /> 
        </m.div>
      <div className='info-div'>
          <h1 className='title'>{props.title}</h1>
          <div className="tools-used">
            <img src={props.icon1} alt="" className='logo'/>
            <img src={props.icon2} alt="" className='logo'/>
            <img src={props.icon3} alt="" className='logo'/>
          </div>
          <p className='info'>{props.info}</p>

          <div className="buttons">
          {/* <button className='see-projects-button demo'>
           <a href={props.demo} target="_blank">demo</a>
          </button>       */}
          <button className='see-projects-button code'>
           <a href={props.link} target="_blank"> See code</a>
          </button>   
          </div>

      </div>
      </div>
  )
}

export default TwiceCard
