import React from "react";

function List(props) {
  let items = ["pen", "pencil", "eraser"];

  //   console.log(arrayOfhtml);
  // Convert array of data -> array of html
  return (
    <>
      <br />
      ----------------------------
      <h2>List</h2>
      <ul>
        {/* dynamic list */}
        {items.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default List;
