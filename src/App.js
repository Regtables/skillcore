import React from 'react';

import './App.css'

import { Navbar } from './Components';
import { Header, About, Services, Acts, Quote, CTA, Contact, Footer } from './Containers';

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
            <CTA />
            <Acts />
            <Quote />
            <Contact />
            <Footer />
        </main>
      </div>
  )
}

export default App