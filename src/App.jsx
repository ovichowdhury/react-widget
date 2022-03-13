import React, { useState } from "react";
import era from "./static/era.svg";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
      <div>
        <img src={era} alt="image" width={100} height={100}></img>
      </div>
    </>
  );
}
