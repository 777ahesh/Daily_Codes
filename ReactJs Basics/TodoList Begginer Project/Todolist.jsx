import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const ToDoList = (props) => {
    const [style,newStyle] = useState(false);
    const cutIt = () => {
        newStyle(true);
    };
    return(
        <>
        
        <li style ={{textDecoration: style ? "line-through":"none"}}>
            <span onClick={cutIt}><DeleteIcon >
                </DeleteIcon></span>{props.text}</li>
        </>
    )
}

export default ToDoList;

// // DeleteIcon madhe onClick={()=>{
//             props.onSelect(props.id);
//         }}

