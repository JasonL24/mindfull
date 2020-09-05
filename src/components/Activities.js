import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Activities.css';

const Activities = () => {
  const user = useSelector(state => state.activeUser);
  
  const options = [{name: 'Trivia', img: 'https://www.kindpng.com/picc/m/1-13034_lightbulb-vector-transparent-background-light-bulb-clip-art.png'}, {name: "Memory", img: 'https://www.clipartkey.com/mpngs/m/8-84364_cartoon-brain-clip-art-brain-cartoon-transparent-background.png'}, {name: "Tasks", img: 'https://s.clipartkey.com/mpngs/s/65-656589_transparent-to-do-list-png-todo-list-icon.png'}];

  const renderActivities = () => {
    return (
      options.map(activity => {
        return (
          <Link to={`/${activity.name.toLowerCase()}`}>
            <div class="title-img">
              <button className="activity-btn">
                <h2>{activity.name}</h2>
                <img src={activity.img} />
              </button>
            </div>
            
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
        <p>Play activities to earn more points:</p>
      </div>
      <div className="activities-group">
        {renderActivities()}
      </div>
    </div>
  )
}

export default Activities;