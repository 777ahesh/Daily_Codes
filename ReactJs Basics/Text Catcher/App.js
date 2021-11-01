import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextBox from "./components/textBox";
import Alerts  from "./components/Alert";
const App = () => {
  const [mode,setMode] = useState('light');
  const [alerts, setalerts] = useState(null);

  const showAlert = (message,type)=>{
    setalerts(
      {
      message: message,
      type: type
      }
      )
  };

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has ben Enabled","success");
    }
    else if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has ben Enabled","success");
    }

  }
  return(
  <>
    <Navbar mode ={mode} toggleMode={toggleMode}/>
    <Alerts alert ={alerts}></Alerts>
    <TextBox mode ={mode}/>
  </>
)};
export default App;
