// jshint esversion: 6
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // push manipulates the original value, concat returns a new array which is the older array plus the argument you add to concat. So it's an immutable way of updating an array by adding an item, it returns a new array, that's the key thing here because arrays also are reference types, if you would call push, you are touching the original results property in the original state, even though you used the spread operator here, that doesn't prevent you from doing that and this is not a good practice, not how you should do it, your state management becomes unpredictable if you do it.

        //So if we are in a reducer where we need to get a value from the global state, we should simply get it as an action payload and this is generally how your reducers work anyways most of the time, it's old state plus action plus optionally action data and you return a new state. action.result yaptiktan sonra counter.js e gitti orada da delete de yaptigina benzer sekilde kodu duzenledi.
        results: state.results.concat({id: new Date(), value: action.result})
      }
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // // use the spread operator to distribute all the elements in state results into that new array. important if the elements in state results were objects as they actually are, the objects themselves are still pointing to the same objects they did before. So if you change a property in one of the elements themselves, just creating a new array like this isn't enough, if you just plan on removing an object though, that is okay because you won't touch the object, you just remove it from the array, that's a difference.
      // const newArray = [...state.results];
      // newArray.splice(id, 1)

      // second method
      // you take your original array state results and call the filter method. If filter returns a new array, doesn't touch the old one, returns a new one. Filter takes a function as an input, the function is executed on each element in the array, it determines whether this element fulfils a certain condition to make it into the new array which is returned by filter or not.
      const updatedArray = state.results.filter(result => result.id !== action.resultElId)
      return {
        ...state,
        results: updatedArray// onceden burada bu yaziyordu =>new array, which is a copy of the old array but updated and since we copied it, we never touch the old array.
      }
    default:
      break;
  }
  return state;
};

export default reducer;