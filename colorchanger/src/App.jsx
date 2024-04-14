import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#61dafb");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white rounded-xl px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className=" outline-none rounded-md shadow-md text-white px-5 py-2"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className=" outline-none rounded-md shadow-md text-white px-5 py-2"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className=" outline-none rounded-md shadow-md text-white px-5 py-2"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("teal")}
            className=" outline-none rounded-md shadow-md text-white px-5 py-2"
            style={{ backgroundColor: "teal" }}
          >
            Teal
          </button>
          <button
            onClick={() => setColor("magenta")}
            className=" outline-none rounded-md shadow-md text-black px-5 py-2"
            style={{ backgroundColor: "magenta" }}
          >
            Magenta
          </button>
          <button
            onClick={() => setColor("white")}
            className=" outline-none rounded-md shadow-md text-black px-5 py-2"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className=" outline-none rounded-md shadow-md text-white px-5 py-2"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
