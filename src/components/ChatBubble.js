import React from 'react';
import PropTypes from 'prop-types';


import './ChatBubble.css';


const ChatBubble = ({imageURL, message, bubbleClass}) => (
  <div className={`message-bubble ${bubbleClass}`}>
    <img className="avatar" src={imageURL} alt={bubbleClass} />
    {message && <div className='message'>{message}</div>}
  </div>
);

ChatBubble.propTypes = {
  imageURL: PropTypes.string.isRequired,
  message: PropTypes.string,
  bubbleClass: PropTypes.string,
};

ChatBubble.defaultProps = {
  message: '',
  bubbleClass: '',
}

export default ChatBubble;
