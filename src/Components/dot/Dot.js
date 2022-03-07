import React from 'react'
import { BiFontSize } from 'react-icons/bi'

import './dot.css'

const Dot = ({color, margin, size}) => {
  console.log(color)
  return (
    <div className = 'skillcore__dot' style = {{backgroundColor: color, width: size, height: size}}>

    </div>
  )
}

export default Dot
