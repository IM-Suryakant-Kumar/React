import React from "react";

function OutputBox(props) {
   // Asuming that the data is coming from InputBox
   return (
      <div className="output-container">
         <ul>
            {props.list.map((item, idx) => {
               return <li key={idx}>{item}</li>;
            })}
         </ul>
      </div>
   );
}

export default OutputBox;
