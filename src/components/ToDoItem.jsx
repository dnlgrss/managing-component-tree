// Component that puts a line on the item clicked
//import React, { useState } from "react";

//function ToDoItem(props) {

//  const [state, setState] = useState(false)

// function changeState(prev){
//on each click state switches between true and false
//    setState((prev) =>{
//        return !prev;
//    })
//  }

// On each click textdecoration switches between line-through and none
//  return <li style={{textDecoration : state ? 'line-through' : 'none'}} onClick={changeState}>{props.text}</li>;
//}

//export default ToDoItem;

//*************************************************** */

//Component that deletes the item once it's clicked
import React from "react";

function ToDoItem(props) {
  // On each click the props deleted gets triggered and passed to the component in the app.jsx file
  return (
    <li
      onClick={() => {
        props.deleted(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
