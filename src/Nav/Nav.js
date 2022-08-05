import React from 'react';
import './Nav.css';
import '../Header/Header.css';
import Resume from '../assets/Resume.docx';

function Nav() {
    return (
        <section class="top-nav">
            <div class="logo">
                K
            </div>
       f     <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
            <ul class="menu">
                <li><a href="#app">Home</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Hire me</a></li>
                <li><a href={Resume}>Resume</a></li>
            </ul>
        </section>
    )
}

export default Nav