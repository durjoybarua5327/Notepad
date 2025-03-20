import "./index.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/Tasks",
    element: (
      <>
        <Navbar />
        <Tasks />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
