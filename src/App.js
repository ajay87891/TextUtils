import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import "./App.css";
import Alert from "./componets/Alert";
// import { Navbar } from "flowbite-react";
import Navbar from './componets/Navbar';
import TextForm from "./componets/TextForm";
import About from "./componets/About";





function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    

  }

  return (
    <>
      <Router>
        
      <Navbar title="TextUtils" aboutText="About Us" showAlert={showAlert}/>
      <Alert alert={alert}/>
      
      
      <Routes>
          <Route exact path="/about"
            element = {<About />}
          />
          
          <Route exact path="/" 
          element={
          <TextForm heading="Enter Text To Analyze" showAlert={showAlert}/>}
          />
        </Routes>
        
        </Router>
      
      
      
      
      
      
      
    </>
  );
}

export default App;
