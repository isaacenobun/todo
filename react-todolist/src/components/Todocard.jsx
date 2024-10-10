import React from "react";

const Todocard = (props) => {
  const { children, handleDeleteTodos, handleEditTodos, index } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={()=>{
          handleEditTodos(index)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodos(index);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default Todocard;
