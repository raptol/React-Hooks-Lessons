import React, { useState, useEffect } from "react";

// function component

function App10() {
  const [count, setCount] = useState(0);
  const [message] = useState("Welcome!");
  // using state in useEffect
  useEffect(() => {
    document.title = `${message}. Your score is ${count}`;
  });

  return (
    <div>
      <p>App 10</p>
      <p> You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
export default App10;
