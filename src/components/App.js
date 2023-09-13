
import React,{useState} from "react";
import './../styles/App.css';
import ToDoComp from "./ToDoComp";
import TaskComp from "./TaskComp";

const App = () => {
  return (
    <div>
      {/* <ToDoComp /> */}
       <TaskComp />
    </div>
  )
}

export default App
