
import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoListContext } from "./ToDoProvider";



const TodoList = () => {
  const [state] = useContext(TodoListContext);
  return (
    <div>
      {state.todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} state={state} />;
      })}
    </div>
  );
};

export default TodoList;