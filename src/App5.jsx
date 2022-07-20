import React, { useState } from "react";

// update baded on previous state
function App5() {
  const [score, setScore] = useState(0);
  const [message] = useState("Welcome!");

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h2>{score}</h2>
        <button onClick={() => setScore((prevScore) => prevScore + 1)}>
          Increase score
        </button>
      </header>
    </div>
  );
}
export default App5;
