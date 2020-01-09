import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      content: "",
      count: props.maxChars
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  render() {
    let counter = this.state.count - this.state.content.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.onChangeHandler} value={this.state.content}/>

        <h1>{counter}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
