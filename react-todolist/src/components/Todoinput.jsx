import React, { useState } from "react";

const Todoinput = (props) => {
  const { handleAddTodos, handleEditTodos, todoValue, setTodoValue } = props;
  
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default Todoinput;
