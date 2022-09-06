import React , {useState} from "react";

export const TextArea = (props) => {
  const [text, setText] = useState("");
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("The text has been converted into UPPERCASE", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("The text has been converted into lowercase", "success");
  }
  
  const handleClClick = () => {
    setText("");
    props.showAlert("The text has been cleared", "danger");
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  return (
    <div style = {{color: (props.mode === "dark") ? "white" : "#404552", backgroundColor: (props.mode === "dark") ? "#404552" : "white"}} className="container py-4">
      <h1 style = {{paddingBottom : 10}}>{props.heading} -</h1>
      <div className="mb-3">
        <textarea style = {{color: (props.mode === "dark") ? "white" : "#404552", backgroundColor: (props.mode === "dark") ? "#404552" : "white"}} 
        className="form-control" id="myTextArea" value = {text} rows="3" onChange={handleOnChange}></textarea>
      </div>


      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lowercase</button>   

      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>

      <button disabled={text.length === 0}className="btn  btn-danger mx-2 my-2" onClick={handleClClick}>Clear text</button>   

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter( (x) => x.length !== 0 ).length} Words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{ text.length>0 ? text: "Enter your text to above to see the preview"}</p>
      </div>

    </div>
  );
};
