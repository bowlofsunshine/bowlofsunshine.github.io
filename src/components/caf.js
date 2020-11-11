import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Router, Link, NavLink, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Work from './work.js';
import Navi from './navigation.js'


export class CAF extends React.Component {
    render() {
        return (
            <div>
                <Navi />
                <NavLink className="all-links" activeClassName="active-route" to={`/`}>
                    <div className="caf">
                        <h3 className="caf-header">Cotati Accordion Festival</h3>
                        <p className="caf-headline">A Website for the Cotati Accordion Festival! </p>
                        <p className="caf-para">The current website is built with WordPress also using custom JS and html/css. Right now I am creating a new version built from scratch with React. </p>
                    </div>
                </NavLink>
                <NavLink className="all-links link caf-arrow" activeClassName="active-link" to={{ pathname: "http://cotatifest.com/" }} target="_blank"><div></div></NavLink>
            </div>
        )
    }
}

export default CAF;

