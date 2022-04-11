import React from 'react'

import "./card.css";


const Card = (props) => {
  return (
    <div className='card'>
        <img className='card-img' src={props.img} />
        <div>
            <span>{props.rate}</span>
            <span className='gray'>({props.numb}) . </span>
            <span className='gray'>{props.country}</span>
        </div>
        <p className='card-p'>{props.story}</p>
        

    </div>
  )
}

export default Card