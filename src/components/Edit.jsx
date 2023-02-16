import React, { useContext } from "react";

import styled from "styled-components";
import { TodoListContext } from "./ToDoProvider";

const Edit = ({ setIsVisible, todo }) => {
  const [state, dispatch] = useContext(TodoListContext);

  const editTodoHandler = (id) => {
    dispatch({ type: "EDIT", payload: id });
    setIsVisible(false);
  };
  return (
    <div>
      <Input
        type="text"
        value={state.editInputValue}
        onChange={(e) =>
          dispatch({ type: "EditValue", payload: e.target.value })
        }
      />
      <Button onClick={() => editTodoHandler(todo.id)}>ok</Button>
      <Button onClick={() => setIsVisible(false)}>cancel</Button>
    </div>
  );
};

export default Edit;

const Input = styled.input`
  width: 50%;
  padding: 8px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: #a81bb4;
  color: #831d1d;
  text-align: center;
`;

const Button = styled.button`
  background-color: #68a0d9;
  border: none;
  font-size:12px;
  color: black;
  padding: 14px 20px;
  margin-left: 7px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
 
  cursor: pointer;
`;
