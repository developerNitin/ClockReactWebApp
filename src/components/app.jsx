import React, { useState } from "react";

function App() {
  
  let live = new Date().toLocaleTimeString();
  const [time, setTime] = useState(live);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    everySec();
  }

  function everySec() {
    setInterval(updateTime, 1000);
  }
  
  return (
    <div className="container">
      <h1>{ time }</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
