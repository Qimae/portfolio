import React from 'react';
import './Body.css';
import Design from '../assets/layers.png';
import Web from '../assets/code.png';

function Body() {
    return (
        <div className='body'>
            <div className='intro'>
                <h2>Hi, I'm Kimae. Nice to meet you.</h2>
                <p>Since the beginning when I started my diploma, I have been able to design two platforms and collaborated with talented people
                    to build a solution for their company. I'm quietly confident and perpetually motivated on improving my skills
                    and solve real-life problems. I'am currently available to begin a new journey as a Junior Developer.
                </p>
            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={Design} alt='design'></img>
                        <h3>Designer</h3>
                        <p>Some text</p>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={Web} alt='web'></img>
                        <h3>Front-end Developer</h3>
                        <p>Some text</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Body