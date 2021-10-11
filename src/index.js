import React from "react";
import ReactDOM from "react-dom";

const fname = "Alastair";
const lname = "Tooth";
const num = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.querySelector("#root")
);
