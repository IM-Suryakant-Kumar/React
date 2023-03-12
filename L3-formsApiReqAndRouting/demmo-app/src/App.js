import { useState } from "react";
import "./App.css";
import InputBox from "./component/InputBox";
import OutputBox from "./component/OutputBox";

function App() {
   const [items, setItems] = useState([]);
   let acceptNewTask = (task) => {

      if (task !== "") {
         let newTask = [...items, task];
         // state var
         setItems(newTask);
      }
   };
   //  console.log("Executed");
   return (
      <div>
         <h1>Todo App</h1>
         <InputBox acceptNewTask={acceptNewTask}></InputBox>
         <OutputBox list={items}></OutputBox>
      </div>
   );
}

export default App;
