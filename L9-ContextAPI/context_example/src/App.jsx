import { useState } from "react";
import GrandParent from "./components/BasicExample";
import "./App.css";

function App() {
   return (
      <div className="App">
         <h1>Context Example</h1>
         <GrandParent></GrandParent>
      </div>
   );
}

export default App;
