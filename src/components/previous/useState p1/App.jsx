import React, { useState } from "react";

function App() {

  let time = new Date().toLocaleTimeString();

  const [currentTime, checkTime] = useState(time, check);

  function check() {
    checkTime(time = new Date().toLocaleTimeString())
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={check}>Get Time</button>
    </div>
  );
}

export default App;
