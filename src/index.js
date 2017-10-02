import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ChatBox from './components/ChatBox';
// import registerServiceWorker from './registerServiceWorker';

function init(domNode, config={}) {
  ReactDOM.render(<ChatBox />, domNode);  //document.getElementById('root')
}
// registerServiceWorker();


export {
  init,
};
