import React from 'react'
import '../styles/SingleProject.css'


const TwiceCard = (props) => {
  return (
    <div className='cart '>
      <div className='image-div'>
        <img className='image' src={props.image} alt="" /> 
        </div>
      <div className='info-div'>
          <h1 className='title'>{props.title}</h1>
          <p className='info'>{props.info}</p>
          <div className="buttons">
          {/* <button className='see-projects-button demo'>
           <a href={props.demo} target="_blank">demo</a>
          </button>       */}
          <button className='see-projects-button code'>
           <a href={props.link} target="_blank"> see code</a>
          </button>   
          </div>

      </div>
      </div>
  )
}

export default TwiceCard