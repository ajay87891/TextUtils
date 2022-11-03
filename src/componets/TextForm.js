import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handelUpClick = () => {
    
    // setText("your Have Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "Success");
  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const handelLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "Success");
  };
  const handelClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "Success");
  };
  const handelTitleClick = () => {
    let newText = (text)=> {
      return text.toLowerCase().replace(/(^|\s)(\w)/g, function(x) {
        return x.toUpperCase();
      });
    }
    setText(newText);
    props.showAlert("Converted to TitleCase", "Success");
  };
  
  const handelExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
     props.showAlert("Removed Extra Spaces", "Success");
  };

  return (
    <>
      <div className="flex flex-col mx-4 md:items-center">
        <h1 className="font-sans text-4xl text-slate-800 dark:text-slate-300 mb-4  ease-linear duration-500 ">
          {props.heading}
        </h1>

        <textarea
          id="myBox"
          rows="4"
          className="block p-2.5 w-4/5 text-sm text-slate-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-64  ease-linear duration-500"
          value={text}
          onChange={handelOnChange}
          placeholder="Enter Your Text Here"
        ></textarea>
        <div className="flex  flex-col md:flex-row md:justify-center md:flex-wrap mx-5">
          <button
            type="button"
            className="text-white dark:text-slate-200 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-7 py-2.5 text-center mt-5 w-64 md:w-52  md:mr-4  ease-linear duration-500"
            onClick={handelUpClick}
          >
            Convert To UpperCase
          </button>
          <button
            type="button"
            className="text-white dark:text-slate-200 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-7 py-2.5 text-center mt-5 w-64 md:w-52 md:mx-4  ease-linear duration-500"
            onClick={handelLowClick}
          >
            Convert To LowerCase
          </button>
          
          <button
            type="button"
            className="text-white dark:text-slate-200 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-7 py-2.5 text-center mt-5 w-64 md:w-52 md:mx-4  ease-linear duration-500"
            onClick={handelTitleClick}
          >
            Convert To Title
          </button>
          <button
            type="button"
            className="text-white dark:text-slate-200 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-7 py-2.5 text-center mt-5 w-64 md:w-52 md:mx-4  ease-linear duration-500"
            onClick={handelExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            type="button"
            className="text-white dark:text-slate-200 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-7 py-2.5 text-center mt-5 w-64 md:w-52 md:mx-4  ease-linear duration-500"
            onClick={handelClearClick}
          >
            Clear Text
          </button>
        </div>
       

      </div>
      <div className="container md:m-auto mx-5">
          <h1 className="text-slate-800 dark:text-slate-300 text-2xl my-4  ease-linear duration-500">Your Text Summary</h1>
          <p className="text-slate-800 dark:text-slate-300  ease-linear duration-500">
            {text.split(" ").length} Words, {text.length} Characters
          </p>
          <p className="text-slate-800 dark:text-slate-300  ease-linear duration-500">
            It will Take {0.008 * text.split(" ").length} Minutes to read
          </p>
          <h2 className="text-slate-800 dark:text-slate-300 text-2xl my-4 ease-linear duration-500">
            Preview 
          </h2>
          <p className="text-slate-800 dark:text-slate-300  ease-linear duration-500">
            {text}
          </p>
        </div>
    </>
  );
}
