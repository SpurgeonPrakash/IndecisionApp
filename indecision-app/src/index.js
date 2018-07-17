import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndecisionApp from './IndecisionApp.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
registerServiceWorker();
