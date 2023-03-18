import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");  // initial state is empty string
  const [items, setItems] = useState([]);  // initial state is empty array

  function handleChange(event) {   // for handling string
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {  // for handling array
    setItems(prevItems => {
      return [...prevItems, inputText]; /* ... is spread syntex , spread syntax creates a new array that contains all 
                                        the elements of the previous "items" array along with new inputText */
    });
    setInputText(""); /* resets the value of the inputText variable after a new item has been added to the items array. */
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
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
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
