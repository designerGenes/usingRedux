import {combineReducers} from 'redux';
import {users, usersHasErrored, usersIsLoading} from './SOUserList';

export const SOUserReducer = combineReducers({
  users,
  usersHasErrored,
  usersIsLoading,
});
