import React from 'react'



const jokes = (props) => {
  const a = props.punchline;
    const shoot = () => {
        alert(a);
      }
    
  return (
    <div>
            <h3>{props.setup}</h3>
            <h2>{props.punchline}</h2>
            
    </div>
  )
}

export default jokes