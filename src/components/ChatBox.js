import React from 'react';
// import PropTypes from 'prop-types';
import BotBubble from './BotBubble';
import UserBubble from './UserBubble';
import ErrorBoundary from './ErrorBoundary';
import { createMSG } from '../message';

import './ChatBox.css'

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [createMSG('bot', "Hi! I'm a bot. What's up?")],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    const input = this.state.input;
    this.setState(
      prevState => ({
        input: '',
        messages: [...prevState.messages, createMSG('user', prevState.input)],
      })
    );
    const url = 'http://localhost:3003/organizations/1/chats';
    fetch(url, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `text=${encodeURIComponent(input)}&user_id=123`,
    })
    .then(response => response.json())
    .then(json => {
      this.setState(prevState => ({
        messages: [...prevState.messages, createMSG('bot', json.message)]
      }));
    });
  }

  componentDidUpdate() {
    this.output.scrollTop = this.output.scrollHeight;
  }

  render() {
    return (
      <div className="chat-app">
        <div className="chat-output" ref={(output) => {this.output = output;}}>
          <ErrorBoundary>
            {this.state.messages.map(message => {
              const Bubble = message.type === 'bot' ? BotBubble : UserBubble;
              return <Bubble key={`msg-${message.id}`} message={message.text} />;
            })}
          </ErrorBoundary>
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
