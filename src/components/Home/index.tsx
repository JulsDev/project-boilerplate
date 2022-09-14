import React from 'react';

import About from './About';
import Hero from './Hero';
import './styles.scss';

const Home = () => {
  return (
    <div className='container'>
      <Hero />
      <About />
    </div>
  )
};

export default Home;