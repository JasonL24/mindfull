import { ADD_USER, ADD_POINTS} from '../actions/types';

const INITIAL_STATE = JSON.parse(localStorage.getItem("users")) || [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      const localUsers = JSON.parse(localStorage.getItem("users")) || [];
      localUsers.push(action.payload);
      localStorage.setItem('users', JSON.stringify(localUsers));
      return [...state, action.payload];
    case ADD_POINTS:
      return (
        state.map(user => {
          if (user.userid === action.payload.userid) {
            user.points = action.payload.points;
          }
          return user;
        })
      )
    default:
      return state;
  }
}
