import React from 'react';

import './App.css'

import { Navbar } from './Components';
import { Header, About, Services, Acts } from './Containers';

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
        </main>
      </div>
  )
}

export default App