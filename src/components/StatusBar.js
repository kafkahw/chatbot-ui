import React from 'react';
import PropTypes from 'prop-types';

import './StatusBar.css';

const StatusBar = ({ isLoading }) => (
  <div className="typing-indicator">
    { isLoading ? <div className="loading">Bot is thinking</div> : 'Bot is ready to help.'}
  </div>
);

StatusBar.propTypes = {
  isLoading: PropTypes.bool,
};

export default StatusBar;
