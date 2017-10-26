import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {SOUserReducer} from '../reducers';

const personReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW':
      return [...state, action.person]
    case 'RESET_PEOPLE':
      return [];
  }
  return state;
}

const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
  return state;
}

const allReducers = combineReducers({counter: counterReducer, persons: personReducer, users: SOUserReducer});
let store = createStore(allReducers, applyMiddleware(thunk) );
export default store;
