import { ADD_TODO, UPDATE_CURRENT_LOCATION } from './constants';
let bucketCopy = [];
let count = 1;
bucketCopy.push({name: "dalip", id: count, currentLocation: null});
const initialStateMap = {name: "dalip", id: count, currentLocation: null};

 const mapReducer = (state = initialStateMap, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({},state, action.action, {id : ++count});
    case UPDATE_CURRENT_LOCATION:
      return Object.assign({}, state, {currentLocation : action.currentLocation})
    default:
      return state
  }
}
export default mapReducer;
  