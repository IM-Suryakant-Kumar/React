import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

export const ContextObj = React.createContext("");
function Page() {
   const [cTheme, setTheme] = useState("dark");
   const toggleTheme = () => {
      cTheme === "light" ? setTheme("dark") : setTheme("light");
   };
   return (
      <ContextObj.Provider value={cTheme}>
         <h2>Page</h2>
         <Header></Header>
         <Main></Main>
         <Footer></Footer>
         <button onClick={toggleTheme}>Switch Theme</button>
      </ContextObj.Provider>
   );
}

export default Page;
