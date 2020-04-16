// jshint esversion: 6
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        // ...state yapmiyoruz because we only have the counter property in our old state anyways.
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        counter: state.counter + 1
      }
    case 'ADD':
      return {
        counter: state.counter + 10
      }
    case 'SUBTRACT':
      return {
        counter: state.counter - 15
      }
    default:
      break;
  }
  return state;
};

export default reducer;