import React, { useState } from 'react';

const AddTodo = (props) => {
  const [value, setvalue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(value);
    setvalue('');
  }
  return (
    <form className="AddForm" onSubmit={handleSubmit}>
      <div className="AddContainer">
        <textarea type="text" onChange={(event) => { setvalue(event.target.value) }} value={value} />
        <button type="submit">Add</button>
      </div>
    </form>
  )
}
export default AddTodo;