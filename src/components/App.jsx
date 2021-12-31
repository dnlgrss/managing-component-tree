import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    // we call the list items array setItems and we target the previous state which is the complete array since we haven't changed anything yet
    setItems((prev) => {
      // we filter(requires a function always) that returns a new array with the condition established (not equal to id in this case)
      // the filter function has as first callback the value and as second the index of the element in the array
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* the map function has as first callback the value and as second the index of the element in the array that we are going to use as 
        key (mandatory if yoou're mapping something in react) and as a unique id(passed to the deleteItem() function) to use when we want to target the itema (e.g. for deleting it)*/}
          {items.map((todoItem, index) => (
            //When the props deleted gets triggered it calls the deleteItem function
            <ToDoItem
              text={todoItem}
              deleted={deleteItem}
              key={index}
              id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
