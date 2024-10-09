import React from "react";
import Todocard from "./Todocard";

const Todolist = () => {
  let todo = [
    "Go to the gym",
    "Eat more fruits and Vege",
    "Pick up kids from school",
  ];
  return (
    <ul className="main">
      {todo.map((item, todoindex) => {
        return (
          <Todocard key={todoindex}>
            <p>{item}</p>
          </Todocard>
        );
      })}
    </ul>
  );
};

export default Todolist;
