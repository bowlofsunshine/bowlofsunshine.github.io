import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import Navi from './navigation.js';
// import { gsap } from "gsap";
// import { TimelineLite } from "gsap";

export class Work extends React.Component {

    render() {

        return (

            <div className="work-container">
                <header className="name-header">
                    <div>Projects?</div>
                    <div>Projects??</div>
                    <div>Projects?</div>
                </header>
                <Navi />

                <div className="body-work">
                    <div className="App-header" contenteditable>
                        <p>Hey, my name is Rachel</p>
                    </div>
                    <Link to="/chat"><div className="chat-body"><div className="chat-title">Chat</div></div></Link>

                    <Link to="/meet"><div className="meet-body"><p className="meet-title">Meetup App</p></div></Link>

                    <Link to="/pokedex"><div className="poke-body"><p className="poke-title">Pokedex</p></div></Link>

                    <Link to="/netty"><div className="net-body"><p className="net-title">Where in the World</p></div></Link>

                    <Link to="/caf"><div className="caf-body"><p className="caf-title">Cotati Accordion Festival</p></div></Link>

                    <Link to="/visa"><div className="visa-body"><p className="visa-title">Visa 101</p></div></Link>

                    <Link to="/todo"><div className="todo-body"><p className="todo-title">Todo List</p></div></Link>

                    <Link to="/quiz"><div className="quiz-body"><p className="quiz-title">Quick Quiz App</p></div></Link>

                    <Link to="/myflix"><div className="flix-body"><p className="flix-title">My Flix</p></div></Link>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>


                        <filter id="squiggly-0">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
                            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
                        </filter>
                        <filter id="squiggly-1">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                        </filter>

                        <filter id="squiggly-2">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                        </filter>
                        <filter id="squiggly-3">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                        </filter>

                        <filter id="squiggly-4">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                        </filter>
                    </defs>
                </svg>
            </div>
        );
    }
}

export default Work;

