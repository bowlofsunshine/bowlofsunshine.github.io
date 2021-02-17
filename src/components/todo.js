import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import Navi from './navigation.js'
import Gitcat from '../images/github.png';
import TodoFoto from '../images/todo.png';
import CaseStudy from '../images/casestudy.png';

export class Todo extends React.Component {

    render() {

        return (

            <div >
                <Navi />
                <NavLink className="all-links" activeClassName="active-route" to={`/`}>
                    <div className="todo">
                        <h3 className="todo-header">Todo List</h3>
                        <p className="todo-para">Vue todo app with draggable tasks and client side storage. It uses Vue.js and Material design UI.</p>
                    </div>
                    <div className="skills"><p>
                        Vue.js <br></br>
                        Material Design UI</p>
                    </div>
                </NavLink>
                <NavLink className="all-links link" activeClassName="active-link" to={{ pathname: "https://vuetodo1226.herokuapp.com/" }} target="_blank"><div></div></NavLink>
                <div className="git-cat-todo">
                    <NavLink className="links" activeClassName="active-link" to={{ pathname: "https://github.com/bowlofsunshine/todo" }} target="_blank"><img className="img-responsive" src={Gitcat} alt="logo" /></NavLink>
                </div>
                <div className="case-study">
                    <NavLink className="links" activeClassName="active-link" to="/todo-more"><img className="img-responsive" src={CaseStudy} alt="logo" /></NavLink>
                </div>
                <img className="todo-foto" src={TodoFoto} alt="todo foto" />
            </div>
        )
    }
}

export default Todo;