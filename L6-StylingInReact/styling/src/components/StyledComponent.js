import React from "react";
import styled from "styled-components";

function StyledComponent() {
   const SmallRedH1 = styled.h1`
      font-size: 1rem;
      color: red;
   `;

   const MyButton = styled.button`
      font-size: 1rem;
      width: 5rem;
      background-color: lightgreen;
   `;

   return (
      <div>
         <SmallRedH1>I am styled</SmallRedH1>
         <MyButton>Button</MyButton>
      </div>
   );
}

export default StyledComponent;
