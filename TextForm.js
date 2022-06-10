import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpclicked = () => {
    // console.log("upper case was clicked"+ text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "Success")
  };
  const handlelowclicked = () => {

    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "Success")
  };
  const handleClearClicked = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "Success")

  };
  const handleTcClicked = () => {
    let newText = function toTitles(s) { return s.replace(/\w\S*/g, function (t) { return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); }); };
    setText(newText);
    props.showAlert("Converted to TitleCase", "Success")

  };
  const handleCopyClicked = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied", "Success")
  }
  const handleExtraSpaceClicked = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "Success")

  }
  const handleOnChange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText('New text') correct way to  change state;
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'green' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control border border-warning  border-3 "
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? '#3b3d3d' : 'white', color: props.mode === 'dark' ? 'green' : 'black' }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} id="btn" className="btn btn-success mx-1 my-1" onClick={handleUpclicked}>
          UPPERCASE
        </button>
        <button disabled={text.length === 0} id="btn" className="btn btn-success mx-1 my-1" onClick={handlelowclicked}>
          lowercase
        </button>
        <button disabled={text.length === 0} id="btn" className="btn btn-success mx-1 my-1" onClick={handleTcClicked}>
          Title Case
        </button>
        <button disabled={text.length === 0} id="btn" className="btn btn-success mx-1 my-1 " onClick={handleExtraSpaceClicked}>
          Remove Extra Space
        </button>
        <button disabled={text.length === 0} id="btn" className="btn btn-success mx-1 my-1" onClick={handleCopyClicked}>
          Copy
        </button>
        <button disabled={text.length === 0} id="btn" className="btn btn-success mx-1 my-1" onClick={handleClearClicked}>
          Clear
        </button>

      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'green' : 'black' }}>
        <h1>Your Text Summary</h1>
        <p id="words" >
          {text.split(" ").filter((element) => { return element.length !== 0 }).length} Words and {text.length} Letters{" "}
        </p>
        <p id="reading" > Time Taken To Read    {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Type Something To Preview Here"}</p>
      </div>

    </>
  );
}
