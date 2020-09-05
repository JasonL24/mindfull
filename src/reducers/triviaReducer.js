import { GET_TRIVIA } from '../actions/types';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TRIVIA:
      return {...action.payload};
    default:
      return state;
  }
}