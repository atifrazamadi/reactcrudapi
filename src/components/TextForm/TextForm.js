import React, { useState } from 'react';

const withContainer = (WrappedComponent) => {
 
  return (props) => (
    <div className='container my-3'>
 
      <WrappedComponent {...props} />
    </div>
  );
};

const TextForm = (props) => {
    const [text, setText] = useState("");
   
    const handleChange = (e) => {
        setText(e.target.value);
      };

const handleUpClick =()=>{
    const txt=text.toUpperCase();
    setText(txt)
    props.showAlert(" your text has been converted into upperCase","success")
}
const handleLowClick =()=>{
    const txt=text.toLowerCase();
    setText(txt)
    props.showAlert(" your text has been converted into lowerCase","success")
}
const handleCopy =()=>{
    const txt=text+" "+text
    setText(txt)
}
const handleCop =()=>{
    const txt=text.charAt(0).toUpperCase() + text.slice(1);
    setText(txt)
    props.showAlert(" your text has been  capitalize ","success")
}
let p = true;

const handlefrstCop = () => {
  // Toggle the value of p using the logical NOT operator (!)
  p = !p;

  const txt = text
    .split(" ")
    .map((word) =>
      p ? word.charAt(0).toUpperCase() + word.slice(1) : word.toLowerCase()
    )
    .join(" ");
  
  setText(txt);
};

const handleExtSpaces=()=>{
    let txt=text.split(/[ ]+/)
    setText(txt.join(" "))
}

const handleCopyALL = () => {
    const txt = text; // Use the state variable 'text'
    navigator.clipboard.writeText(txt)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

      

  return (
    <>
    <div className='container'>
    <h1 className={`text-${props.mode === 'dark' ? 'white' : 'dark'}`}>{props.heading}</h1>
      <div className="mb-3">
        {/* <label htmlFor="myBox" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>Example text area</label> */}
        <textarea className="form-control" style={{backgroundColor:props.mode=== 'dark' ? 'grey' : 'white',color:props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
        <button className={`btn btn-${props.mode} my-2 mx-1`}   onClick={handleUpClick}>UpperCase</button>
        <button className={`btn btn-${props.mode} my-2 mx-1`}  onClick={handleLowClick}>LowerCase</button>
        <button className={`btn btn-${props.mode} my-2 mx-1`}  onClick={handleCopy}>CopyText</button>
        <button className={`btn btn-${props.mode} my-2 mx-1`}  onClick={handleCop}>Capitalize</button>
        <button className={`btn btn-${props.mode} my-2 mx-1`}  onClick={handlefrstCop}>LatterCap</button>
        <button className={`btn btn-${props.mode} my-2 mx-1`}  onClick={handleCopyALL}>CopyText</button>
        <button className={`btn btn-${props.mode} my-2 mx-1`}  onClick={handleExtSpaces}>RmvSpaces</button>

      </div>

      </div>
      <div className={`container my-5 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
        <h1 >your text summery</h1>
        <p>{text.split(" ").length} words  {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter something above to preview it here  "}</p>
      </div>
    </>
  );
};

// Wrap the "TextForm" component with the "withContainer" HOC
const EnhancedTextForm = withContainer(TextForm);

export default EnhancedTextForm;
