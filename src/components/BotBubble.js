import React from 'react';
import PropTypes from 'prop-types';

import ChatBubble from './ChatBubble';

const robotURL = 'http://www.bradfordwhite.com/sites/default/files/images/corporate_imgs/iStock_000012107870XSmall.jpg';

const BotBubble = ({message, avatarURL}) => (
  <ChatBubble message={message} bubbleClass='bot-message' avatarURL={avatarURL || robotURL} />
);

ChatBubble.propTypes = {
  message: PropTypes.string,
  avatarURL: PropTypes.string,
};

export default BotBubble;
