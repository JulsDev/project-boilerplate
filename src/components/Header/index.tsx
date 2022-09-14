import React from 'react';
import NavigationBar from '../NavigationBar';

import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <a href='#' className='logo-pic'>JA </a>
      </div>
      <NavigationBar />
      <p>language block</p>
    </header>
  )
};

export default Header;
