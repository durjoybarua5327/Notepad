import React from 'react'
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Tasks = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);
    useEffect(() => {
      const handleEscape = (e) => {
        if (e.key === "Escape") setSelectedTodo(null);
      };
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }, []);
  
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
              Add Your Notes
            </h2>
            <div className="flex gap-4">
              <textarea
                onChange={handlechange}
                value={todo}
                className="w-full px-6 py-3 rounded-lg bg-white border-2 border-indigo-100 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all duration-200 placeholder:text-indigo-300 resize-none overflow-auto"
                placeholder="What needs to be done?"
                rows="1"
                style={{
                  minHeight: "3rem",
                  maxHeight: "12rem",
                  overflowY: "auto",
                }}
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = `${Math.min(
                    e.target.scrollHeight,
                    192
                  )}px`;
                }}
              />
  
              <button
                onClick={handleAdd}
                className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-indigo-200"
              >
                Add Note
              </button>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">Your Notes</h2>
          <div className="todos">
            {todos.length === 0 && (
              <div className="text-center py-8 text-indigo-400 text-lg">
                ✨ No tasks found. Add your first task!
              </div>
            )}
            {todos.map((item) => (
              <div
                key={item.id}
                className="todo group flex my-3 items-center bg-white p-4 rounded-xl transition-all duration-200 hover:shadow-md border border-indigo-50 hover:border-indigo-100 cursor-pointer"
                onClick={() => setSelectedTodo(item)}
              >
                <div className="flex w-[65vw] items-center">
                  <input
                    name={item.id}
                    onChange={handlecheckbox}
                    checked={item.isCompleted}
                    onClick={(e) => e.stopPropagation()}
                    className="mx-2 w-5 h-5 text-indigo-600 border-2 border-indigo-300 rounded-md focus:ring-indigo-500 cursor-pointer"
                    type="checkbox"
                  />
                  <div
                    className={`${item.isCompleted
                      ? "line-through text-gray-400"
                      : "text-indigo-800"
                      } w-[63vw] p-3 ml-2 text-lg font-medium transition-all duration-200`}
                  >
                    {item.todo}
                  </div>
                </div>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="buttons flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
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
        {selectedTodo && (
          <div
            className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center z-50"
            onClick={(e) => e.target === e.currentTarget && setSelectedTodo(null)}
          >
            <div className="bg-indigo-50 p-8 rounded-2xl max-w-2xl w-[90%] relative animate-scale-in max-h-[80vh] overflow-y-auto border border-indigo-200 shadow-lg shadow-indigo-100/50">
              <div className="flex justify-between items-center sticky top-0 bg-indigo-50 pt-2 pb-2 z-10">
                <h3 className="text-2xl font-bold text-indigo-800">Todo Details</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(selectedTodo.todo);
                      alert("Copied to clipboard!");
                    }}
                    className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition text-sm"
                  >
                    Copy Note
                  </button>
                  <button
                    onClick={() => setSelectedTodo(null)}
                    className="text-indigo-400 hover:text-indigo-600 transition-colors bg-indigo-50 rounded-full p-1"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="text-indigo-800 text-lg whitespace-pre-wrap break-words pb-4 pr-4">
                {selectedTodo.todo}
              </div>
            </div>
          </div>
        )}
  
  
      </>
    );
}


export default Tasks
