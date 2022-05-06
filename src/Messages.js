import {Component} from "react";
import React from "react";

class Messages extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    const {messages} = this.props;
    return (
      <>
        <div>
          {messages.map(m => this.renderMessage(m))} 
        </div>
        <div style={{ float:"left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </>
    );
  }
  
  renderMessage(message) {
    const {text} = message;
    return (
        <>
          <div className="userDiv">
            <div className="text">
              {text}
            </div>
            <span>
              <img className="userImage" src="download.jpeg"/>
            </span>
          </div>

          <div className="responseDiv">
            <span>
              <img className="profileImage" src="download.jpeg"/>
            </span>
            <div className="bottext">
              response
            </div>
          </div>
        </>
    );
  }
}

export default Messages;