import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
    console.log(this.state.username)
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
    console.log(this.state.password)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(!!this.state.username  && !!this.state.password){
      this.props.handleLogin(this.state)
    } else {
      alert("Enter Username and Password!")
    }
  }

  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
        <div> 
          <label>
            Username
            <input id="username" 
            name="username" 
            type="text" 
            value= {this.state.username}
            onChange = {(event) => this.handleUsername(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
            name="password" 
            type="password" 
            value= {this.state.password}
            onChange = {(event) => this.handlePassword(event)}
            />
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
