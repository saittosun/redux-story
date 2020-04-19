// jshint esversion: 6
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

//this will be the name of my middleware. It will get the store as an input, this is the case because we will soon use a specific method provided by redux to connect our own middleware to the store and this method provided by redux will eventually execute our middleware function and give us the store.
const logger = store => {
  // you can name this argument whatever you want but next makes sense because this will be a function which you can execute to let the action continue its journey onto the reducer,
  return next => {
    // this function now also returns a function, which will receive the action you dispatched as an input. So this nested function party here is simply a middleware, now inside that inner function which receives the action, we can also access a store and this next function and of course the action itself.
    return action => {
      console.log('[middelware] dispatching', action);
      // this will now let the action continue to the reducer, though for that to succeed, we need to pass the action as an argument, now that's important because you could theoretically also change that action here in the middleware, we have access to it, we get it as an argument, we could change the type. 
      const result = next(action);
      console.log('[middelware] next state', store.getState());
      return result;
      //  this function tree is in the end what gets executed, all of that is done by redux, we don't have to call any of these functions, all we have to do is apply this middleware to our store.
    };
  };
};

// this is a function which takes a javascript object mapping our reducers to different slices of our state as input and merges everything into one state and one reducer for us.
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// redux devtools, compose is a little bit similar to combineReducers, combineReducers allows us to combine well reducers, compose allows us to combine enhancers, applyMiddleware is only for middlewares if we have other enhancers like the store dev tools, we need to use compose to compose a set of enhancers with both the dev tools features and our middleware.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// This store should be created right before our application or when our application starts, so the index.js file is a great place, this is where we mount our app component to the dom, so creating the store here also makes a lot of sense.
// With that we're creating a store successfully with our own reducer, just like we learned before in the nodeJS file.
// this function as the names suggests allows us to add our own middleware to the store.
// we got a set up where we should be able to connect our browser extension to the store running in our Javascript code.
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  // Provider is a helper component which allows us to kind of inject our store into the react components.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
