import React, { Component } from 'react';
import './App.css';
import './components/hamburgers.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Router, Link, Switch, withRouter } from "react-router-dom";

import Work from './components/work.js';
import Open from './components/open.js';
import NavBar from './components/navbar';
import aboutChat from './components/aboutChat.js';

import Chat from './components/chat.js';
import Meetup from './components/meet.js';
import Visa from './components/visa.js';
import Todo from './components/todo.js';
import Quiz from './components/quiz.js';
import Poke from './components/poke.js';
import Netflix from './components/net.js';
import Myflix from './components/myflix.js';
import Caf from './components/caf.js';
import Contact from './components/contact.js';

import styled from "styled-components";

import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {
    this.setState({
      showing: true
    });
  }


  render() {
    const { showing } = this.state;

    return (
      <BrowserRouter >
        <Route render={({ location }) => (
          <TransitionGroup component={null}>
            <CSSTransition
              key={location.key} timeout={300} classNames="fade"
            >
              <Switch location={location}>
                <Route path="/work" component={Work} />
                <Route path="/about" component={aboutChat} />
                <Route path="/contact" component={Contact} />
                <Route path="/chat" component={Chat} />
                <Route path="/meet" component={Meetup} />
                <Route path="/caf" component={Caf} />
                <Route path="/myflix" component={Myflix} />
                <Route path="/netty" component={Netflix} />
                <Route path="/pokedex" component={Poke} />
                <Route path="/quiz" component={Quiz} />
                <Route path="/todo" component={Todo} />
                <Route path="/visa" component={Visa} />
                <div>
                  <Container className="name-container" onClick={() => this.setState({ showing: !showing })} />
                  {showing
                    ? <Work /> : <Open />}
                </div>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </BrowserRouter>
    );
  }
}

export default withRouter(App);