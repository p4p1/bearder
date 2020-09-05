import React from 'react';
import '../style/App.css';
import { Redirect } from 'react-router-dom'

export default class Logout extends React.Component {

  componentDidMount() {
    localStorage.removeItem('api_token');
    localStorage.removeItem('username');
  }
  render () {
    return (
      <div className="App">
        <Redirect push to="/"/>
      </div>
    );
  }
}
