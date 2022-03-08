import React from 'react';

import './App.css'

import { Navbar } from './Components';
import { Header, About, Services, Acts, Quote, CTA, Contact } from './Containers';

const App = () => {
  return (
      <div className = 'app'>
        <header className>
            <nav>
                <Navbar />
            </nav>
            <Header />
        </header>
        <main>
            <About />
            <Services />
            <Acts />
            <CTA />
            <Quote />
            <Contact />
        </main>
      </div>
  )
}

export default App