import "./App.css";
import React, {useState} from 'react'
import { Navbar } from "./Navbar";
import { TextArea } from "./TextArea";
import { Alert } from "./Alert";
import {
   BrowserRouter,
   Routes,  
   Route
} from "react-router-dom";

export const App = () => {
   
   const [mode, setMode] = useState("light");
   const toggleMode = () =>{
      if (mode === "light"){
         setMode('dark')
         document.body.style.backgroundColor = "#404552";
         showAlert("Dark mode has been enabled", "info");
      }
      else{
         setMode('light')
         document.body.style.backgroundColor = "white"
         showAlert("Light mode has been enabled", "info");
      }

   }

   const [alert, setAlert] = useState(null);
   const showAlert = (msg, tp) => {
      
      setAlert({
         message : msg,
         type : tp
      })


      setTimeout(()=>{
         setAlert(null)
      }, 1600);
   }

   return (
      <BrowserRouter>
        <Navbar title = "Text Utils" toggleMode = {toggleMode} mode = {mode}/>
        <Alert alert = {alert}/>

         <Routes> 
            <Route path='/' element={<TextArea showAlert = {showAlert} heading = "Enter our text to analyze below" mode = {mode}/>} />
            <Route path="about" element={<h1>This is the about page </h1>}/>
         </Routes>

      </BrowserRouter>
   );
};

export default App;
