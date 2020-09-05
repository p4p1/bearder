import React from 'react';
import '../style/App.css';
import { Redirect } from 'react-router-dom'

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
  }

  render () {
    var token = localStorage.getItem('api_token')

    if (token === undefined || token === null) {
      return(
        <Redirect push to="/"/>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Profile Screen</h1>
        </header>
      </div>
    );
  }
}
