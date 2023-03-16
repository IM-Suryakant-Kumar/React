import React from "react";

function Button() {
   return (
      <div>
         <button
            style={{
               border: "2px solid black",
               padding: "0.5rem",
               backroundColor: "lightblue",
            }}
         >I am a button</button>
         <h1 className="heading-h1">Inside Button</h1>
      </div>
   );
}

export default Button;
