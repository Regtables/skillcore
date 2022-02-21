import React from 'react'

import './navbar.css'

const Links = () => {
  return (
      <>
          <p><a href = '#home'>Home</a></p>
          <p><a href = '#about'>About</a></p>
          <p><a href = '#services'>Services</a></p>
          <p><a href = '#acts'>Acts</a></p>
          <p><a href = '#contact'>Contact</a></p>
        
      </>  
    
  )
}

const Navbar = () => {
  return (
      <div className = 'skillcore__navbar'>
          <div className = 'skillcore__navbar-links'>
              <div className = 'skillcore__navbar-links_logo'>
                  <h1>SKILLCORE</h1>
              </div>
              <div className = 'skillcore__navbar-links_container'>
                  <Links />
              </div>
          </div>
        </div>
  )
}

export default Navbar
