import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (event)=>{
    // console.log("OnChange was clicked")
    setText(event.target.value); //you can only start writing in text box after this line of code
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#5F6499':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="3"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>Your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something above to preview it"}</p>
      </div>
      
    </>
  )
}
