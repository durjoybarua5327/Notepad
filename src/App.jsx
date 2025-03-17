import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className="container  mx-auto  text-[#3a37c0] w-50 h-100">
        <div className='bg-red-400'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, beatae?</p>
        </div>
        </div>
    </>
  )
}

export default App
