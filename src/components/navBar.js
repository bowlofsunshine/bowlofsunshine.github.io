
import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { BrowserRouter, Route, Router, Link, Switch, NavLink } from "react-router-dom";
import '../App.css';
import './hamburgers.css';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navShow: false,
            black: true
        };

        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => {
            return { navShow: !state.navShow };
        });

    }


    render() {
        return (
            <div className="Navbar">

                <div
                    className={`Navbar__background ${this.state.navShow &&
                        "Navbar__background--show"}`}
                ></div>
                <button
                    className={`hamburger hamburger--slider ${this.state.navShow &&
                        "is-active"} Navbar__toggler`}
                    type="button"
                    aria-label="Menu"
                    aria-controls="navigation"
                    onClick={this.handleToggleClick}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner makewhite"></span>
                    </span>
                </button>

                <div
                    className={`Navbar__links ${this.state.navShow &&
                        "Navbar__links--show"}`}
                >
                    <ListGroup className="ol">
                        <ListGroup.Item>
                            <NavLink to="/work" className="li allLinks" onClick={this.handleToggleClick}>projects</NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <NavLink to="/about" className="li allLinks" onClick={this.handleToggleClick}>about</NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <NavLink to="/contact" className="li allLinks" onClick={this.handleToggleClick}>contact</NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <NavLink to={{ pathname: "https://www.github.com" }} className="li allLinks" target="_blank" onClick={this.handleToggleClick}>github</NavLink>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        );
    }
}

export default Navbar;