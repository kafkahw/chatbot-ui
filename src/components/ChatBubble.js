import React from 'react';
import PropTypes from 'prop-types';


import './ChatBubble.css';


const ChatBubble = ({avatarURL, message, bubbleClass}) => (
  <div className={`message-bubble ${bubbleClass}`}>
    <img className="avatar" src={avatarURL} alt={bubbleClass} />
    {message && <div className='message'>{message}</div>}
  </div>
);

ChatBubble.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  message: PropTypes.string,
  bubbleClass: PropTypes.string,
};

ChatBubble.defaultProps = {
  message: '',
  bubbleClass: '',
}

export default ChatBubble;
