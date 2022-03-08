import React from 'react'

import './bar.css'

const Bar = ({color}) => {
  return (
    <div className = 'skillcore__bar' style = {{backgroundColor: color}}></div>
  )
}

export default Bar
