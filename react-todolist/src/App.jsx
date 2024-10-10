import { useState, useEffect } from "react";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    if (!newTodo) {
      return todos;
    } else {
      persistData([...todos, newTodo])
      setTodos([...todos, newTodo]);
    }
  }

  function handleDeleteTodos(index) {
    persistData(todos.filter((todo, i) => i !== index))
    setTodos(todos.filter((todo, i) => i !== index));
  }

  function handleEditTodos(index) {
    handleDeleteTodos(index);
    setTodoValue(todos[index]);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <Todoinput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
        handleEditTodos={handleEditTodos}
      />
      <Todolist
        todos={todos}
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
      />
    </>
  );
}

export default App;
