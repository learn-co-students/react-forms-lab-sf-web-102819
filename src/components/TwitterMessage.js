import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    
    this.state = {
      message: "",
      characters: 280
    };
  }

  updateMessage = (event) => {
    this.setState({
      message: event.target.value,
      characters:  this.state.characters - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.updateMessage(event)} value={this.state.message}/>
        <h5>{this.state.characters} characters left</h5>
      </div>
    );
  }
}

export default TwitterMessage;
