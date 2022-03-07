import React from 'react';

import './App.css'

import { Navbar } from './Components';
import { Header, About, Services, Acts, Quote } from './Containers';

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
            <Quote />
        </main>
      </div>
  )
}

export default App