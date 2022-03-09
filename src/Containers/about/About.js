import React from 'react'
import { BsTree, BsTools } from 'react-icons/bs'
import { BiHourglass } from 'react-icons/bi'
import { IoShieldOutline } from 'react-icons/io5'
import Feature from '../../Components/feature/Feature'

import './about.css'

const About = () => {
  return (
      <div className = 'skillcore__about linear__bg' id = 'about'>
          <div className = 'skillcore__about-heading'>
              <div className = 'skillcore__about-heading_title'>
                    <div className = 'skillcore__about-heading_bar-top'></div>
                    <h1>Why choose Skillcore?</h1>
              </div>
              <div className = 'skillcore__about-feature'>
                  <Feature
                      title = 'Persistance'
                      icon = {<BsTree size = {32} color = '#fff'/>}
                      text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
                      color = '#00DFDE'
                  />
              </div>
          </div>
        
          <div className = 'skillcore__about-container'>
              <Feature
                  title = 'Experience'
                  icon = {<BiHourglass size = {32} color = '#fff'/>}
                  text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
                  color = '#2ABB82'
              />
               <Feature
                  title = 'Practical'
                  icon = {<BsTools size = {32} color = '#fff'/>}
                  text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
                  color = 'rgb(225 208 90)'
              />
               <Feature
                  title = 'Gaurdian'
                  icon = {<IoShieldOutline size = {32} color = '#fff'/>}
                  text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
                  color = '#AA4565'
              />
               {/* <div className = 'skillcore__about-heading_bar-bottom'></div> */}
          </div>
          {/* <div className = 'skillcore__about-heading_bar-bottom'></div> */}
      </div>
  )
}

export default About
