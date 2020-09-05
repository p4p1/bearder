import React from 'react';
import '../style/App.css';
import { Redirect } from 'react-router-dom'

export default class PremiumScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
  }

  render () {
    var token = localStorage.getItem('api_token')

    if (token === undefined || token === null) {
      alert("You need to be loged in!");
      return(
        <Redirect push to="/"/>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Premium Screen</h1>
        </header>
      </div>
    );
  }
}
