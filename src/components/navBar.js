
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
            <div className="navbar">

                <div
                    className={`navbar-background ${this.state.navShow &&
                        "navbar-background--show"}`}
                ></div>
                <button
                    className={`hamburger hamburger--slider ${this.state.navShow &&
                        "is-active"} navbar-toggler`}
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
                    className={`navbar-links ${this.state.navShow &&
                        "navbar-links--show"}`}
                >
                    <ListGroup className="ol">
                        <ListGroup.Item>
                            <NavLink to="/work" className="li all-links" onClick={this.handleToggleClick}>projects</NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <NavLink to="/about" className="li all-links" onClick={this.handleToggleClick}>about</NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <NavLink to="/contact" className="li all-links" onClick={this.handleToggleClick}>contact</NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <NavLink to={{ pathname: "https://www.github.com" }} className="li all-links" target="_blank" onClick={this.handleToggleClick}>github</NavLink>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        );
    }
}

export default Navbar;