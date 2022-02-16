import React from 'react';

import './App.css'

import { Navbar } from './Components';
import { Header, About } from './Containers';

const App = () => {
  return (
      <div className = 'app'>
        <header>
            <nav>
                <Navbar />
            </nav>
        </header>
            <Header />
        <main>
            <About />
        </main>
      </div>
  )
}

export default App