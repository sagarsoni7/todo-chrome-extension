import React, { useState } from "react";

function AddItem({ groupIndex, addItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addItem(value, groupIndex);
    setValue("");
  };


  return (
    <tr>
      <td>
        <input
          style={{ border: "none", backgroundColor:"transparent" }}
          type="text"
          placeholder="add something to group..."
          value={value}
          onChange={e => setValue(e.target.value)}
                  />
      </td>
      <td
        onClick={handleSubmit}
        style={{ fontWeight: "bold", textAlign: "center", color: "#4DB7FE" }}
      >
        Add
      </td>
      <td></td>
    </tr>
  );
}

export default AddItem;
