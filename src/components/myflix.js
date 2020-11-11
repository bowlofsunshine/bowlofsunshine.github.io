import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Router, Link, NavLink, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Work from './work.js';
import Navbar from './navBar';
import Gitcat from '../images/github.png';
import Flix from '../images/flix.png';

export class Myflix extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <NavLink className="allLinks" activeClassName="activeRoute" to={`/`}>
                    <div className="myflix">
                        <h3 className="myflix-header">Myflix</h3>
                        <p className="myflix-para">Movie WebApp providing users information about movies. Users can sign up, update their personal information, and create a list of their favourite movies.</p>
                    </div>
                    <div className="skills"><p>
                        Redux <br></br>
                        React <br></br>
                        MongoDB <br></br>
                        Express <br></br>
                        NodeJS</p></div>
                </NavLink>
                <NavLink className="allLinks link" activeClassName="activeLink" to={{ pathname: "https://myflixyappy1226.herokuapp.com/client" }} target="_blank"><div>
                </div></NavLink>
                <div className="git-cat">
                    <NavLink className="links" activeClassName="activeLink" to={{ pathname: "https://github.com/bowlofsunshine/movie_api" }} target="_blank"><img className="img-responsive" src={Gitcat} alt="logo" />
                    </NavLink></div>
                <img className="flix-foto" src={Flix} alt="flix foto" />
            </div>
        )
    }
}

export default Myflix;