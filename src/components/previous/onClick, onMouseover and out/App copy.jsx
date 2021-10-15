import React, { useState } from "react";


function App() {
  const [headingText, setHeadingText] = useState("");
  const [buttonColour, setButtonColour] = useState(true);
  const [name, setName] = useState("");

  function handleClick() {
    setHeadingText("Submitted")
  }
  function handleOver() {
    setButtonColour(false)
  }
  function handleOut() {
    setButtonColour(true)
  }

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        style={{ backgroundColor: buttonColour ? "white" : "black" }}
        onClick={handleClick}
        onMouseOver={handleOver}
        onMouseOut={handleOut}>
        Submit
      </button>
      <p>{headingText}</p>
    </div>
  );
}

export default App;
