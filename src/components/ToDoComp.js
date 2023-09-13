import React,{useState} from "react";
import './../styles/App.css';

const ToDoComp = () => {

    const [text,setText] = useState("")
    
    const[toDoArr, setToDoArr] = useState(
      [
        
      ])
      
      function handleClick(){
        const newTask={id:toDoArr.length+1, toDo:text}
        setToDoArr([...toDoArr,newTask])
      setText("")
        console.log(setToDoArr)
      }

      function handleRemoveTask(taskId){
        const filteredArr = toDoArr.filter(item=>item.id!=taskId)
        setToDoArr(filteredArr)
      }

  return (
    <div>
        <h1 style={{align:"centre"}}> To-Do List</h1>
        <input onChange={(e)=>setText(e.target.value)} value={text} /><button onClick={handleClick}>Add To Do</button>
        {
           toDoArr && toDoArr.map((item,index)=>
                <div>
                    <ul>
                    <li key={index}>{item.toDo}</li><span><button onClick={()=>handleRemoveTask(item.id)}>Delete</button></span>
                    </ul>
                </div>
            )
        }
        
    </div>
  )
}

export default ToDoComp 

