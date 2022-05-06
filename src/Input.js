import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)} style={{ position:'relative' , top:0}}>
          <input class="textInput"
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message"
            autofocus="true"
          />
          <input class="sendbutton" type="image" src="blue.png" alt="Submit" />
        </form>
      </div>
    );
  }
}

export default Input;