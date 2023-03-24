import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirebaseAuth from "./components/FirebaseAuth";
import FireStore from "./components/FireStore";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <h1>Firebase Demo</h1>
         {/* <FirebaseAuth></FirebaseAuth> */}
         <FireStore></FireStore>
      </>
   );
}

export default App;
