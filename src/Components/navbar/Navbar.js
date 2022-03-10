import React from 'react'

import './navbar.css'

const Links = () => {
  return (
      <>
        <div>
          <p><a href = '#home'>Home</a></p>
        </div>
          <p><a href = '#about' role = 'link'>About</a></p>
          <p><a href = '#services' role = 'link'>Services</a></p>
          <p><a href = '#acts' role = 'link'>Acts</a></p>
          <p><a href = '#contact' role = 'link'>Contact</a></p>
        
      </>  
    
  )
}

const Navbar = () => {
  return (
      <div className = 'skillcore__navbar linear__bg' role = 'navigation'>
          <div className = 'skillcore__navbar-links'>
              <div className = 'skillcore__navbar-links_logo'>
                  <h1 role ='presentation'>Skillcore</h1>
              </div>
              <div className = 'skillcore__navbar-links_container'>
                  <Links />
              </div>
              <div className = 'skillcore__navbar-links_btn' role = 'button'>
                  <p>Request Appointment</p>
              </div>
          </div>
        </div>
  )
}

export default Navbar
