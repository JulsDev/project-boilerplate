import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './styles.scss';

const menu = [
  {title: "Home", linkSec : "#hero"},
  {title: "About me", linkSec : "#about"},
  {title: "Skills", linkSec : '#skills'},
  {title: "Works", linkSec : '#works'},
  {title: "Contacts", linkSec : '#contacts'}
];

const NavigationBar = () => {
  return (
    <nav className='nav-wrapper'>
    <ul className='nav-bar'>
      {
        menu.map((item) => {
          return (
            <li className='nav-item' key={`nav_${item.title}`}>
              <HashLink smooth to={item.linkSec}>
                {item.title}
              </HashLink>
            </li>
          )
        })
      }
    </ul>
  </nav>
  )
};

export default NavigationBar;
