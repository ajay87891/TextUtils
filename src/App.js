import "./App.css";
// import { Navbar } from "flowbite-react";
import Navbar from './componets/Navbar';
import TextForm from "./componets/TextForm";


function App() {
  return (
    <div className="dark:bg-slate-800 min-h-screen">

      <Navbar title="TextUtils" aboutText="About Us"/>
      
      <div className="md:mx-44 mx-8">
      <TextForm heading="Enter Text To Analyze"/></div>
      
      
    </div>
  );
}

export default App;
