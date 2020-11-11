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
import Navbar from './navbar';

import Ripples from 'react-ripples'


export class Work extends React.Component {

    render() {
        return (
            <div className="work-container">
                <header className="name-header black-name" id="rachel">
                    Projects
                </header>
                <Navbar />
                <div className="body-work">
                    <header className="App-header">
                        <p>    Hey, my name is Rachel</p>
                    </header>

                    <Link to="/chat"><div className="chat-body"><div className="chat-title">Chat</div>
                    </div></Link>

                    <Link to="/meet"><div className="meet-body"><p className="meet-title">Meetup App</p>
                    </div></Link>

                    <Link to="/pokedex"><div className="poke-body"><p className="poke-title">Pokedex</p>
                    </div></Link>

                    <Link to="/netty"><div className="net-body"><p className="net-title">Where in the World</p>
                    </div></Link>

                    <Link to="/caf"><div className="caf-body"><p className="caf-title">Cotati Accordion Festival</p>
                    </div></Link>

                    <Link to="/visa"><div className="visa-body"><p className="visa-title">Visa 101</p>
                    </div></Link>

                    <Link to="/todo"><div className="todo-body"><p className="todo-title">Todo</p>
                    </div></Link>

                    <Link to="/quiz"><div className="quiz-body"><p className="quiz-title">Quick Quiz App</p>
                    </div></Link>

                    <Link to="/myflix"><div className="flix-body"><p className="flix-title">My Flix</p>
                    </div></Link>

                </div>
            </div>


        );
    }
}

export default Work;

