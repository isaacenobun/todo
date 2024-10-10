import React from "react";
import Todocard from "./Todocard";

const Todolist = (props) => {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((item, todoindex) => {
        return (
          <Todocard {...props} key={todoindex} index={todoindex}>
            <p>{item}</p>
          </Todocard>
        );
      })}
    </ul>
  );
};

export default Todolist;
