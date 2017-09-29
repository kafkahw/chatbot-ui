import React from 'react';
import PropTypes from 'prop-types';
import BotBubble from './BotBubble';
import UserBubble from './UserBubble';

import './ChatBox.css'



class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [{text: "Hi! I'm a bot. What's up?", user: "bot"}]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    const message = this.state.input;
    this.setState(
      (prevState)=> ({
        input: '',
        messages: [...prevState.messages, {text: message, user: "user" }, {text: "I'm a dumb bot!", user: "bot"}]
      })
    );
  }

  componentDidUpdate() {
    this.output.scrollTop = this.output.scrollHeight;
  }

  render() {
    return (
      <div className="chat-app">
        <div className="chat-output" ref={(output) => { this.output = output; }}>
          {this.state.messages.map(message => (
            message.user === 'bot' ? <BotBubble message={message.text} /> : <UserBubble message={message.text} />
          ))}
        </div>

        <div className="chat-input">
          <form id="user-input-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="user-input"
              placeholder="Type a message..."
              value={this.state.input}
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ChatBox;
