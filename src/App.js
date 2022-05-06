import React, { Component } from "react";
import "./App.css";
import Messages from "./Messages";
import Input from "./Input";

export default class App extends React.Component {
  state = {
    isOpen: false,
    messages: [],
  };
  onSendMessage = (message) => {
    const messages = this.state.messages;
    messages.push({
      text: message,
    });
    this.setState({ messages: messages });
  };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("clicked");
  };

  closeDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("clicked");
  };

  render() {
    return (
      <div className="main">
        {this.state.isOpen ? (
          <img
            className="open-button"
            src="/cancle.png"
            onClick={this.closeDialog}
            alt="no image"
          />
        ) : (
          <img
            className="open-button"
            src="/chat.jpeg"
            onClick={this.handleShowDialog}
            alt="no image"
          />
        )}
        {this.state.isOpen && (
          <div className="App">
            <div className="App-header">
              <h1>Msh Chat</h1>
            </div>
            <div className="chatMessages">
              <Messages messages={this.state.messages} />
            </div>
            <Input onSendMessage={this.onSendMessage} />
          </div>
        )}
      </div>
    );
  }
}
