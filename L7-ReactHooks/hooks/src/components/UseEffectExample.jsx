import React, { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
   switch (action.type) {
      case "inc":
         return state + 1;
      case "dec":
         return state - 1;
      case "incby5":
         return state + 5;
      case "decby5":
         return state - 5;
      case "incUser":
         return Number(state) + Number(action.payload);
      default:
         return state;
   }
}

function UseEffectExample() {
   console.log("Before render");
   // complex => forms
   const [count, dispatch] = useReducer(reducer, 0);
   // useState
   const [val, setVal] = useState("");
   //    Executes the function after => after render
   //    useEffect(() => {
   //       console.log("Effect");
   //    });

   // Executes the function after => only once after render => get data
   //    useEffect(() => {
   //       console.log("Effect");
   //       return function () {
   //          console.log("cleanup");
   //       };
   //    }, []);

   // dependency changes
   useEffect(() => {
      console.log("Effect");
      return function () {
         console.log("cleanup");
      };
   }, [count]);

   return (
      <>
         <div>UseReducerExample</div>
         <p>Count: {count}</p>
         <button
            onClick={() => {
               dispatch({ type: "inc" });
            }}
         >
            Increment
         </button>
         <button
            onClick={() => {
               dispatch({ type: "dec" });
            }}
         >
            Decrement
         </button>
         <button
            onClick={() => {
               dispatch({ type: "incby5" });
            }}
         >
            Inc by 5
         </button>
         <button
            onClick={() => {
               dispatch({ type: "decby5" });
            }}
         >
            Dec by 5
         </button>
         <input
            type="text"
            value={val}
            onChange={(e) => {
               setVal(e.target.value);
            }}
         />

         <button
            onClick={() => {
               dispatch({
                  type: "incUser",
                  payload: val,
               });
            }}
         >
            Increment acc to user
         </button>
         {console.log("Between Render")}
      </>
   );
}

export default UseEffectExample;
