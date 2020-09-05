import { ADD_USER } from '../actions/types';

const INITIAL_STATE = JSON.parse(localStorage.getItem("users")) || [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      const localUsers = JSON.parse(localStorage.getItem("users")) || [];
      localUsers.push(action.payload);
      localStorage.setItem('users', JSON.stringify(localUsers));
      return [...state, action.payload];
    default:
      return state;
  }
}
