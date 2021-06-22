import React from "react";
import "./App.css";
import TodoContainer from "./Components/TodoConatiner/TodoContainer";
function App() {
  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoContainer />
    </div>
  );
}

export default App;
