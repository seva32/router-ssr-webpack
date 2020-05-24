import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

ReactDOM.hydrate(
  <BrowserRouter
    getUserConfirmation={(message = 'hola', callback) => {
      // this is the default behavior
      const allowTransition = window.confirm(message);
      callback(allowTransition);
    }}
  >
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
);
