import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faCheck } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ todo, index, completeTodo, removeTodo,groupIndex }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <li>{todo.text}{" "}     
       <FontAwesomeIcon onClick={() => completeTodo(groupIndex,index)} icon={faCheck}  color="green"/>{" "} 
      <FontAwesomeIcon onClick={() => removeTodo(groupIndex,index)} icon={faTimes}  color="red"/>
      </li>
    </div>
  );
}

export default TodoItem;
