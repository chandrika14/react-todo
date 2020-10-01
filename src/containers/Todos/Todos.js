import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Todo from '../../components/Todo/Todo';
// import AddTodo from '../AddTodo/AddTodo';

const Todos = () => {
  const [todosArr, setTodos] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(data => {
      setTodos(data.data);
    });
  }, []);
  const addHandler = (value) => {
    const todo = [...todosArr];
    todo.unshift({ id: Math.random(), title: value, completed: false });
    setTodos(todo);
  }
  const completeHandler = (prop) => {
    const state = [...todosArr];
    const foundTodo = state.filter(t => t.id === prop.id);
    foundTodo[0].completed = true;
    setTodos(state);
  }
  const deleteHandler = (prop) => {
    const state = [...todosArr];
    const foundTodoIndex = state.findIndex(t => t.id === prop.id);
    state.splice(foundTodoIndex, 1);
    setTodos(state);
  }

  return (
    <div className="Container">
      {
        todosArr.map(todo => <Todo key={todo.id} todo={todo} complete={() => { completeHandler(todo) }} delete={() => { deleteHandler(todo) }}></Todo>)
      }
    </div>
  )
}
export default Todos;