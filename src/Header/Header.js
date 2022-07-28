import React from 'react';
import './Header.css';
import Me from '../assets/me.jpeg';

function Header() {
  return (
    <div className='header'>
      <div className='text'>
        <h1>Designer & Front-end Developer</h1>
        <p>I design and code beautiful and simple things.</p>
        <img src={Me} alt='me'></img>
      </div>
    </div>

  );
}


export default Header