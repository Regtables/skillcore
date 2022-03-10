import React from 'react'
import { IoPersonAddOutline } from 'react-icons/io5'
import { VscLaw } from 'react-icons/vsc';
import { GiBookshelf } from 'react-icons/gi'
import { GrUserManager } from 'react-icons/gr'

import Dot from '../../Components/dot/Dot';
import Circle from '../../Components/circle/Circle';
import SectionHeading from '../../Components/sectionHeading/SectionHeading';

import './services.css'

const Services = () => {
  return (
      <div className = 'skillcore__services margin__top' id = 'services'>
          <div className = 'skillcore__services-heading' role = 'heading'>
              <div className = 'skillcore__services-heading_bar-top' role = 'presentation'></div>
              <div className = 'skillcore__services-heading_content'>
                    <h1>What <span className = 'fade-in'>we</span> can do for <span>you</span>.</h1>
                    <p>At Skillcore we offer a wide range of services that we've practiced and refined over many years of service</p>
              </div>
              
          </div>

          <div className = 'skillcore__services-container'>
              <div className = 'skillcore__services-container_top'>
                  {/* <Dot color = '#660b1f' margin = '2rem'/> */}
                  <Circle
                      title = 'Buisness Management'
                      icon = {<GrUserManager size = {32}/>}
                      text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous'  
                  />
                  {/* <Dot color = '#660b1f' /> */}
              </div>


              <div className = 'skillcore__services-container_middle'>
                  {/* <Dot color = '#660b1f' /> */}
                  <Circle
                      title = 'Recruitment'
                      icon = {<IoPersonAddOutline size = {32} />}
                      text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous'
                  />
                  <div className = 'skillcore__services-container_middle-dots'>
                      <Dot color = '#99280E' />
                      <Dot color = '#2ABB82' />
                      <Dot color = '#00DFDE' />
                      <Dot color = '#532A52' />
                  </div>
                  <Circle
                      title = 'Compliance'
                      icon = {<VscLaw size = {32} />}
                      text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous'
                  />
                  {/* <Dot color = '#660b1f' /> */}
              </div>

              <div className = 'skillcore__services-container_bottom'>
                  {/* <Dot color = '#660b1f' /> */}
                  <Circle
                      title = 'Training'
                      icon = {<GiBookshelf size = {32} />}
                      text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous'
                  />
                  {/* <Dot color = '#660b1f' /> */}
              </div>
          </div>
      </div>
  )
}

export default Services
