import React,{useState} from "react";

function AddGroup({addGroup}){

    const [value, setValue]=useState(" ");

    const handleSubmit=e=>{
        e.preventDefault();
        if(!value) return;
        addGroup(value);
        setValue("");
    };

    return(
      <>
        <div className="col-md-12">
        <div className="main-todo-input-wrap">
          <div className="main-todo-input fl-wrap">
          <form onSubmit={handleSubmit}>
            <div className="main-todo-input-item">
              {" "}
              
              <input
                type="text"
                id="todo-list-item"
                value={value}
                placeholder="What will you do today?"
                onChange={e=>setValue(e.target.value)}
              />{" "}
              
            </div>{" "}
            <input type="submit" value="Create Group" className="add-items main-search-button"/>
            </form>
          </div>
        </div>
      </div>
      </>
    );
};

export default AddGroup;