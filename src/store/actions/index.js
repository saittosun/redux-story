// jshint esversion: 6
//  I can always point to that file to import something from any of the files I'll point to in that file here. This really is just an advanced feature if someone wants to use such a set up of the project to handle a bigger project with lots and lots of actions and action creators
export {
  add,
  subtract,
  increment,
  decrement
} from './counter';

export {
  storeResult,
  deleteResult
} from './result';