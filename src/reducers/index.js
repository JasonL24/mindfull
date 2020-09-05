import { combineReducers } from 'redux';
import userReducer from './userReducer';
import activeUserReducer from './activeUserReducer';
import triviaReducer from './triviaReducer';

export default combineReducers({
  users: userReducer,
  activeUser: activeUserReducer,
  trivia: triviaReducer
});
