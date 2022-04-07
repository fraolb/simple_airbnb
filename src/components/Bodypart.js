import React from 'react';

import "./bodypart.css";
import frontimg from "../images/front.png";


const Bodypart = () => {
  return (
    <div className='bodypart'>
        <img className='bodypart-img' src="https://picsum.photos/id/237/200/300" />
        <h1 className='bodypart-h1'>Online Experience</h1>
        <p className='bodypart-p'>Join unique interactive activities led by one of a kind hosts,all with out leaving home.</p>
    </div>
  )
}

export default Bodypart