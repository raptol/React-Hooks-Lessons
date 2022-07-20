import React, { useState } from "react";

// function component

function App2() {
  const [count, setCount] = useState(0); //0 is initial state

  return (
    <div>
      <p>App 2</p>
      <p> You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
export default App2;
