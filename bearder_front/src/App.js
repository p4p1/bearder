import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Navbar, Nav, Form,  Button } from 'react-bootstrap';

import logo from './images/title_transparent.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';

import Logout from './Components/Logout.js';

import LoginScreen from './screen/LoginScreen.js';
import RegisterScreen from './screen/RegisterScreen.js';
import HomeScreen from './screen/HomeScreen.js';
import InformationScreen from './screen/InformationScreen.js';

import MainScreen from './screen/MainScreen.js';
import ProfileScreen from './screen/ProfileScreen.js';
import PremiumScreen from './screen/PremiumScreen.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false
    }

    global.api_link = "http://localhost:8080"
  }

  render () {
    var uname = localStorage.getItem('username');

    return (
      <Router>
        <div>
          <header>
            <Navbar expand="lg" variant="dark" bg="dark">
              <Navbar.Brand href="/">
                <img src={logo} className="App-logo" alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/Information">
                    Information
                  </Nav.Link>
                  <Nav.Link href="https://github.com/p4p1/bearder">
                    Support
                  </Nav.Link>
                  <Nav.Link href="/Premium">
                    Premium
                  </Nav.Link>
                </Nav>
                <Form inline>
                  {
                    (uname === undefined || uname === null) ?
                        <div>
                          <Button className="LogButton" variant="outline-success" href="/Login">Login</Button>
                          <Button className="LogButton" variant="outline-danger" href="/Register">Register</Button>
                        </div>
                        :
                        <div>
                          <Button className="LogButton" variant="outline-info" href="/Profile">{uname}</Button>
                          <Button className="LogButton" variant="outline-warning" href="/Logout">Logout</Button>
                        </div>
                  }

                </Form>
              </Navbar.Collapse>
            </Navbar>
          </header>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Logout">
              <Logout />
            </Route>
            <Route path="/Login">
              <LoginScreen />
            </Route>
            <Route path="/Register">
              <RegisterScreen />
            </Route>
            <Route path="/Main">
              <MainScreen />
            </Route>
            <Route path="/Profile">
              <ProfileScreen />
            </Route>
            <Route path="/Premium">
              <PremiumScreen />
            </Route>
            <Route path="/Information">
              <InformationScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
