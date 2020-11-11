import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Router, Link, NavLink, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Work from './work.js';
import Navbar from './navBar';
import Gitcat from '../images/github.png';
import Pokefoto from '../images/pokedex.png'

export class Pokedex extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <NavLink className="allLinks" activeClassName="activeRoute" to={`/`}>
                    <div className="pokedex">
                        <h3 className="poke-header">
                            Pokedex
                </h3>
                        <p className="poke-para">
                            A pokedex app to search for pokemon. The objective was to showcase jQuery, learn how to access a public API, and make a modal.
                </p>
                    </div>
                    <div className="skills"><p>
                        JQuery <br></br>
Bootstrap</p></div>
                </NavLink>
                <NavLink className="allLinks link" activeClassName="activeLink" to={{ pathname: "https://bowlofsunshine.github.io/pokemon-jquery/" }} target="_blank"><div></div></NavLink>
                <div className="git-cat">
                    <NavLink className="links" activeClassName="activeLink" to={{ pathname: "https://github.com/bowlofsunshine/pokemon-jquery" }} target="_blank"><img className="img-responsive" src={Gitcat} alt="logo" />
                    </NavLink></div>
                <img className="poke-foto" src={Pokefoto} alt="poxedex foto" />
            </div>
        )
    }
}

export default Pokedex;