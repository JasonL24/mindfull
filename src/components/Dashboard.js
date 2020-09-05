import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

import { addUser, setActive } from '../actions';
import './Dashboard.css';



const Dashboard = () => {
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const onInputChange = (event) => {
    setInputVal(event.target.value);
  }

  const onUserSubmit = (event) => {
    event.preventDefault();
    if (inputVal !== '') {
      dispatch(addUser({ name: inputVal, userid: uniqid(), points: 0, tasks: [] }));
      setInputVal('');
    }
  }

  const renderUsers = () => {
    if (users) {
      return (
        users.map(user => {
          return (
            <Link to="/activities">
              <button key={user.userid} onClick={ () => dispatch(setActive(user))}>{user.name}</button>
            </Link>
          )
        })
      )
    }
  }

  return (
    <div className="overlay">
      <div>
        <h2 className="ui center aligned welcome-msg">Welcome! Who is playing?</h2>
        <ul className="user-buttons">
          {renderUsers()}
        </ul>
      </div>
      
      <div className="signUp">
        <h3 className="ui centered middle aligned four column grid see-name">Don't see your name?</h3>
        <div className="ui centered middle aligned four column grid">
          <form onSubmit={onUserSubmit}>
              <input type="text" value={inputVal} onChange={onInputChange}  className="enter-user" />
              <div>
                  <button className="ui vertical animated button teal">
                      <div className="hidden content">
                          <i aria-hidden="true" className="user plus icon"></i>
                      </div>
                      <div className="visible content">
                          Add User
                      </div>
                  </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}



export default Dashboard;
