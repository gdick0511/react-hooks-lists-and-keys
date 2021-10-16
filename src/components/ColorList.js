import React from "react";
import ColorItem from './ColorItem';


function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "blue",
    "organge"
  ];

  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color} />
  })



  // This was practice using Keys and ID's for Objects
  // const users = [
  // { id: 1, firstName: "Duane", lastName: "Watson" },
  // { id: 2, firstName: "Duane", lastName: "Johnson" },
  // ];

  // const usersHeading = users.map((users) => {
  //   return <h1 key={users.id}>{users.firstName}</h1>
  // })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
