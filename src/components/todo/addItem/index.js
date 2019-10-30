import React,{useState} from "react";

function AddItem({groupIndex,addItem}){
    const [value, setValue]=useState(" ");

    const handleSubmit=e=>{
        e.preventDefault();
        if(!value) return;
        addItem(value,groupIndex);
        setValue("");
    };
    
    return(
        <form onSubmit={handleSubmit}>
          <input  type="text" placeholder="add something to group..." value={value} onChange={e=>setValue(e.target.value)}/>
          <input style={{backgroundColor:"#4DB7FE",border:"none",color:"white", height:"21px"}} type="submit" value="Add to Group"/>
        </form>
    );
};

export default AddItem;