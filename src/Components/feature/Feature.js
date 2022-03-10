import React from 'react'
import Dot from '../dot/Dot'
import Bar from '../bar/Bar'

import './feature.css'

const Feature = ({title, text, icon, color}) => {
  return (
    <div className = 'skillcore__features-container_feature'>
        <div className = 'skillcore__features-container_feature-left'>
            <div className = 'skillcore__features-container-feature-left_title'>
                <h2>{title}</h2>
                {/* <div className = 'skillcore__features-container_feature-title_underline' style = {{backgroundColor: color}}></div> */}
                <Bar color = {color}/>
            </div>
            <p aria-label = 'icon'>{icon}</p>
        </div>

        <div className = 'skillcore__features-container_feature-right'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature
