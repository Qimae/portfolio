import React from 'react';
import './Body.css';
import Design from '../assets/layers.png';
import Web from '../assets/code.png';
import Jogolo from '../assets/jogolo.png';
import Skillz from '../assets/skillz.png';
import Contact from '../Contact/Contact';

function Body() {
    return (
        <div className='body'>
            {/* intro header */}
            <div className='intro'>
                <h2>Hi, I'm Kimae. Nice to meet you.</h2>
                <p>Starting from the start when I began my diploma,
                    I have had the option to plan two stages and teamed up with skilled individuals to fabricate
                    an answer for their organization. I'm discreetly sure and unendingly inspired on working on my abilities and take care of genuine issues. I'am right now accessible to start another excursion as a Junior Developer.</p>
            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={Design} alt='design'></img>
                        <h2>Designer</h2>
                        <p>I esteem basic substance structure, clean <br></br>plan designs, and smart <br></br>communications.</p>
                        <h4>Things I appreciate designing:</h4>
                        <p>UI, Logos, Web, Apps</p>
                        <h4>Design Tools:</h4>
                        <p>Figma</p>
                        <p>Pen & Paper</p>
                        <p>Font Awesome</p>
                        <p>Sketch</p>

                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={Web} alt='web'></img>
                        <h2>Front-end Developer</h2>
                        <p>I like to code things without any pre-coded preparation, and <br></br>appreciate rejuvenating thoughts in the <br></br>program.</p>
                        <h4>Languages:</h4>
                        <p>HTML5, CSS, Javascript, ReactJs, Git</p>
                        <h4>Dev Tools:</h4>
                        <p>Bootstrap</p>
                        <p>Github</p>
                        <p>CodePen</p>
                        <p>jQuery</p>
                        <p>Chrome Dev Tools</p>
                    </div>
                </div>
            </div>
            {/* portfolio */}
            <div className='portfolio' id='projects'>
                <h2>My Recent Work</h2>
                <p>Here are a few past design projects I've worked on. <a href='mailto:kimaekahindi@yahoo.com'>Email me</a> for more.</p>
                <div class="row1">
                    <div class="column1">
                        <div class="card1">
                            <div class="container">
                                <img src={Jogolo} alt="Avatar" class="image"></img>
                                <div class="overlay">
                                    <div class="text1">Real Estate investors, building Kenya step by step.
                                        <a href='http://jogolo-plaza.000webhostapp.com/'><button class="button">View Website</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column1">
                        <div class="card1">
                            <div class="container">
                                <img src={Skillz} alt="Avatar" class="image"></img>
                                <div class="overlay">
                                    <div class="text1">E-learning platform, serving the world to create future programmers.
                                        <button class="button">View Website</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />

            {/* footer */}
            <div className='start'>
                <div className='row2'>
                    <h2>Start a Project</h2>
                    <p>Keen on cooperating? We ought to line up an opportunity to talk.<br></br> I'll purchase the espresso.</p>
                    <a href='mailto:kimaekahindi@yahoo.com'><button className='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                            <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z" />
                        </svg>  Let's do this
                    </button></a>
                </div>

                <div className='row3'>
                    <div class="column3">
                        <div class="card3">
                            <h2>Start a Project</h2>
                            <p>Keen on cooperating? We ought to line up an opportunity to talk. I'll purchase the espresso.</p>
                            <button className='button'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z" />
                                </svg> Let's do this</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <p>K</p>
                <h3>Living, learning, and stepping up each day in turn.</h3>
                <div className='icons'>
                    <ul>
                        <li><a href='https://wa.me/254759719777'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg></a></li>
                        <li><a href='https://github.com/Qimae'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg></a></li>
                        <li><a href='https://www.linkedin.com/in/kimae-ngowa-aa84328b'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Body