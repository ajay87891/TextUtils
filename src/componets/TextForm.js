import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here")
  const handelUpClick = ()=>{
    console.log("Clicked");
    setText("your Have Clicked");
  }
  const handelOnChange = (event)=>{
    setText(event.target.value)

  }
  return (
    <>
    <div className="flex flex-col ">
    <h1 className="font-sans text-4xl text-slate-800 dark:text-slate-300 mb-4">{props.heading}</h1>

<textarea id="myBox" rows="4" className="block p-2.5 w-4/5 text-sm text-slate-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-96 " value={text} onChange={handelOnChange}></textarea>
<button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-7 py-2.5 text-center mt-5 w-64 " onClick={handelUpClick}>Convert To UpperCase</button></div>
</>
  )
}
