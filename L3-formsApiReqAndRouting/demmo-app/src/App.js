import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import InputBox from "./Component/todo/InputBox";
import OutputBox from "./Component/todo/OutputBox";

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
   //*      ********************/
   // let [users, setUsers] = useState([]);

   // useEffect(function () {
   //    // API request 
   //    (async () => {
   //       let res = await axios.get(
   //          "https://jsonplaceholder.typicode.com/users"
   //       );
   //       setUsers(res.data);
   //    })();
   // }, []);
   // console.log("I will execute");
   // return (
   //    <div>
   //       <h1>Fetching Data</h1>
   //       {/* Conditional rendering */}
   //       {users.length === 0 ? (
   //          <h2>...Loading</h2>
   //       ) : (
   //          <>
   //             <h2>Users</h2>
   //             <ul>
   //                {users.map((user) => {
   //                   return <li key={user.id}>{user.name}</li>;
   //                })}
   //             </ul>
   //          </>
   //       )}
   //    </div>
   // );
}

export default App;
