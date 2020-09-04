import React from 'react';
import './style/App.css';
import logo from './images/title_transparent.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Username: </p>
        <p>Password: </p>
      </header>
    </div>
  );
}

export default App;
