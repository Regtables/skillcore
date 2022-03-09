import React from 'react'

import './sectionHeading.css'

const SectionHeading = ({section}) => {
  return (
      <div className = 'skillcore__sectionHeading'>
          <p>{section}</p>
      </div>
  )
}

export default SectionHeading
