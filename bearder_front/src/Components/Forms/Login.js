import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getUsername = this.getUsername.bind(this);
  }

  getUsername(input) {
    this.setState({ username: input.target.value });
    console.log(input.target.value);
  }

  getPassword(input) {
    this.setState({ password: input.target.value });
    console.log(input.target.value);
  }

  handleLogin() {
    console.log('oui');
    fetch(`${global.api_link}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then((response) => response.json())
    .then((respJson) => {
      console.log(respJson);
      alert(respJson.msg);
      global.api_token = respJson.token
    }).catch((err) => console.error(err));
  }

  render () {
    return (
      <div>
        <div>
          <label>Username: </label>
          <input type="text" onChange={this.getUsername} autoComplete="new-password" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" onChange={this.getPassword} autoComplete="new-password" />
        </div>
        <div className='Button-wrap'>
          <input type="button" value='login' onClick={this.handleLogin} /><br />
        </div>
      </div>
    );
  }
}
