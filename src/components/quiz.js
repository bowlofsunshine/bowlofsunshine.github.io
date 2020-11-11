import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Router, Link, NavLink, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Work from './work.js';
import Navbar from './navBar';
import Gitcat from '../images/github.png';
import Quiz1 from '../images/quiz1.png';
import Quiz2 from '../images/quiz2.png';

export class Quiz extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <NavLink className="allLinks" activeClassName="activeRoute" to={`/`}>
                    <div className="quiz">
                        <h3 className="quiz-header">Quiz App</h3>
                        <p className="quiz-para">A web app that uses the JavaScript framework Angular to create a series of quizzes that test user's knowledge.</p>
                    </div>
                    <div className="skills"><p>
                        React Native <br></br>
                        Firestore Database <br></br>
                        Firebase <br></br>
                            GiftedChat</p></div>
                </NavLink>
                <NavLink className="allLinks link" activeClassName="activeLink" to={{ pathname: "https://bowlofsunshine.github.io/my-awesome-quiz-app/" }} target="_blank"><div>
                </div></NavLink>
                <div className="git-cat">
                    <NavLink className="links" activeClassName="activeLink" to={{ pathname: "https://github.com/bowlofsunshine/my-awesome-quiz-app" }} target="_blank"><img className="img-responsive" src={Gitcat} alt="logo" />
                    </NavLink></div>
                <img className="quiz1" src={Quiz1} alt="quiz foto" />
                <img className="quiz2" src={Quiz2} alt="quiz foto" />
            </div>
        )
    }
}

export default Quiz;