import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-[100vh] bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-32 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-delay-2000"></div>
      <div className="absolute bottom-32 left-32 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-delay-[4000ms]"></div>

      <div className="relative space-y-8 text-center max-w-2xl">
        <h1 className="h-[20vh] text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-down">
          Welcome to myTask!
        </h1>

        <Link to="/tasks">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-purple-200 active:scale-95">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

function Tasks() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    if (todostring) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleEdit = (e, id) => {
    if (todo.length > 0) {
      alert("Save first then you can edit");
      return;
    }
    let newtodos = todos.filter((item) => {
      return item.id != id;
    });
    const currenttodo = todos.find((item) => item.id === id);
    setTodo(currenttodo.todo);
    setTodos(newtodos);
  };
  const handleDelete = (e, id) => {
    if (todo.length > 0) {
      alert("Save first then you can delete");
      return;
    }
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirmDelete) {
      let newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);

      if (newTodos.length === 0) {
        localStorage.removeItem("todos");
      }
    }
  };
  const handleAdd = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };
  const handlechange = (e) => {
    setTodo(e.target.value);
  };

  const handlecheckbox = (e) => {
    let id = e.target.name;
    console.log(id);
    let index = todos.findIndex((item) => {
      return item.id == id;
    });
    console.log(index);
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    setTodos([...newtodos]);
  };
  return (
    <>
      <div className="container py-8 px-6 mx-auto my-5 bg-indigo-50 w-[80vw] min-h-[70vh] rounded-2xl shadow-xl">
        <div className="addtodo mb-10">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">
            Add a Todo
          </h2>
          <div className="flex gap-4">
            <input
              onChange={handlechange}
              value={todo}
              className="w-full px-6 py-3 rounded-lg bg-white border-2 border-indigo-100 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 placeholder:text-indigo-300"
              type="text"
              placeholder="What needs to be done?"
            />
            <button
              onClick={handleAdd}
              className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-indigo-200"
            >
              Add Task
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-indigo-900 mb-6">Your Notes</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="text-center py-8 text-indigo-400 text-lg">
              ✨ No tasks found. Add your first todo!
            </div>
          )}
          {todos.map((item) => (
            <div
              key={item.id}
              className="todo group flex my-3 items-center bg-white p-4 rounded-xl transition-all duration-200 hover:shadow-md border border-indigo-50 hover:border-indigo-100"
            >
              <div className="flex w-[65vw] items-center">
                <input
                  name={item.id}
                  onChange={handlecheckbox}
                  checked={item.isCompleted}
                  className="mx-2 w-5 h-5 text-indigo-600 border-2 border-indigo-300 rounded-md focus:ring-indigo-500 cursor-pointer"
                  type="checkbox"
                />
                <div
                  className={`${
                    item.isCompleted
                      ? "line-through text-gray-400"
                      : "text-indigo-800"
                  } w-[63vw] p-3 ml-2 text-lg font-medium transition-all duration-200`}
                >
                  {item.todo}
                </div>
              </div>
              <div className="buttons flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  name={item.id}
                  onClick={(e) => handleEdit(e, item.id)}
                  className="bg-emerald-100 text-emerald-700 py-2 px-2 rounded-lg font-semibold hover:bg-emerald-200 transition-colors duration-200 flex items-center gap-2"
                >
                  ✏️ Edit
                </button>
                <button
                  name={item.id}
                  onClick={(e) => handleDelete(e, item.id)}
                  className="bg-rose-100 text-rose-700  px-2 py-2 rounded-lg font-semibold hover:bg-rose-200 transition-colors duration-200 flex items-center gap-2"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}
export default App;
