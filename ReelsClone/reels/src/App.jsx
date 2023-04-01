import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Signup from "./components/Signup";

function App() {
   const [count, setCount] = useState(0);

   return (
      <div className="App">
         {/* <h2>Reels App🚀🚀</h2> */}
         <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/" element={<Feed></Feed>}></Route>
            <Route path="/feed" element={<Feed></Feed>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
         </Routes>
      </div>
   );
}

export default App;
