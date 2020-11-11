import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Chat from './components/chat.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <App />

      </Switch>
    </Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
