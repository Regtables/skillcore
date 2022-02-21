import React from 'react'
import { BsTree, BsTools } from 'react-icons/bs'
import { BiHourglass } from 'react-icons/bi'
import { IoShieldOutline } from 'react-icons/io5'
import Feature from '../../Components/feature/Feature'

import './about.css'

const About = () => {
  return (
      <div className = 'skillcore__about' id = 'about'>
          <div className = 'skillcore__about-heading'>
              <h1>Why choose Skillcore?</h1>
              <div className = 'skillcore__about-feature'>
                  <Feature
                      title = 'Persistance'
                      icon = {<BsTree size = {32} color = '#fff'/>}
                      text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
                  />
              </div>
          </div>
        
          <div className = 'skillcore__about-container'>
              <Feature
                  title = 'Experience'
                  icon = {<BiHourglass size = {32} color = '#fff'/>}
                  text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
              />
               <Feature
                  title = 'Practical'
                  icon = {<BsTools size = {32} color = '#fff'/>}
                  text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
              />
               <Feature
                  title = 'Gaurdian'
                  icon = {<IoShieldOutline size = {32} color = '#fff'/>}
                  text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
              />
          </div>
      </div>
  )
}

export default About
