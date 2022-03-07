import React from 'react'

import './navbar.css'

const Links = () => {
  return (
      <>
        <div>
          <p><a href = '#home'>Home</a></p>
        </div>
          <p><a href = '#about'>About</a></p>
          <p><a href = '#services'>Services</a></p>
          <p><a href = '#acts'>Acts</a></p>
          <p><a href = '#contact'>Contact</a></p>
        
      </>  
    
  )
}

const Navbar = () => {
  return (
      <div className = 'skillcore__navbar linear__bg'>
          <div className = 'skillcore__navbar-links'>
              <div className = 'skillcore__navbar-links_logo'>
                  <h1>Skillcore</h1>
              </div>
              <div className = 'skillcore__navbar-links_container'>
                  <Links />
              </div>
              <div className = 'skillcore__navbar-links_btn'>
                  <p>Request Appointment</p>
              </div>
          </div>
        </div>
  )
}

export default Navbar
