import React from 'react'

import './circle.css'

const Circle = ({title, icon, text}) => {
  return (
    <div className = 'skillcore__circle'>
        <div className = 'skillcore__circle-title'>
            <h2>{title}</h2>
        </div>

        <div className = 'skillcore__circle-content'>
            <p className = 'skillcore__circle-content_icon'>{icon}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Circle
