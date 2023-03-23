import React, { useState, useRef } from "react";

function UseRefExample() {
   const [val, setVal] = useState("");
   const refVAr = useRef(null);
   const focusInput = () => {
      refVAr.current.focus();
   };
   return (
      <>
         <div>UseRefExample</div>
         <input
            type="text"
            value={val}
            onChange={(e) => {
               setVal(e.target.value);
            }}
            ref={refVAr}
         />
         <button
            onClick={() => {
               alert(val);
               setVal("");
            }}
         >
            Alert content
         </button>
         <button onClick={focusInput}>Focus</button>
      </>
   );
}

export default UseRefExample;
