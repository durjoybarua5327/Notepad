import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-[#302983]  w-100vw] sticky top-0 z-10 text-white py-4'>
      <div className='logo'>
        <span className='font-bold text-3xl mx-8'>myTask</span>
      </div>
      <ul className='flex gap-10 mx-9'>
        <li >
        <NavLink to="/" className={({ isActive }) =>
              `cursor-pointer transition-all ${
                isActive ? "font-bold text-yellow-300" : "hover:font-bold"
              }`
            } >Home</NavLink>
        </li>
        <li >
        <NavLink to="/tasks" className={({ isActive }) =>
              `cursor-pointer transition-all ${
                isActive ? "font-bold text-yellow-300" : "hover:font-bold"
              }`
            }>Your tasks</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
