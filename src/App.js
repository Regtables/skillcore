import React from 'react';

import { GiDandelionFlower, GiSunflower, GiPineTree, GiSeedling } from 'react-icons/gi';
import { FiSun } from 'react-icons/fi'
import { FaSeedling } from 'react-icons/fa'

import './App.css'

import { Navbar, Partition } from './Components';
import { Header, About, Services, Acts, Quote, CTA, Contact, Footer } from './Containers';

const App = () => {
  return (
      <div className = 'app'>
        <header className>
            <nav>
                <Navbar />
            </nav>
            <Header />
            <Partition icon = {<GiSunflower size = {30}/>} />
        </header>
        <main>
            <About />
            <Partition icon = {<GiPineTree size = {30} />} top />
            <Services />
            <CTA />
            <Partition icon = {<FaSeedling size = {30} />} />
            <Acts />
            <Partition icon = {<FiSun size = {30}/>} top/>
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