
import React from 'react';
import Register from '../Components/Forms/Register.js';


import '../style/App.css';

export default class RegisterScreen extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Register />
        </header>
      </div>
    );
  }
}
