import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Router, Link, NavLink, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Work from './work.js';
import Navi from './navigation.js'

export class Visa extends React.Component {
    render() {
        return (
            <div>
                <Navi />
                <NavLink className="all-links" activeClassName="active-route" to={`/`}>
                    <div className="visa">
                        <h3 className="visa-header">Visa 101</h3>
                        <p className="visa-para">A work in progress creating a free site to help people in Berlin navigate teh visa prosess.</p>
                        {/* <NavLink className="all-links link" activeClassName="activeLink" to="/meet"><div>
                        </div></NavLink> */}
                    </div>
                </NavLink>
            </div>
        )
    }
}

export default Visa;