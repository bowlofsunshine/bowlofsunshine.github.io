import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Router, Link, NavLink, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Work from './work.js';
import Navbar from './navbar';
import Gitcat from '../images/github.png';
import TodoFoto from '../images/todo.png';

export class Todo extends React.Component {

    render() {

        return (

            <div >
                <Navbar />
                <NavLink className="all-links" activeClassName="active-route" to={`/`}>
                    <div className="todo">
                        <h3 className="todo-header">Todo List</h3>
                        <p className="todo-para">Vue todo app with draggable tasks and client side storage. It uses Vue.js and Material
                    design UI.</p>
                    </div>
                    <div className="skills"><p>
                        Vue.js <br></br>
Material Design UI</p></div>

                </NavLink>
                <NavLink className="all-links link" activeClassName="active-link" to={{ pathname: "https://vuetodo1226.herokuapp.com/" }} target="_blank"><div>
                </div></NavLink>
                <div className="git-cat">
                    <NavLink className="links" activeClassName="active-link" to={{ pathname: "https://github.com/bowlofsunshine/todo" }} target="_blank"><img className="img-responsive" src={Gitcat} alt="logo" />
                    </NavLink></div>
                <img className="todo-foto" src={TodoFoto} alt="todo foto" />

            </div>
        )
    }
}

export default Todo;