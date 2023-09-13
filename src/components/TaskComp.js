import React,{useState} from "react";
import './../styles/App.css';

const TaskComp = () => {

    const [text,setText] = useState("")
    const [text2,setText2] = useState("")

      const [editIndex, setEditIndex] = useState(null);


    console.log(text)

    const[isEditClicked, setIsEditClicked] = useState(false)
    
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

      function handleEdit(taskId){
        setEditIndex(taskId);
        //setIsEditClicked(true);
           setIsEditClicked(!isEditClicked)
           if(isEditClicked){
              const updatedToDoArr=  toDoArr.map((item)=>{
                    if(item.id===taskId){         
                    //item.toDo=text2
                    return{...item, toDo :text2}
                    }
                    return item;               
                })
            setToDoArr(updatedToDoArr)
           }         
      }

  return (
    <div>
        <h1 style={{align:"centre"}}> Task Manager</h1>
        <input onChange={(e)=>setText(e.target.value)} value={text} /><button onClick={handleClick}>Add</button>
        {
           toDoArr && toDoArr.map((item,index)=>
                <div>
                    <ul className="item" key={index}>
                        <>
                        {             
                        isEditClicked && editIndex===item.id? 
                        ( <> <input  value={text2}  onChange={(e)=>setText2(e.target.value)} /></>) :
                        (<p> {item.toDo}</p>)                         
                        }
                        </>
                        <button onClick={()=>handleEdit(item.id)}>{isEditClicked? "Save" : "Edit"}</button>
                        <button onClick={()=>handleRemoveTask(item.id)}>Delete</button>
                    </ul>
                </div>
            )
        }
        
    </div>
  )
}

export default TaskComp 

