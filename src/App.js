import React, { useState } from "react";
import "./App.css";
import TopBar from "./components/topBar/TopBar";
import AddGroup from "./components/addGroup";
import Todo from "./components/todo";

function App() {
  const [todos, setTodos] = useState([
    {
      content: [
        {
          text: "This is an item for this group",
          isCompleted: false
        },
        {
          text: "This is also an item for this group",
          isCompleted: false
        }
      ],
      todogroup: "This is a group"
    },
    {
      content: [
        {
          text: "This item belongs to this group",
          isCompleted: false
        },
        {
          text: "This item also belongs to this group",
          isCompleted: false
        }
      ],
      todogroup: "This is an another group"
    }
  ]);

  const addGroup = text => {
    const newTodos = [...todos, { content:[],todogroup:text }];
    setTodos(newTodos);
  };

  const addItem = (text,groupIndex) => {
    const newTodos = [...todos];
    newTodos[groupIndex].content.push({
      text:text,
      isCompleted:false
    })
    setTodos(newTodos);
  };

  const completeTodo = (groupIndex,index) => {
    const newTodos = [...todos];
    newTodos[groupIndex].content[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeGroup=groupIndex=>{
    const newTodos = [...todos];
    newTodos.splice(groupIndex,1);
    setTodos(newTodos);
  }

  const removeTodo = (groupIndex,index) => {
    const newTodos = [...todos];
    newTodos[groupIndex].content.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="topbar">
        <TopBar />
      </div>

      <div className="main">
        <div class="row">
          <AddGroup addGroup={addGroup} />
        </div>
        <div className="row">
          {todos.map((todoData, index) => (
            <Todo
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              todos={todoData.content}
              groupName={todoData.todogroup}
              groupIndex={index}
              removeGroup={removeGroup}
              addItem={addItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
