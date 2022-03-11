import React, { useState } from 'react';

import { GiDandelionFlower, GiSunflower, GiPineTree, GiSeedling } from 'react-icons/gi';
import { FiSun } from 'react-icons/fi'
import { FaSeedling } from 'react-icons/fa'

import './App.css'

import { Navbar, Partition } from './Components';
import { Header, About, Services, Acts, Quote, CTA, Contact, Footer } from './Containers';

const App = () => {
  const [ appToggleContact, setAppToggleContact ] = useState(false)

  if(appToggleContact === true){
    console.log('act contact')
  }

  return (
      <div className = 'app'>
        <header className>
            <nav>
                <Navbar />
            </nav>
            <Header />
              <Partition icon = {<GiSunflower size = {42}/>} />
        </header>
        <main>
            <About />
              <Partition icon = {<GiPineTree size = {42} />} top />
            <Services />
            <CTA />
              <Partition icon = {<FaSeedling size = {38} />} />
            <Acts />
            < Partition icon = {<FiSun size = {42}/>} top/>
            <Quote />
            <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  )
}

export default App