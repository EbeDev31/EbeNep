import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from "./components/SignIn"
import Logout from "./components/Logout"
import Home from "./components/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/logout" component={Logout} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>

    );
  }
}