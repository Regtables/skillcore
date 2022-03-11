import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Act from '../../Components/act/Act'
import SectionHeading from '../../Components/sectionHeading/SectionHeading'

import './acts.css'

const Acts = () => {
  useEffect(()=> {
      Aos.init({duration: 1000})
  })
  return (
      <div className = 'skillcore__acts' id = 'acts'>
          <div className = 'skillcore__acts-heading' role ='heading'>
              <div className = 'skillcore__acts-heading_bar-top' role = 'presentation'></div>
              <div className = 'skillcore__acts-heading_content'>
                    <h1>Do you need help with any of these <span>Acts?</span></h1>
                    <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
              </div>
          </div>
          
          <div className = 'skillcore__acts-content'>
              <div data-aos = 'flip-up' data-aos-once = 'true'>
              <Act 
                  title = 'POPI act'
                  text = 'The POPI Act is a comprehensive privacy law that is mandatory for all businesses within the private and public sector that process personal information in South Africa. It seeks to protect and regulate the processing of personal information, falling into the broader Constitutional right to privacy'
                  color = 'rgb(0 223 222 / 48%)'
              />
              </div>
              <div data-aos = 'flip-up' data-aos-once = 'true'>
               <Act 
                  title = 'FAIS act'
                  text = 'The POPI Act is a comprehensive privacy law that is mandatory for all businesses within the private and public sector that process personal information in South Africa. It seeks to protect and regulate the processing of personal information, falling into the broader Constitutional right to privacy.'
                  color = 'rgb(42 187 130 / 48%)'
              />
              </div>
              <div data-aos = 'flip-up' data-aos-once = 'true'>
               <Act 
                  title = 'FICA act'
                  text = 'FICA is an abbreviation for the Financial Intelligence Centre Act 38 of 2001 (as amended). The Act was instituted in order to fight financial crime such as money laundering, fraud, tax evasion, terrorist financing activities and identity theft.'
                  color = 'rgb(235 229 49 / 48%)'
              />
              </div>
          </div>
      </div>
  )
}

export default Acts
