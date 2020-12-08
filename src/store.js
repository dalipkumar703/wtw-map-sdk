import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mapReducer from './reducers';

// Note: this API requires redux@>=3.1.0
 const store = createStore(combineReducers({mapReducer}) , applyMiddleware(thunkMiddleware));

 export default store;