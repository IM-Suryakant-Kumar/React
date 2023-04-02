import React, { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";

function App() {
   const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
   const getNewTaskFromInput = (newTask) => {
      // alert("App: " + newTask);
      setTasks([...tasks, newTask]);
   };
   return (
      <div className="mt-5 text-center">
         <h1 className="me-5">TODO APP</h1>
         <InputBox getNewTaskFromInput={getNewTaskFromInput}></InputBox>
         <OutputBox tasks={tasks}></OutputBox>
      </div>
   );
}

export default App;
