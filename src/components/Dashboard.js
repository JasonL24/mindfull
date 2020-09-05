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
      dispatch(addUser({ name: inputVal, userid: uniqid(), points: 0 }));
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
    <div>
      <div>
        <h2 className="ui header center aligned welcome-msg">Welcome! Who is playing?</h2>
        <ul className="user-buttons">
          {renderUsers()}
        </ul>
      </div>
      
      <h4 className="ui centered middle aligned four column grid">Don't see your name?</h4>
      <div className="ui centered middle aligned four column grid">
        <form onSubmit={onUserSubmit}>
            <input type="text" value={inputVal} onChange={onInputChange} />
            <div>
                <button className="ui vertical animated button">
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
  )
}

export default Dashboard;
