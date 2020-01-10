import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }


  iAmTyping = (event) => {
    this.setState({[event.target.name]: event.target.value}
)
  }
 

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxChars={this.props.maxChars} value={this.state.message} onChange={event => {this.iAmTyping(event)} }/>
        {this.props.maxChars-this.state.message.length}
        </div>
    );
  }
}

export default TwitterMessage;
