import React from 'react'
import "./Card.css"

function Card(props) {

  return (
    <div className='movie_card'>
        <img src={props.imgUrl} />
        
        <p className='type'>{props.type}</p>
        <h4 className='title'>{props.title}</h4>
        <p className='year'>{props.year}</p>
    </div>
  )
}

export default Card
