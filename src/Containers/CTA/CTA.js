import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './cta.css'

const CTA = () => {
  useEffect(() => {
      Aos.init({duration: 1000})
  })
  return (
      <div className = 'skillcore__cta'>
          <div className = 'skillcore__cta-content'>
              <p>The solution is waiting for you</p>
              <h3>Get in touch with Skillcore and start the process</h3>
          </div>
          <div className = 'skillcore__cta-btn' aria-label = 'button' data-aos = 'zoom-in' data-aos-delay = '200' data-aos-once = 'true'>
              <a href = '#contact' role = 'link'><p>Get in touch</p></a>
          </div>
      </div>
  )
}

export default CTA
