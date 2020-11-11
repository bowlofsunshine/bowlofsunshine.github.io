import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Router, Link, NavLink, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Work from './work.js';
import Navbar from './navBar';


export class Contact extends React.Component {

    render() {

        return (

            <div >
                <Navbar />
                <NavLink className="allLinks" activeClassName="activeRoute" to={`/`}>
                    <div className="contact" >
                        <h3 className="contact-head">Hey hi hello. Email me! I like them. </h3>
                        <p className="contact-para">rachel@rachel.coffee</p>
                        <NavLink className="allLinks github" activeClassName="activeLink" to="/meet"><p>github</p></NavLink>
                        <NavLink className="allLinks insta" activeClassName="activeLink" to="/meet"><p>instagram</p></NavLink>
                        <NavLink className="allLinks medium" activeClassName="activeLink" to="/meet"><p>medium</p></NavLink>
                        <NavLink className="allLinks twitter" activeClassName="activeLink" to="/meet"><p>twitter</p></NavLink>
                        <NavLink className="allLinks linked" activeClassName="activeLink" to="/meet"><p>linkedin</p></NavLink>
                    </div>

                </NavLink>


            </div>
        )
    }
}

export default Contact;