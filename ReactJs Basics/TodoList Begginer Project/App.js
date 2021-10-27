import React, { useState } from "react";
import "./index.css";
import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
import ToDoList from "./component/Todolist";

const App = () =>{

  const [Task,NewTask] = useState();
  const [TaskList, NewElement] = useState([]); 
  const changeText = (event) => {
    NewTask(event.target.value);
  }
  const change = () => {
    NewElement((oldItems)=>{
      return [...oldItems,Task];
    });
    NewTask("");
  }

//   const DeleteItem = (id) =>{
//     NewElement((oldItems)=>{
//       return  oldItems.filter((arrElem,index)=>{
//         return index !== id;
//       })
//     })
// } 

return(
  <>
  <div className="main_div">
      <div className="center_div">  
       <h1>To Do List</h1>
       <input onChange={changeText} type="text"value ={Task} placeholder="Add an Item"></input>
       <AddIcon className="button" onClick ={change}></AddIcon>
       <ol>
         {/* <li><DeleteIcon></DeleteIcon>{TaskList}</li> */}
          {TaskList.map((itemVal,index) =>{
          return <ToDoList  
           text={itemVal}
           id={index}
           key={index}
          //  onSelect={DeleteItem}
           />
          })}

       </ol>
      </div>
  </div>
  
  </>
)



};

export default App;