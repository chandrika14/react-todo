import React from 'react';
import classes from './Todo.module.css';

const todo = (props) => {
  return (
    <div className={classes.Item}>
      <span>{props.todo.title}</span>
      <div>
        <button>Complete</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
export default todo;