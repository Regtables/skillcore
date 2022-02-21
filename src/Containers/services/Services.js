import React from 'react'
import { IoPersonAddOutline } from 'react-icons/io5'
import { VscLaw } from 'react-icons/vsc';
import { GiBookshelf } from 'react-icons/gi'
import Circle from '../../Components/Circle/Circle'

import './services.css'

const Services = () => {
  return (
      <div className = 'skillcore__services' id = 'services'>
          <div className = 'skillcore__services-heading'>
              <h1>What we can do for you</h1>
          </div>
          <div className = 'skillcore__services-container'>
              <div className = 'skillcore__services-container_top'>
                  <Circle
                      title = 'Recruitment'
                      icon = {<IoPersonAddOutline size = {32} />}
                      text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous'
                  />
                  <Circle
                      title = 'Compliance'
                      icon = {<VscLaw size = {32} />}
                      text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous'
                  />
              </div>
              <div className = 'skillcore__services-container_bottom'>
                  <Circle
                      title = 'Training'
                      icon = {<GiBookshelf size = {32} />}
                      text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous'
                  />
              </div>
          </div>
      </div>
  )
}

export default Services
