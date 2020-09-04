import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Navbar, Nav, Form,  Button } from 'react-bootstrap';

import logo from './images/title_transparent.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';

import LoginScreen from './screen/LoginScreen.js';
import RegisterScreen from './screen/RegisterScreen.js';
import HomeScreen from './screen/HomeScreen.js';
import InformationScreen from './screen/InformationScreen.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    global.api_link = "http://localhost:8080"
  }

  render () {
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
                  <Nav.Link href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/Information">
                    Information
                  </Nav.Link>
                  <Nav.Link href="https://github.com/p4p1/bearder">
                    Support
                  </Nav.Link>
                </Nav>
                <Form inline>
                  <Button className="LogButton" variant="outline-success" href="/Login">Login</Button>
                </Form>
                <Form inline>
                  <Button className="LogButton" variant="outline-danger" href="/Register">Register</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </header>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Login">
              <LoginScreen />
            </Route>
            <Route path="/Register">
              <RegisterScreen />
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
