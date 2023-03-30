// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
// import React from "react";
// import ReactDOM from "react-dom/client";

// function Page() {
//   return (
//     <>
//       <ol>
//         <li>Its Hireable skill</li>
//       </ol>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Page />)
// ----------------------------------------
/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import React from "react";
import ReactDOM from "react-dom";
import Image from "./assets/react.svg";

function Page() {
   return (
      <>
         <header>
            <nav>
               <img src={Image} alt="" width="40px" />
            </nav>
         </header>
         <h1>Reasons I'm excited to learn React</h1>
         <ol>
            <li>
               It's a popular library, so I'll be able to fit in with the cool
               kids!
            </li>
            <li>I'm more likely to get a job as a developer if I know React</li>
         </ol>
         <footer>
            <small>
               © 2023 IM-Suryakant-Kumar development. All rights reserved.
            </small>
         </footer>
      </>
   );
}

ReactDOM.render(<Page />, document.getElementById("root"));
