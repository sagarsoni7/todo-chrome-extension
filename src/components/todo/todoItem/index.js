import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faCheck } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ todo, index, completeTodo, removeTodo,groupIndex }) {
  return (
         
  <tr style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
    <td>{todo.text}</td>
    <td style={{textAlign:"center"}}><FontAwesomeIcon onClick={() => completeTodo(groupIndex,index)} icon={faCheck}  color="green"/></td>
    <td style={{textAlign:"center"}}><FontAwesomeIcon onClick={() => removeTodo(groupIndex,index)} icon={faTimes}  color="red"/></td>
  </tr>
  );
}

export default TodoItem;
