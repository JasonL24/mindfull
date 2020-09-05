import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Activities = () => {
  const user = useSelector(state => state.activeUser);
  
  const options = ['Trivia'];

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
      <h1>Hello {user.name}!</h1>
      <h2>You have {user.points} points!</h2>
      {renderActivities()}
    </div>
  )
}

export default Activities;