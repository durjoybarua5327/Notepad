import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-gradient-to-r from-indigo-800 to-blue-900 w-full sticky top-0 z-10 text-white py-4 px-6 shadow-xl border-b border-indigo-200/20'>
      <div className='logo flex items-center'>
        <span className='font-bold text-3xl ml-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 font-mono tracking-tighter'>
          iNote
        </span>
      </div>
      <ul className='flex gap-12 mr-8'>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => `
              relative px-4 py-2 text-lg transition-all duration-300
              ${isActive ? 
                "text-amber-400 font-semibold before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-amber-400 before:rounded-full" : 
                "hover:text-amber-200 hover:scale-105 text-gray-200"
              }`
            }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/tasks" 
            className={({ isActive }) => `
              relative px-4 py-2 text-lg transition-all duration-300
              ${isActive ? 
                "text-amber-400 font-semibold before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-amber-400 before:rounded-full" : 
                "hover:text-amber-200 hover:scale-105 text-gray-200"
              }`
            }>
            Your Notes
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar