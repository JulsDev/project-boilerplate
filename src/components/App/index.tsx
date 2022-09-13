import React from 'react';
import NavigationBar from '../NavigationBar';

import addImage from '../addImage';
import hello from '../hello';

addImage();
hello();

const App = () => (
  <main>
    <NavigationBar />
    <p>Application</p>
  </main>
);

export default App;
