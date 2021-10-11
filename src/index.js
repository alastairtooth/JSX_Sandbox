import React from "react";
import ReactDOM from "react-dom";

const fname = "Alastair";
const lname = "Tooth";
const num = Math.floor(Math.random() * 10);

const customStyle = {
  color: "blue",
  fontSize: "20px",
  padding: "10px",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}</h1>
    <p style={customStyle}>Your favourite number is {num}</p>
    <div>
      <img
        className="image"
        src="https://source.unsplash.com/random/300x300"
        alt="something"
      />
      <img
        className="image"
        src="https://source.unsplash.com/random/301x301"
        alt="something"
      />
      <img
        className="image"
        src="https://source.unsplash.com/random/302x302"
        alt="something"
      />
    </div>
  </div>,
  document.querySelector("#root")
);
