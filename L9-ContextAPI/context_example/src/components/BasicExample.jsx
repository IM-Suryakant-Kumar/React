import React from "react";

const Context = React.createContext("");
function ContextWrapper() {}
export default function GrandParent() {
   let message = "Greeting from your ancestors";
   return (
      <Context.Provider value={message}>
         <h2>Grand Parent</h2>
         ⬇️
         <Parent></Parent>
      </Context.Provider>
   );
}

function Parent() {
   return (
      <>
         <h2>Parent</h2>
         ⬇️
         <Children></Children>
      </>
   );
}
function Children() {
   const message = React.useContext(Context);
   return (
      <>
         <h2>Children</h2>
         ⬇️
         <div>Grand Parent say's {message}</div>
      </>
   );
}
