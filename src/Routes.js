import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

// import About from "./About/About";
// import Contact from "./Contact/Contact";
// import Products from "./Product/Products";
// import Home from "./Home/Home";
import history from './history';
import Meetup from "./components/meet";
import Work from "./components/work";
import Chat from "./components/chat";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {/* <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} /> */}
                    <Route path="/Work" component={Work} />
                    <Route path="/Chat" component={Chat} />
                    <Route path="/Meet" component={Meetup} />

                </Switch>
            </Router>
        )
    }
}