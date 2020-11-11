import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Router, Link, NavLink, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Work from './work.js';
import Navbar from './navBar';


export class Netflix extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <NavLink className="allLinks" activeClassName="activeRoute" to={`/`}>
                    <div className="netflix">
                        <h3 className="netflix-header">Where in the World</h3>
                        <p className="netflix-para">A work in progress creating an end all be all site to find whatever you want to watch.</p>
                        {/* <NavLink className="allLinks link" activeClassName="activeLink" to="/meet"><div>
                        </div></NavLink> */}
                    </div>
                </NavLink>
            </div>
        )
    }
}

export default Netflix;