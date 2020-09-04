import React from 'react';
import Login from '../Components/Forms/Login.js';


import '../style/App.css';

export default class LoginScreen extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    );
  }
}
