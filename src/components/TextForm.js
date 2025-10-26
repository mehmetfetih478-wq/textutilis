import React from 'react';
import { useState } from "react";

export default function TextForm(props) {

// const [btntext, setBtnText] = useState("Convert To Bold");
// const [btntext2, setBtnText2] = useState("Convert To Italic");

// const [myItalic, setMyItalic] = useState({
//     fontStyle : 'normal'
//   })

//   const [myBold, setMyBold] = useState({
//     fontWeight : 'normal',
//     fontStyle : 'normal'
//   })
  
// const [btntext, setBtnText] = useState("Convert To Bold");

// const [myBold, setMyBold] = useState({
//     fontWeight : 'normal'
//   })

// const boldHandle =()=>{
//     // console.log("UpperCase is Clicked " + text);
//     if(myBold.fontWeight === 'normal'){
//       setMyBold({
//         fontWeight : 'bold'
//       })
//       setBtnText("Convert To Normal")
//     }
//     else{
//       setMyBold({
//         fontWeight : 'normal'
//       })
//       setBtnText("Convert To Bold")
//     }
    
//   }

  const upperHandUpClick =()=>{
    // console.log("UpperCase is Clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted Into UpperCase", "success")
  }
  
// const boldHandle =()=>{
//     // console.log("UpperCase is Clicked " + text);
//     if(myBold.fontWeight === 'normal'){
//       setMyBold({
//         fontWeight : 'bold'
//       })
//       setBtnText("Convert To Normal")
//     }
//     else{
//       setMyBold({
//         fontWeight : 'normal'
//       })
//       setBtnText("Convert To Bold")
//     }
    
//   }

// const italicHandle =()=>{
//     // console.log("UpperCase is Clicked " + text);
//     if(myBold.fontStyle === 'normal'){
//       setMyBold({
//         fontStyle : 'italic'
//       })
//       setBtnText2("Convert To Normal")
//     }
//     else{
//       setMyBold({
//         fontStyle : 'normal'
//       })
//       setBtnText2("Convert To Italic")
//     }
    
//   }

  const clearHandle =()=>{
    // console.log("UpperCase is Clicked " + text);
    let newText = ''
    setText(newText);
    props.showAlert("Your Text is Cleared", "success")

  }

  const lowerHandUpClick =()=>{
    // console.log("UpperCase is Clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted Into LowerCase", "success")

  }
  
    const handleOnChange =(event)=>{
    // console.log("UpperCase is On Change ");
    setText(event.target.value);
  }
const [text, setText] = useState('');


  return (
    <>
    <div className='container'>
    
<div className="mb-3 my-3">
    <h1 className={`text-${props.mode === 'light' ? 'dark':'light'}`}>{props.heading} </h1>
  {/* <label htmlFor="mytextarea" className="form-label">Enter TextArea</label> */}
  <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? 'grey':'white',
    color: props.mode === 'dark' ? 'white':'black'
  }}  id="mytextarea" value={text} onChange={handleOnChange} rows="6"></textarea>
</div>
<button className="btn btn-primary" onClick={upperHandUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary ms-2" onClick={lowerHandUpClick}> Convert To LowerCase</button>
{/* <button className="btn btn-primary ms-2"  onClick={boldHandle}> {btntext}</button>
<button className="btn btn-primary ms-2"  onClick={italicHandle}> {btntext2}</button> */}
<button className="btn btn-primary ms-2" onClick={clearHandle}> Remove Text</button>


    </div>
    <div className='container my-3'>
      <h2 className={`text-${props.mode === 'light' ? 'dark':'light'}`}>Your Text Summary</h2>
      <p className={`text-${props.mode === 'light' ? 'dark':'light'}`}> {text.split(" ").length} words, {text.length} characters</p>
      <p className={`text-${props.mode === 'light' ? 'dark':'light'}`}>{0.008 * text.split(" ").length} Minutes read</p>
      <h2 className={`text-${props.mode === 'light' ? 'dark':'light'}`}>Preview Your Text</h2>
      <p className={`text-${props.mode === 'light' ? 'dark':'light'}`} > {text.length>0?text:"Enter Something to preview"} </p>
    </div>
    </>
  )
}
