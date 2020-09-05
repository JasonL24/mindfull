import { SET_ACTIVE, ADD_POINTS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {...action.payload};
    case ADD_POINTS:
      return {...action.payload};
    default:
      return state;
  }
}