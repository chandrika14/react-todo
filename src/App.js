import React from 'react';

import './App.css';
import Todos from './containers/Todos/Todos';

const app = () => {
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <Todos />
    </div>
  );
}
export default app;
