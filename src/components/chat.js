import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Router, Link, NavLink, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Work from './work.js';
import Navi from './navigation.js'
import Gitcat from '../images/github.png';
import Chat1 from '../images/chatapp1.png';
import Chat2 from '../images/chatapp2.png';

export class Chat extends React.Component {
    render() {
        return (
            <div>
                <Navi />
                <NavLink className="all-links" activeClassName="activeRoute" to={`/`}>
                    <div className="chat" >
                        <h3 className="chat-header">Chat App</h3>
                        <p className="chat-para">React Native Chat App for IOS/Android where you can send messages, photos and share your location with others.</p>
                        <NavLink className="all-links link" activeClassName="activeLink" to="/meet"><div></div></NavLink>
                    </div>
                    <div className="skills"><p>
                        React Native <br></br>
                        Firestore Database <br></br>
                        Firebase <br></br>
                        GiftedChat</p>
                    </div>
                </NavLink>

                <div className="git-cat">
                    <NavLink className="links" activeClassName="activeLink" to={{ pathname: "https://github.com/bowlofsunshine/hello-world" }} target="_blank"><img className="img-responsive" src={Gitcat} alt="logo" /></NavLink>
                </div>
                <img className="chat1" src={Chat1} alt="chatapp1" />
                <img className="chat2" src={Chat2} alt="chatapp2" />
            </div>
        )
    }
}

export default Chat;

