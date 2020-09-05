import { SET_ACTIVE, ADD_POINTS, ADD_TASK, COMPLETE_TASK, CLEAR_TASKS } from '../actions/types';

const INITIAL_STATE = JSON.parse(localStorage.getItem("activeUser")) || {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {...action.payload};
    case ADD_POINTS:
      localStorage.setItem('activeUser', JSON.stringify(action.payload));
      return {...action.payload};
    case ADD_TASK:
      var users = JSON.parse(localStorage.getItem('users'));
      users.map(user => {
        if (user.userid === action.payload.user.userid) {
          user.tasks.push(action.payload.task);
        }
        return user;
      })
      localStorage.setItem('users', JSON.stringify(users));
      state.tasks.push(action.payload.task);
      localStorage.setItem('activeUser', JSON.stringify(state));
      return {...state};
    case COMPLETE_TASK:
      var users = JSON.parse(localStorage.getItem('users'));
      users.map(user => {
        if (user.userid === action.payload.user.userid) {
          user.tasks.push(action.payload.task);
        }
        return user;
      })
      localStorage.setItem("users", JSON.stringify(users));
      state.tasks.map(task => {
        if (task.id === action.payload.id) {
          task.complete = !task.complete;
        }
        return task;
      });
      localStorage.setItem('activeUser', JSON.stringify(state));
      return {...state};
    case CLEAR_TASKS:
      var users = JSON.parse(localStorage.getItem("users"));
      users.map(user => {
        if (user.userid === action.payload.userid) {
          user.tasks = [];
        }
        return user;
      });
      localStorage.setItem("users", JSON.stringify(users));
      state.tasks = [];
      localStorage.setItem("activeUser", JSON.stringify(state));

      return {...state};
    default:
      return state;
  }
}