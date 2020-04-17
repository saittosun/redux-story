// jshint esversion: 6
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';

// this is a function which takes a javascript object mapping our reducers to different slices of our state as input and merges everything into one state and one reducer for us.
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// This store should be created right before our application or when our application starts, so the index.js file is a great place, this is where we mount our app component to the dom, so creating the store here also makes a lot of sense.
// With that we're creating a store successfully with our own reducer, just like we learned before in the nodeJS file.
const store = createStore(rootReducer);

ReactDOM.render(
  // Provider is a helper component which allows us to kind of inject our store into the react components.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
