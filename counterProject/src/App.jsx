import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My First React Project</h1>
      <hr />
      <h2>By | Akhilendra Pratap Singh Chandel | Counts only till 20</h2>
      <h1>Counter = {count}</h1>
      <button
        onClick={() => {
          if (count < 20) {
            setCount(() => count + 1);
            // setCount((count) => count + 1);
            // setCount((count) => count + 1);
            // setCount((count) => count + 1);
            // setCount((count) => count + 1);
          }
        }}
      >
        Value++
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          if (count > 0) {
            setCount((count) => count - 1);
          }
        }}
      >
        Value--
      </button>
    </>
  );
}

export default App;
