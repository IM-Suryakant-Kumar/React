import React from "react";

function Component() {
   const h1Styling = {
      color: "red",
      backgroundColor: "lightgreen",
   };
   return (
      <div>
         <h1 style={h1Styling}>Inline</h1>
      </div>
   );
}

export default Component;
