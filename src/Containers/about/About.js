import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BsTree, BsTools } from 'react-icons/bs'
import { BiHourglass } from 'react-icons/bi'
import { IoShieldOutline } from 'react-icons/io5'
import Feature from '../../Components/feature/Feature'

import './about.css'

const About = () => {
  useEffect(() => {
    Aos.init({duration: 500});
  }, [])

  return (
      <div className = 'skillcore__about linear__bg' id = 'about'>
          <div className = 'skillcore__about-heading' role = 'heading'>
              <div className = 'skillcore__about-heading_title'>
                    <div className = 'skillcore__about-heading_bar-top'></div>
                    <h1>Why choose Skillcore?</h1>
              </div>
              <div className = 'skillcore__about-feature'>
                  <div 
                    data-aos = 'fade-up'
                    data-aos-delay = '200'
                    data-aos-once = 'true'
                  >
                    <Feature
                        title = 'Persistance'
                        icon = {<BsTree size = {32} color = '#fff'/>}
                        text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous.'
                        color = '#00DFDE'
                    />
                  </div>
              </div>
          </div>
        
          <div className = 'skillcore__about-container'>
              <div 
                data-aos = 'fade-up'
                data-aos-delay= '500'
                data-aos-once = 'true'
              >
                <Feature
                    title = 'Experience'
                    icon = {<BiHourglass size = {32} color = '#fff'/>}
                    text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous.'
                    color = '#2ABB82'
                />
              </div>
              <div 
                data-aos = 'fade-up'
                data-aos-delay = '600'
                data-aos-once = 'true'
              >
               <Feature
                  title = 'Practical'
                  icon = {<BsTools size = {32} color = '#fff'/>}
                  text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous.'
                  color = 'rgb(225 208 90)'
              />
              </div>
              <div 
                data-aos = 'fade-up'
                data-aos-delay = '700'
                data-aos-once = 'true'
              >
                <Feature
                    title = 'Gaurdian'
                    icon = {<IoShieldOutline size = {32} color = '#fff'/>}
                    text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous.'
                    color = '#AA4565'
                />
              </div>
               {/* <div className = 'skillcore__about-heading_bar-bottom'></div> */}
          </div>
          {/* <div className = 'skillcore__about-heading_bar-bottom'></div> */}
      </div>
  )
}

export default About
