import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Router, Link, Switch } from "react-router-dom";
import HamburgerMenu from 'react-hamburger-menu';
import Chat from './chat.js';
import Open from './open.js';
import Meetup from './meet.js';
import App from '../App.js';
import Contact from './contact.js';
import Navbar from './navBar';

import Ripples from 'react-ripples'


export class Work extends React.Component {

    render() {
        return (
            <div className="workContainer">
                <header className="name-header black-name" id="rachel">
                    Projects
                </header>
                <Navbar />
                <div className="bodyWork">
                    <header className="App-header">
                        <p>    Hey, my name is Rachel</p>
                    </header>

                    <Link to="/chat"><div className="chat-body"><div className="chatTitle">Chat</div>
                    </div></Link>

                    <Link to="/meet"><div className="meetBody"><p className="meetTitle">Meetup App</p>
                    </div></Link>

                    <Link to="/pokedex"><div className="pokeBody"><p className="pokeTitle">Pokedex</p>
                    </div></Link>

                    <Link to="/netty"><div className="netBody"><p className="netTitle">Where in the World</p>
                    </div></Link>

                    <Link to="/caf"><div className="cafBody"><p className="cafTitle">Cotati Accordion Festival</p>
                    </div></Link>

                    <Link to="/visa"><div className="visaBody"><p className="visaTitle">Visa 101</p>
                    </div></Link>

                    <Link to="/todo"><div className="todoBody"><p className="todoTitle">Todo</p>
                    </div></Link>

                    <Link to="/quiz"><div className="quizBody"><p className="quizTitle">Quick Quiz App</p>
                    </div></Link>

                    <Link to="/myflix"><div className="flixBody"><p className="flixTitle">My Flix</p>
                    </div></Link>

                </div>
            </div>


        );
    }
}

export default Work;

