import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((count) => count + 1);
  }

  return (
    <div style={{ backgroundColor: "black", color: "cyan" }}>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

export default App;
