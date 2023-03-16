import React from "react";
import styled from "./style.module.css";

function SheetComponent(props) {
//    let styling = props.isStyled === true ? "heading-h1" : "";
   return (
      <div>
         <h1 className={styled.heading1}>Sheet Component</h1>
         <p className="para">Sheet Para</p>
      </div>
   );
}

export default SheetComponent;
