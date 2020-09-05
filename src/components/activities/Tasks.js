import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

import { addTask, completeTask, clearTasks } from '../../actions';
import './Tasks.css';


const Tasks = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(state => state.activeUser.tasks);
  const [inputVal, setInputVal] = useState('');
  const user = useSelector(state => state.activeUser);


  const onInputChange = (event) => {
    setInputVal(event.target.value);
  }

  const onInputSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask({ text: inputVal, complete: false, id: uniqid() }, user));
    setInputVal('');
  }

  const completeTaskFunc = (id) => {
    dispatch(completeTask(id, user));
  }

  const renderTasks = () => {
    console.log('rerender');
    return (
      tasks.map(task => {
        return (
          <li key={task.id} className={task.complete ? 'complete-task' : 'incomplete-task'}>
            <input type="checkbox" onClick={ () => completeTaskFunc(task.id) } className="check"/>
            <p className="task-text">{task.text}</p>
          </li>
        )
      })
    )
  }

  return (
    <div className="task-container">
      <form onSubmit={onInputSubmit}>
        <input type="text" value={inputVal} onChange={onInputChange} className="text-input"/>
        <button className="add-btn">Add Task</button>
      </form>
      <ul className="task-list">
        {renderTasks()}
      </ul>
      <button onClick={() => dispatch(clearTasks(user))} className="clear-btn">Clear Tasks</button>
    </div>
  )
}

export default Tasks;