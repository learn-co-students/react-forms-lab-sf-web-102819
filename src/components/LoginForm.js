import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLoginLoginForm = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    if(this.state.username === "" || this.state.password === "") {
      return false;
    } else {
      return this.props.handleLogin(username, password);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLoginLoginForm}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={(e) => { this.setState({ username: e.target.value }) }} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
