import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      maxChars: props.maxChars,
      chars: []
    };
  }

  handleTweetChange = (event) => {
    console.log(event.target.value)
    let newMaxChars = (this.state.maxChars - 1)
    this.setState({
      chars: event.target.value,
      maxChars: newMaxChars
    })
  }

  render() {
    return (
    <div>
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        name="message" 
        id="message" 
        value = {this.state.chars}
        onChange = {event => this.handleTweetChange(event)}
        />
        
      </div>

      <div> 
        {this.state.maxChars}
      </div>
    </div>
    );
  } 
}

export default TwitterMessage;
