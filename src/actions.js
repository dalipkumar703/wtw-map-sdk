import {ADD_TODO, UPDATE_CURRENT_LOCATION} from './constants';
//add to do bucket
export const addTodo = (bucket) => {
  return {
    type: ADD_TODO,
    action: bucket,
  }
}

export const updateCurrentLocation = (location) => {
  return {
    type: UPDATE_CURRENT_LOCATION,
    currentLocation: location
  }
}
