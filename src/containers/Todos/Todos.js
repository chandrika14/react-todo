import React from 'react';
import Todo from '../../components/Todo/Todo';

const Todos = () => {
  const todosArr = [
    {
      id: 1,
      title: 'Todo 1',
      completed: true
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: false
    }
  ]
  return (
    <div className="Container">
      {
        todosArr.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
      }
    </div>
  )
}
export default Todos;