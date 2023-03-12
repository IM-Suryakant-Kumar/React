import React, { useState } from "react";

function InputBox(props) {
   const [valueOfInput, setVal] = useState("");
   const addTask = () => {
      //   console.log("Add task executed");
      console.log("Task to add", valueOfInput);
      props.acceptNewTask(valueOfInput);
      setVal("");
   };
   const setInputVal = (e) => {
      setVal(e.target.value);
   };
   return (
      <div className="input-container">
         {/* forms => input  */}
         <input type="text" value={valueOfInput} onChange={setInputVal}></input>
         <button onClick={addTask}>+</button>
      </div>
   );
}

export default InputBox;
