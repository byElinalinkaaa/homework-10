
import React, { useContext } from "react"
import styled from "styled-components"
import { TodoListContext } from "./ToDoProvider"


const TodoForm = () => {
  const [state, dispatch] = useContext(TodoListContext)
  const submitHandler = (e) => {
    e.preventDefault()

    const newTodo = {
      title: state.inputValue,
      id: Date.now(),
      completed: false,
    }

    dispatch({ type: "ADD", payload: newTodo })
  }
  return (
    <form onSubmit={submitHandler}>
        <Title>To Do Form</Title>
      <Input
        type="text"
        value={state.inputValue}
        onChange={(e) => dispatch({ type: "value", payload: e.target.value })}
      />
      <Button>Add todo</Button>
    </form>
  )
}

export default TodoForm
const Title = styled.h1`
  margin-left: 10px;
  text-align: center;
  width: 99%;
  height: 70px;
  background-color: #c3ad20;
  border-bottom: 20px;
  color: whitesmoke;
  border: 2px solid black;
`;
const Input = styled.input`
  width: 30%;
  padding: 12px 15px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: #f01d8a;
  color: #d31919;
  text-align: center;
`

const Button = styled.button`
display:flex;
  background-color: #a15888;
  border: none;
  color: #4b295f;
  padding: 15px 32px;
  text-align: center;
  /* text-decoration: none; */
  display: inline-block;
  font-size: 16px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-radius: 5px;
  /* box-shadow: 0px 0px 2px 2px rgb(0, 0, 0); */
  cursor: pointer;
`