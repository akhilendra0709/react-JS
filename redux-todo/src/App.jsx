import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <h1 className="text-white text-5xl m-5 p-2 font-bold">Todo Using Redux</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
