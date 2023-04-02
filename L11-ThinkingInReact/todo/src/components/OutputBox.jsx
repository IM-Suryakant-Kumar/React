import React, { useState } from "react";

function OutputBox({ tasks }) {
   return (
      <div className="outputBox mt-2 me-5">
         <ul className="list-inline">
            {tasks.map((task, idx) => (
               <li key={idx}>{task}</li>
            ))}
         </ul>
      </div>
   );
}

export default OutputBox;
