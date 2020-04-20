// jshint esversion: 6
import * as actionTypes from './actionTypes';
// this will now still be the action creator. that is my synchronous action creator. 
export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  }
}

// if you need to reach out to a server to fetch data from it and thereafter store it in your store, definitely do that with the action creator. Send your HTTP request here instead of set timeout and once the answer is there, the response is there,

export const storeResult = (res) => {
  // this function receives dispatch as an argument, the dispatch action, now we get dispatch in here due to redux-thunk. I said that middleware runs between the dispatching of an action and the point of time the action reaches the reducer, now the thing we do here is we still dispatch an action but then redux-thunk, the middleware comes in, steps in, has access to the action there, basically blocks the old action we could say and dispatches it again in the future. Now the new action will reach the reducer but in-between, redux-thunk is able to wait because it can dispatch an action whenever it wants. This is the asynchronous part(settimeout part) and that is exactly allowing us to execute some asynchronous code inside of this function
  // redux-thunk can pass as an additional argument, getState, that is a method we can execute to get the current state. Sometimes in your asynchronous code, you need to be able to reach out to the state prior to your to-be- dispatched action,
  // I will now dispatch exactly that saveResult action creator which returns me this action which actually updates the state and the store because it is the action of the type we handle in the reducer.
  return (dispatch, getState) => {
    setTimeout(() => {
      // we can get the counter just as in the counter container in mapStateToProps, we access ctr.counter in the action creator, thanks to the second argument passed into it by redux thunk.
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      // what do we typically do is we create asynchronous action creators, which in the end dispatch actions created by synchronous ones. So what I'll do is I'll quickly create a new action creator and export it, I'll name it saveResult,
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId
  }
}