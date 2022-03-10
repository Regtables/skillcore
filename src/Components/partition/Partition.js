import React from 'react'

import Dot from '../dot/Dot'
import './partition.css'

const Partition = ({icon, top}) => {
  console.log(top)
  return (
      <div className = 'skillcore__partition flip-vertical-right' role = 'presentation' style = {top ? {flexDirection: 'column', margin: '5rem 0'} : {flexDirection: 'row'}}>
          <div>
          <Dot color = '#660b1f' size = {10}/>
          </div>
          <div className = 'skillcore__partition-container'>
            <p>{icon}</p>
          </div>
          <Dot color = '#660b1f' size = {10}/>  
      </div>
  )
}

export default Partition
