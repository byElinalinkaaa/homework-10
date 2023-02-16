import React, { useEffect, useContext } from "react";

import "./App.css";
import TodoForm from "./components/ToDoForm";

import TodoList from "./components/TodoList";
import { TodoListContext } from "./components/ToDoProvider";

const App = () => {
  const [state] = useContext(TodoListContext);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
