import React, { useState } from "react";

function InputBox({ getNewTaskFromInput }) {
   const [value, setValue] = useState("");
   const getCurrentTask = () => {
      getNewTaskFromInput(value);
      setValue("");
   };
   return (
      <div className="inputBox">
         <input
            type="text"
            className="me-2 p-2 mt-2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
         <button className="btn btn-primary" onClick={getCurrentTask}>
            Add Task
         </button>
      </div>
   );
}

export default InputBox;
