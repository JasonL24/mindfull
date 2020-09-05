import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Activities.css';

const Activities = () => {
  const user = useSelector(state => state.activeUser);
  
  const options = ['Trivia', "Memory"];

  const renderActivities = () => {
    return (
      options.map(activity => {
        return (
          <Link to={`/${activity.toLowerCase()}`}>
            <button>{activity}</button>
          </Link>         
        )
      })
    )
  }

  return (
    <div>
      <div className="greeting">
        <h1>Hello {user.name}!</h1>
        <h2>You have {user.points} activity points!</h2>
      </div>
      {renderActivities()}
    </div>
  )
}

export default Activities;