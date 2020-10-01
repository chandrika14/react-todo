import React from 'react';
import classes from './Todo.module.css';

const todo = (props) => {
  return (
    <div className={classes.Item}>
      <span className={props.todo.completed ? 'Completed' : ''}>{props.todo.title}</span>
      <div>
        <button onClick={props.complete}>Complete</button>
        <button onClick={props.delete}>Delete</button>
      </div>
    </div>
  )
}
export default todo;