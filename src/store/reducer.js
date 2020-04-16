// jshint esversion: 6
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      // ...state yapmiyoruz because we only have the counter property in our old state anyways.
      counter: state.counter + 1
    }
  }
  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  }
  if (action.type === 'ADD') {
    return {
      counter: state.counter + 5
    }
  }
  if (action.type === 'SUBTRACT') {
    return {
      counter: state.counter - 5
    }
  }
  return state;
};

export default reducer;