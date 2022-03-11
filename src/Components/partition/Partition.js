import React from 'react'

import Dot from '../dot/Dot'
import './partition.css'

const Partition = ({icon, top}) => {
  console.log(top)
  return (
      <div 
        className = 'skillcore__partition flip-vertical-right'
        role = 'presentation' 
        style = {top && {flexDirection: 'column', margin: '5rem 0'}}>
          <div>
              <Dot color = '#660b1f' size = {10}/>
          </div>

          <div className = 'skillcore__partition-container'>
              <p>{icon}</p>
          </div>

          <div>
              <Dot color = '#660b1f' size = {10}/>
          </div>
      </div>
  )
}

export default Partition
