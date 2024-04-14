import { useRef } from "react";
import { useEffect } from "react";
import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  // const [slider, setSlider] = useState();
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789";
    if (char) str += "~!@#$%^&*()_";
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, num, char, setPassword]);
  //useRef hook needs to be made a variable
  const passwordRef = useRef(null);

  useEffect(() => {
    passwordGenerator();
  }, [length, num, char, passwordGenerator]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="w-full max-w-6xl mx-auto shadow-md rounded-xl p-8 my-40 font-semibold text-orange-400 bg-slate-700">
        <h1 className="text-white text-center text-4xl p-2">
          Random Password Generator
        </h1>
        <div className="flex shadow rounded-md overflow-hidden m-5 text-2xl">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-3 py-0.5"
            placeholder="password"
            readOnly
            ref={passwordRef}
          ></input>
          <button
            className="outline-none bg-blue-700 text-white p-3 shrink-0"
            onClick={() => {
              copyToClipboard();
            }}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-4 mx-5">
          <div className="flex items-center gap-x-3 text-xl">
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center gap-x-5 text-xl">
            <label>Length:{length}</label>
            <input
              type="checkbox"
              value={num}
              className="cursor-pointer"
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label>Numbers?</label>
          </div>
          <div className="flex items-center gap-x-3 text-xl">
            <input
              type="checkbox"
              value={char}
              className="cursor-pointer"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label>Special Characters?</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
