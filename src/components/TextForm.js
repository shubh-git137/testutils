import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [btnHide, setBtnHide] = useState(true);
  //Upper Case
  const clickUpCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to Upper case", "success");
  };

  //Lower Case
  const clickLoCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const changeToUpCase = (event) => {
    setText(event.target.value);
  };

  //Clear Text
  const handleClearText = (event) => {
    const newText = "";
    setText(newText);
  };

  // Reverse Text
  const clickToReverse = (event) => {
    var splitString = text.split("");
    const newText = splitString.reverse();
    var joinArray = newText.join("");
    setText(joinArray);
  };

  //Copy Text

  const handleCopy = () => {
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  //Remove Extra Spaces

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const btnvisible = () => {
    setBtnHide(false);
  };
  return (
    <>
      <div
        className=" container mb-3"
        style={{ color: props.mode === "light" ? "#02053c" : "white" }}
      >
        <h1>{props.title}</h1>
        <label htmlFor="textForm" className="form-label">
          Try TextUtils - Word Counter | Character Counter | Remove Extra Spaces
          | etc.
        </label>
        <textarea
          onKeyUp={btnvisible}
          className="form-control"
          onChange={changeToUpCase}
          value={text}
          id="textBox"
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#02053c",
            color: props.mode === "light" ? "#02053c" : "white",
          }}
        ></textarea>
        <br />
        <button className="btn btn-primary mx-1 my-1" onClick={clickUpCase} disabled={btnHide}>
          Click to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={clickLoCase}
          disabled={btnHide}
        >
          Click to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={clickToReverse} disabled={btnHide}>
          Reverse
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={btnHide}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpaces} disabled={btnHide}>
          Remove Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearText} disabled={btnHide}>
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#02053c" : "white" }}
      >
        <h2> Your text summary</h2>

        <p>
          {text.split(" ").filter((s) => s !== "").length} words and{" "}
          {text.length} charector
        </p>
        <p>
          {0.008 * text.split(" ").filter((s) => s !== "").length} minuts to
          read
        </p>
        <h2>Preview Text</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
