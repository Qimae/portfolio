import React from 'react';
import './Header.css';

function Header() {
    return (
        <nav>
            <label for="hamburger"><span>K</span>&#9776;</label>
            <input type="checkbox" id="hamburger" />
            <div className='topnav'>
                <span>K</span>
                <a href="#home" >Home</a>
                <a href="#home">Projects</a>
                <a href="#about">Hire Me</a>
                <a href="#contact">Resume</a>
            </div>

        </nav>

    )
}


export default Header