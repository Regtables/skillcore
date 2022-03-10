import React from 'react'

import Dot from '../../Components/dot/Dot'

import './footer.css'

const Footer = () => {
  return (
      <div className = 'skillcore__footer' role = 'contentinfo'>
          <div className = 'skillcore__footer-heading' role = 'heading'>
              <h2>Here, you will only find care, commitment and excelence</h2>
              <h3>Join our Skillcore family</h3>
              <p>We will take care it</p>
              <div className = 'skillcore__footer-dots' role = 'presentation'>
                  <Dot color = '#00DFDE' />
                  <Dot color = '#2ABB82' />
                  <Dot color = 'rgb(225, 208, 90)' />
              </div>
              <div className = 'skillcore__footer-heading_logo' role = 'presentation'>
                  insert logo
              </div>
          </div>
          <div className = 'skillcore__footer-content'>
              <div className = 'skillcore__footer-content_licenses'>
                  <h3>Licenses</h3>
                  <p>license@license</p>
                  <p>license</p>
                  <p>license</p>
              </div>
              <div className = 'skillcore__footer-content_company'>
                  <h3>Company</h3>
                  <p>Terms & Condintions</p>
                  <p>Privacy Policy</p>
              </div>
              <div className = 'skillcore__footer-content_licenses'>
                  <h3>Contact</h3>
                  <p>info@skillcore.co.za</p>
                  <p>021123456</p>
                  <p>Cape Town, South Africa</p>
              </div>
          </div>
          <div className = 'skillcore__footer-copyright'>
              <p>© 2022 Skillcore. All rights reserved.</p>
          </div>
      </div>
  )
}

export default Footer
