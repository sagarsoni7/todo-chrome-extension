import React from "react";
import TodoItem from "./todoItem";
import AddItem from "./addItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Todo({ completeTodo, removeTodo, todos,groupName,groupIndex,removeGroup,addItem }) {
  return (
    <div className="col-md-12">
      <div className="main-todo-input-wrap">
        <div className="main-todo-input fl-wrap todo-listing">
        <p style={{padding:"3px",color:"#4DB7FE",fontSize:"25px"}}><b>{groupName}</b>{" "}
        <FontAwesomeIcon onClick={() => removeGroup(groupIndex)} icon={faTimes}  color="red"/>
        </p>
        <AddItem groupIndex={groupIndex} addItem={addItem}/>
          <ul id="list-items">          
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                groupIndex={groupIndex}
                
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
