import React from 'react'

import './act.css'

const Act = ({title, text, color}) => {
  return (
      <div className = 'skillcore__acts-content-act' style = {{background: color}}>
          <div className = 'skillcore__acts-content-act_title' role = 'heading'>
              <h3>{title}</h3>
          </div>
          <div className = 'skillcore__acts-content-act_text'>
              <p>{text}</p>
          </div>
      </div>
  )
}

export default Act
