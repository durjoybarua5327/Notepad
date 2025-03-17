import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [count, setCount] = useState(0)

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit=(e, id)=>{
    let t =todos.filter(item=>item.id === id)
    setTodo(t[0].todo)
    let newtodos = todos.filter(item=>{
      return item.id!=id
    })
    setTodos(newtodos)
  }
  const handleDelete=(e, id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this todo?");
    if (confirmDelete) {
    let newtodos = todos.filter(item=>{
      return item.id!=id
    })
    setTodos(newtodos)
  }
}
  const handleAdd=()=>{
    if (todo.trim() === "") return;
    setTodos([...todos ,{id : uuidv4(), todo, isCompleted:false}])
    setTodo("")
  }
  const handlechange=(e)=>{
    setTodo(e.target.value)
  }

  const handlecheckbox=(e)=>{
    let id = e.target.name
    console.log(id)
    let index = todos.findIndex(item=>{
      return item.id==id
    })
    console.log(index)
    let newtodos = [...todos]
    newtodos[index].isCompleted = ! newtodos[index].isCompleted
    setTodos([...newtodos,]) 
  }
  return (
    <>
    <Navbar/>
      <div className="container py-5 px-10 mx-auto text-black my-5 bg-[#9594a9] w-[80vw] min-h-[70vh] rounded-xl">
        <div className="addtodo">
          <h2 className='text-lg font-bold'>Add a todo</h2>
          <input onChange={handlechange} value={todo} className='w-220 min-h-[2vh] rounded-md bg-[#ffffff] my-5'  type="text" />
          <button onClick={handleAdd} className='bg-violet-800 py-1 px-4 rounded-md mx-4 cursor-pointer text-sm font-bold hover:bg-violet-900'>Save</button>
        </div>

        <h2 className='text-lg font-bold'>Your Notes</h2>
        <div className="todos">
          {todos.length==0 && <div>No notes available</div> }
          {todos.map(item=>{

          return <div key={item.id}  className="todo flex my-4  items-center">
            <div className='flex w-[65vw] items-center'>
            <input name={item.id} onChange={handlecheckbox} value={item.isCompleted} className='mx-2' type="checkbox" />
            <div className={`${item.isCompleted ? "line-through" : ""} w-[63vw] bg-[#6e7890] p-3 rounded-xl`}>
              {item.todo}
            </div>
            </div>

            <div className="buttons flex">
              <button name={item.id} onClick={(e)=>{ handleEdit(e, item.id)}} className='bg-violet-800 h-8 py-1 px-4 rounded-md mx-2 cursor-pointer text-sm font-bold hover:bg-violet-900'>edit</button>
              <button name={item.id} onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 h-8 py-1 px-4 rounded-md mx-2 cursor-pointer text-sm font-bold hover:bg-violet-900'>delete</button>
            </div>
          </div>
          })}
        </div>
        </div>
    </>
  )
}

export default App
