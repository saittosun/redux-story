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
  return state;
};

export default reducer;