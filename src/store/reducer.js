// jshint esversion: 6
const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // bu ikinci asama yani result[] ilave edildikten sonraki aciklama: Now we also have a results property which is an array and therefore right now, if we increment, decrement add or subtract, we basically remove that from our state because we return the updated version of the state and it just is a javascript object with the updated counter but without a results property. And unlike set state did in react, this is not merged with the old state or anything like that, this is the new state instead. So here, the new state doesn't have results anymore. so actually this is not how we should update the state, instead we should copy the old state properties and then only update the ones which need updating and this should happen immutably.
      // what we do is we copy the old state. Now one way of doing this is calling object.assign, passing an empty javascript object us to the first argument and the old javascript object we want to copy as the second state. Now this will basically clone the old object in an immutable way giving us a new javascript object which has all the properties of the old object but is a technically different object and that of course is important due to the way objects and array work in javascript with the reference types or these primitive types.
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      // This will then become the new state and it is a technically new object and that's important.
      return newState;
      // return {
      //   ...state yapmiyoruz because we only have the counter property in our old state anyways.
      //   counter: state.counter + 1
      // }
    case 'DECREMENT':
      return {
        // the shorter way is to simply return a javascript object and there, distribute all the properties of the old state which you can do with the spread operator, state like this ...state. This simply tells javascript return a javascript object, take all the properties and values of the state argument which is our old state, distribute these properties with their values in this new object and then since we define an additional property, add this property to the object or if it already was present due to us distributing the old state as it would be for the counter, this is part of the old state, overwrite this but only this, leave results untouched. we're not touching results.
        ...state,
        counter: state.counter - 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + 10
      }
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - 15
      }
    case 'STORE_RESULT':
      return {
        ...state,
        // push manipulates the original value, concat returns a new array which is the older array plus the argument you add to concat. So it's an immutable way of updating an array by adding an item, it returns a new array, that's the key thing here because arrays also are reference types, if you would call push, you are touching the original results property in the original state, even though you used the spread operator here, that doesn't prevent you from doing that and this is not a good practice, not how you should do it, your state management becomes unpredictable if you do it.
        results: state.results.concat({id: new Date(), value: state.counter})
      }
    default:
      break;
  }
  return state;
};

export default reducer;