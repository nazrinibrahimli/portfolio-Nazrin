import React from 'react'
import '../styles/Card.css'
const Card = (props) => {
  return (
    
    <div className='card-original'>
      <div className='percentage'>{props.name} </div>
    </div>
  )
}

export default Card
