import React, { useState, useEffect } from "react";

// function component

function App8() {
  const [count, setCount] = useState(0);

  // The effect happens after render
  useEffect(() => {
    console.log("useEffect called!");
  });

  return (
    <div>
      <p>App 8</p>
      <p> You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
export default App8;
