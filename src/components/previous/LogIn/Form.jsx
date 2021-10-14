import React from "react";
import Input from "./Input";

var isRegistered = true;

function Form() {
  return (
    <div>
      {isRegistered ? <h1>Log in</h1> : <h1>Sign up</h1>}
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!isRegistered && <Input type="password" placeholder="Confirm Password" />}
        {isRegistered ? <button type="submit">Login</button> : <button type="submit">Register</button>}
      </form>
    </div>
  );
}

export default Form;
