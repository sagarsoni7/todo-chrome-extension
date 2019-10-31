import React from "react";
import TodoItem from "./todoItem";
import AddItem from "./addItem";
import "./todo.css";

function Todo({
  completeTodo,
  removeTodo,
  todos,
  groupName,
  groupIndex,
  removeGroup,
  addItem
}) {
  return (
    <div className="col-md-12">
      <div className="main-todo-input-wrap">
        <div className="main-todo-input fl-wrap todo-listing">
        
          <ul id="list-items">
            <table id="customers">
              <tr>
                <th>{groupName}{" "}</th>
                <th>Tick Item</th>
                <th>Remove Item</th>
              </tr>
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
              <AddItem groupIndex={groupIndex} addItem={addItem} />
            <tr>
              <td></td>
              <td></td>
              <td style={{textAlign:"right"}}><span
                    style={{color:"red",fontSize:"80%"}}
                    onClick={() => removeGroup(groupIndex)}                    
                    
                  >Delete Group</span></td>
            </tr>
            </table>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
