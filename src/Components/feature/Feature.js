import React from 'react'

import './feature.css'

const Feature = ({title, text, icon}) => {
  return (
    <div className = 'skillcore__features-container_feature'>
        <div className = 'skillcore__features-container_feature-title'>
            <h2>{title}</h2>
            <p>{icon}</p>
        </div>
        <div className = 'skillcore__features-container_feature-text'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature
