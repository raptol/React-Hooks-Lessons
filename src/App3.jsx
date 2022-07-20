import React, { useState } from "react";

function App3() {
  const [score, setScore] = useState(0);

  function decrease() {
    setScore(score - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{score}</h1>
        <button onClick={() => setScore(score + 1)}>Increase Score</button>
        {/* <button onClick={() => setScore(score - 1)}> */}
        <button onClick={decrease}>
          Decrease Score
          {/* // update the score state Increase score */}
        </button>
        <button onClick={() => setScore(0)}>Reset Score</button>
      </header>
    </div>
  );
}

export default App3;
