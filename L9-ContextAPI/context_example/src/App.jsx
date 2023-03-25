import { useState } from "react";
import GrandParent from "./components/BasicExample";
import Page from "./components/webpage/Page";
import "./App.css";

function App() {
   return (
      <div className="App">
         {/* <h1>Context Example</h1> */}
         {/* <GrandParent></GrandParent> */}
         <Page></Page>
      </div>
   );
}

export default App;
