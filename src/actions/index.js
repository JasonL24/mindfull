import trivia from '../apis/trivia';

import { ADD_USER, SET_ACTIVE, GET_TRIVIA, ADD_POINTS } from './types';

export const addUser = (user) => {
  return ({
    type: ADD_USER,
    payload: user
  });
}

export const setActive = (user) => {
  return ({
    type: SET_ACTIVE,
    payload: user 
  });
}

export const addPoints = (user, amount) => {
  user.points += amount;
  return ({
    type: ADD_POINTS,
    payload: user
  });
}


// Trivia
export const getTrivia = () => async (dispatch) => {
  const res = await trivia.get('/api.php?amount=1&category=11&difficulty=easy&type=multiple&encode=base64');
  dispatch({type: GET_TRIVIA, payload: res.data.results[0] });
};
