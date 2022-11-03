import { useState } from "react";
import "./App.css";
import Alert from "./componets/Alert";
// import { Navbar } from "flowbite-react";
import Navbar from './componets/Navbar';
import TextForm from "./componets/TextForm";
// import About from "./componets/About";




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

      <Navbar title="TextUtils" aboutText="About Us" showAlert={showAlert}/>
      <Alert alert={alert}/>
      
      <div className="md:mx-44 mx-8">
      <TextForm heading="Enter Text To Analyze" showAlert={showAlert}/></div>
      {/* <About/> */}
      
      
      
    </>
  );
}

export default App;
