import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatBox from './components/ChatBox';
// import registerServiceWorker from './registerServiceWorker';

function init(domNode, config={}) {
  ReactDOM.render(<ChatBox config={config} />, domNode);
}
// registerServiceWorker();

export {
  init,
};
