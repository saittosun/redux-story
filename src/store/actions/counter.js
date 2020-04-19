// jshint esversion: 6
import * as actionTypes from './actionTypes';

// this is our first action creator already, it returns, it creates therefore an action and an action just needs to have a type, so that's the bare minimum action we can create.
export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  }
}

export const add = (value) => {
  return {
    type: actionTypes.ADD,
    val: value
  }
}

export const subtract = (value) => {
  return {
    type: actionTypes.SUBTRACT,
    val: value
  }
}