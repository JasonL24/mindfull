import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addUser } from '../actions';

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
      dispatch(addUser({ name: inputVal }));
      setInputVal('');
    }
  }

  const renderUsers = () => {
    if (users) {
      return (
        users.map(user => {
          return (
            <button key={user.name}>{user.name}</button>
          )
        })
      )
    }
  }

  return (
    <div>
      <div>
        <h1>Who is playing?</h1>
        <ul>
          {renderUsers()}
        </ul>
      </div>
      
      <form onSubmit={onUserSubmit}>
        <input type="text" value={inputVal} onChange={onInputChange} />
        <button>Add Person</button>
      </form>
    </div>
  )
}

export default Dashboard;
