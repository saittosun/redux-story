// jshint esversion: 6
// this file here will not be holding any react code, we won't include it into our react project, I'll execute it with nodeJS instead, just to show the different concepts of redux in one file and to show that it's independent of react.
const redux = require('redux');
const createStore = redux.createStore;
// createStore is a function but don't execute it yet. createStore as the name suggests allows us to create a new redux store, I'll store it in a constant named store

const initialState = {
  counter: 0
}

//REDUCER
//createStore like this won't do much though, a store needs to be initialized with a reducer because the reducer and remember we only have one reducer, even if we combine multiple ones, they will be merged into one. The reducer is strongly connected to the store, it's the only thing that may update the state in the end. That's why we need to pass the reducer to this creation function here because it's so closely connected to the state. Therefore I actually need to create my reducer first before I create the store.

// the reducer gets two arguments, state and the action and the state is the old state which it then may update. So the state is the first argument, the second argument is the action and then the function has to return one thing and that is the updated state.
// I can initialize this argument to the function with a default value, whenever this function is now called with this argument being undefined, it will take the default value instead. A default value is simply assigned by adding an equal sign and then the value you want to use as a default, so now it will take initial state whenever state is undefined, which will be the case when it's creating that store where it will execute the reducer for the first time. For all subsequent actions, the reducer will have been executed one time so the current state then will be your initial state and you can start changing that.
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state;
}

// STORE
// with that, our store is created with that reducer in mind and now we have a created store, however this store will hold an undefined state.
const store = createStore(rootReducer);
console.log(store.getState());//it will pull out the state from the store.

// SUBSCRIPTION
// a function which will be executed when ever the state is updated
store.subscribe(() => {
  // The getState method is the same as before, the difference is that I now know that I should get the state here because I know hey something changed and that subscription actually, of course typically is set up right after the store was created so that we get informed about any future dispatches. the subscribe method will be executed whenever action is dispatched and mutates the store.
  console.log('[subscription]', store.getState());
});

// DISPATCHING ACTION
// dispatch function here takes an argument and that argument is an action, that should be a javascript object which needs to have a type property.
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

