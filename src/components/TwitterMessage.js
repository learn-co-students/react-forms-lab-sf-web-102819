import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageContent: ""
    };
  }

  handleMessageInput = (event) => {
   const char = event.target.value
   

   this.setState({messageContent: char})
  
   
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong><br></br>
    <h2>{this.props.maxChars - this.state.messageContent.length} characters left</h2>
        <input onChange={this.handleMessageInput} type="text" name="message" id="message" value={this.state.messageContent}/>
       
      </div>
    
    );
  }
}

export default TwitterMessage;
