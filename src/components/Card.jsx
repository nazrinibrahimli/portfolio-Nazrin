import React from 'react'
import '../styles/Card.css'
const Card = (props) => {
  return (
    
    <div className='card-original'>

        
      <p className='header'>{props.name}</p>
      <p className='info'>{props.info}</p>
      <div className='percentage'>{props.number}</div>



    </div>
  )
}

export default Card
