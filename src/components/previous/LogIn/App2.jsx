import React from "react";
import Form from "./Form";

var isLoggedIn = false;

function App2() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Welcome Back</h1> : <Form />}
    </div>
  );
}

export default App2;
