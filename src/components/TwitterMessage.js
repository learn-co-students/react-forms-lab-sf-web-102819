import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  changeLength = (event) => {
    const m = event.target.value

    this.setState({
      message: m
        })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <label>Remaining Chars: {this.props.maxChars - this.state.message.length}</label>
        <input type="text" name="message" id="message" onChange={this.changeLength} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
