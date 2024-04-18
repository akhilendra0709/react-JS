import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault;
    if (!todo) return;
    addTodo({ todo, checked: false });
    setTodo("");
    console.log("done");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-purple-600 text-white shrink-0 hover:font-semibold hover:px-5 transition-all ease-in"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
