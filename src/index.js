// jshint esversion: 6
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './store/reducer';

// This store should be created right before our application or when our application starts, so the index.js file is a great place, this is where we mount our app component to the dom, so creating the store here also makes a lot of sense.
// With that we're creating a store successfully with our own reducer, just like we learned before in the nodeJS file.
const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
