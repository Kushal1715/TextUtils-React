import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");

    const upperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","Success");
    }

    const lowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","Success");

    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        let copy = document.getElementById("box");
        copy.select();
        navigator.clipboard.writeText(copy.value);
        props.showAlert("Text Copied to Clipboard","Success");

    }

    const handleSpaces = ()=>{
        let newText = text.trim().split(/ +/).join(' ');
        setText(newText);
        props.showAlert("Extra Spaces Removed","Success");

    }
  return (
    <>
    <div>
            <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'rgb(55, 67, 105)', color: props.mode === 'light'?'black':'white'}} value={text} onChange={handleOnChange} id="box" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick ={upperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick ={lowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick ={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick ={handleSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length -1} words and {(text.length - text.split(" ").length) + 1} characters.</p>
                <p>{0.008 * text.split(" ").length} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    </>
        
  )
}
