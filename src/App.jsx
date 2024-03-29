import React from 'react';

import { About, Footer, Header, Skills, Blog, Projects } from './container';
import { Navbar } from './components';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
