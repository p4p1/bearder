import React from 'react';
import '../style/App.css';

export default class InformationScreen extends React.Component {
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
          <h1>What is this?</h1>
        </header>
      </div>
    );
  }
}
