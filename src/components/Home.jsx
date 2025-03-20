import React from 'react'
 import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className="h-[90vh] bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute top-20 left-20 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-40 right-32 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-delay-2000"></div>
              <div className="absolute bottom-32 left-32 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-delay-[4000ms]"></div>
        
              <div className="relative space-y-8 text-center max-w-2xl">
                <h1 className="h-[20vh] text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-down">
                  Welcome to iNote!
                </h1>
                <Link to="/tasks" >
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-purple-200 active:scale-95">
                    Get Started
                  </button>
                </Link>
                
              </div>
            </div>
      )
}


export default Home
