import React from 'react';
import './Nav.css';
import '../Header/Header.css';

function Nav() {
    return (
        <section class="top-nav">
            <div class="logo">
                K
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
            <ul class="menu">
                <li><a href='#home'>Home</a></li>
                <li><a href='#home'>Projects</a></li>
                <li><a href='#home'>Hire me</a></li>
                <li><a href='#home'>Resume</a></li>
            </ul>
        </section>
    )
}

export default Nav