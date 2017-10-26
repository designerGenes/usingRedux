import {createStore, combineReducers} from 'redux';



const SOUserReducer = (state = [], action => {
  switch(action.type) {
    case 'GET_LIST':

      break;
  }
  return state;
})

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

let store = createStore( combineReducers({counter: counterReducer, persons: personReducer}));
export default store;
