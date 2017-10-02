import React from 'react';
import PropTypes from 'prop-types';

import './StatusBar.css';

const StatusBar = ({ isLoading, failed }) => {
  let status = 'Bot is ready to help.'
  if (failed) {
    status = 'Sorry, Bot is going crazy. Try again later.';
  }
  else if (isLoading) {
    status = <div className="loading">Bot is thinking</div>;
  }
  return <div className="typing-indicator">{status}</div>;
};

StatusBar.propTypes = {
  isLoading: PropTypes.bool,
  failed: PropTypes.bool,
};

StatusBar.defaulProps = {
  isLoading: false,
  failed: false,
}

export default StatusBar;
