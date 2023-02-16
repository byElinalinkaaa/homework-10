import React, { useContext, useState } from "react";
import Edit from "./Edit";
import styled from "styled-components";
import { TodoListContext } from "./ToDoProvider";

const TodoItem = ({ todo }) => {
  const [state, dispatch] = useContext(TodoListContext);
  const [isVisible, setIsVisible] = useState(false);
  const deleteTodoHandler = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const completedTodoHandler = (id) => {
    dispatch({ type: "COMPLETE", payload: id });
  };

  const toggleHander = () => {
    setIsVisible(true);
  };
  return (
    <div>
      {isVisible ? (
        <Edit setIsVisible={setIsVisible} todo={todo} />
      ) : (
        <Ul>
          <Li>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              {todo.title}
            </span>
            <Button onClick={() => deleteTodoHandler(todo.id)}>Delete</Button>
            <Button onClick={() => completedTodoHandler(todo.id)}>
              completed
            </Button>
            <Button onClick={toggleHander}>Edit</Button>
          </Li>
        </Ul>
      )}
    </div>
  );
};

export default TodoItem;

const Ul = styled.ul`
  width: 600px;
  margin: 0 auto;
  background: #176abd;

  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;

const Li = styled.li`
  background: #0fe7bf;
  gap: 20px;
  color: #3d3d95;
  margin: 5px;
  list-style: none;
  display: grid;
  justify-content: center;
  gap: 17px;
  grid-template-columns: 1fr 100px 100px 100px;
`;

const Button = styled.button`
  background-color: #68a0d9;
  border: none;
  color: #26369c;
  width:80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 5px rgb(176, 126, 18);
  cursor: pointer;
  :hover {
    background-color: purple;
  }
`;
