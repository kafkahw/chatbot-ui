import React from 'react';
import PropTypes from 'prop-types';

import ChatBubble from './ChatBubble';

const userURL = 'https://gravatar.com/avatar/e014924c06e1c8e372c88d672e2bfc16?s=80&amp;d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png';

const UserBubble = ({message}) => (
  <ChatBubble message={message} bubbleClass='user-message' imageURL={userURL} />
);

ChatBubble.propTypes = {
  message: PropTypes.string,
};

export default UserBubble;
