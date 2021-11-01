import React, { useState } from "react";
const TextBox = (props) => {
    const [text,newText] = useState('');
    const change = (event) => {
        newText(event.target.value)
    }
    const UpperCase = () =>{
        const up = text.toUpperCase();
        newText(up);
    };
    
    const LowerCase = () =>{
        const low = text.toLowerCase();
        newText(low);
    };

    const ClearText = () =>{
        newText("");
    };
    const HandleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    };
    const handleExtraSpaces = () =>{
        let SetText = text.split(/[ ]+/);
        newText(SetText.join(" "));
    };
   return( 
   <>
        <div className="container my-3">
        <h1  style={{color: props.mode==='light' ? 'black':'cyan' }}>Text Catcher</h1>
        <div className="mb-3">
        <textarea placeholder="Enter Text Here" style={{color: props.mode==='light' ? 'white':'black'  ,backgroundColor : props.mode==='dark' ? 'white':'black' ,resize: 'none'}} className="form-control" value={text} onChange={change} id ="myBox"rows ="8"></textarea>
        </div>
        <button  onClick={UpperCase} className = "btn btn-primary mx-3">Upper Case</button>
        <button onClick={LowerCase}className = "btn btn-primary mx-3">Lower Case</button>
        <button onClick={ClearText} className = "btn btn-primary mx-3">Clear Text</button>
        <button onClick={HandleCopy} className = "btn btn-primary mx-3">Copy Text</button>
        <button onClick={handleExtraSpaces} className = "btn btn-primary mx-3 my-3">Remove Spaces</button>
        <div className="container my-3" style={{color: props.mode==='light' ? 'black':'cyan' }}>
        <p>The text contans {text.length} characters and {text.split(" ").length} words   </p>
        </div>
        <div className="container"  style={{color: props.mode==='light' ? 'black':'cyan' }}> 
        <h3>Text Preview</h3>
        <div className="mb-3">
        <textarea placeholder="Enter Text Here" style={{color: props.mode==='light' ? 'grey':'black'  ,backgroundColor : props.mode==='dark' ? 'white':'black',resize: 'none' }} className="form-control" value={text.length>0?text:"Enter Something Above to Preview"} onChange={change} id ="myBox"rows ="8" readOnly ></textarea>
        </div>
        </div>
        </div>
    </>
)
}
export default TextBox;