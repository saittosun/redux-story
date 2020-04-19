// jshint esversion: 6
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// this is our first action creator already, it returns, it creates therefore an action and an action just needs to have a type, so that's the bare minimum action we can create.
export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const add = (value) => {
  return {
    type: ADD,
    val: value
  }
}

export const subtract = (value) => {
  return {
    type: SUBTRACT,
    val: value
  }
}

// this will now still be the action creator. that is my synchronous action creator. 
export const saveResult = res => {
  return {
    type: STORE_RESULT,
    result: res
  }
}

export const storeResult = (res) => {
  // this function receives dispatch as an argument, the dispatch action, now we get dispatch in here due to redux-thunk. I said that middleware runs between the dispatching of an action and the point of time the action reaches the reducer, now the thing we do here is we still dispatch an action but then redux-thunk, the middleware comes in, steps in, has access to the action there, basically blocks the old action we could say and dispatches it again in the future. Now the new action will reach the reducer but in-between, redux-thunk is able to wait because it can dispatch an action whenever it wants. This is the asynchronous part(settimeout part) and that is exactly allowing us to execute some asynchronous code inside of this function
  return dispatch => {
    setTimeout(() => {
      // what do we typically do is we create asynchronous action creators, which in the end dispatch actions created by synchronous ones. So what I'll do is I'll quickly create a new action creator and export it, I'll name it saveResult,
      // I will now dispatch exactly that saveResult action creator which returns me this action which actually updates the state and the store because it is the action of the type we handle in the reducer.
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (resElId) => {
  return {
    type: DELETE_RESULT,
    resultElId: resElId
  }
}