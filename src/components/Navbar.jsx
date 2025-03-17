import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-[#302983]  w-[100vw] text-white py-4'>
      <div className='logo'>
        <span className='font-bold text-3xl mx-8'>myTask</span>
      </div>
      <ul className='flex gap-10 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all ' >Home</li>
        <li className='cursor-pointer hover:font-bold transition-all '>Your tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
