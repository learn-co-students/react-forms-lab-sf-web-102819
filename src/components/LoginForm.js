import React from "react";

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  updateDaUsernameAndPassword = (event) => {
    this.setState({ [event.target.name]: event.target.value});
    console.log("input:", event.target.value)
  }

  // ternary syntax (isMember ? '$2.00' : '$10.00');

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username !== "" && this.state.password !== "") {
     return this.props.handleLogin(event)
    }
  }

  render() {

    
    
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            value={this.state.username} onChange={event => this.updateDaUsernameAndPassword(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            value={this.state.password} onChange={event => this.updateDaUsernameAndPassword(event)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}