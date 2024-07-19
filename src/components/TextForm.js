import React, { useState } from 'react'

export default function TextFrom(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newtext = text.toUpperCase();
        settext(newtext)
        props.showAlert("Converted To UpperCase  ", " success");
    }
    const handleLoClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newtext = text.toLowerCase();
        settext(newtext)
        props.showAlert("Converted To LowerCase  ", " success");

    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
        props.showAlert("Extra Spaces Removed  ", " success");
        }

    

    const onClear = () => {
        settext("");
        props.showAlert("Cleared Value  ", " success");
      };
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard  ", " success");
    }
      
    
    const handleOnchange = (event) => {
        // console.log("On change clicked")
        settext(event.target.value)
    }


    const [text, settext] = useState("");
    return (
        <>
       
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnchange} style={{backgroundColor: props.mode ==='dark'?'Gray':'white' , color:props.mode==='dark'?'white':'black' }} id="myBox" value={text} rows="7"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick} > Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick} > Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} > Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy text </button>
                <button className="btn btn-primary mx-2" onClick={onClear}>Clear Value</button>
            </div>
            <div className='container my-2' style={{color: props.mode ==='dark'? 'white':'black'}} >
                <h2>Your text summry</h2>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p> { 0.008 *  text.split(" ").length }Minutes read  </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
            </div>
        </>
    )
}
