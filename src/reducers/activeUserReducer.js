import { SET_ACTIVE, ADD_POINTS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {...action.payload};
    case ADD_POINTS:
      localStorage.setItem('activeUser', JSON.stringify(action.payload));
      return {...action.payload};
    default:
      return state;
  }
}