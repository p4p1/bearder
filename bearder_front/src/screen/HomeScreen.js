import React from 'react';
import '../style/App.css';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };

    this.switchLogin = this.switchLogin.bind(this);
    global.api_link = "http://localhost:8080"
  }

  switchLogin() {
    this.setState({ login: ! this.state.login });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Bearder!</h1>
          <p className="text-muted">
            Worlds first dating app for beards. Inside this website you will be
            able to like beards or reject beards if you don't like them.
          </p>
          <a href="/Register">Register now!</a>
        </header>
      </div>
    );
  }
}
