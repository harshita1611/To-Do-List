"use client"
import React, { useState } from 'react'

const page = () => {

  const [title , settitle]=useState("")
  const [desc,setdesc]=useState("")
  const [task,settask]=useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()

    settask([...task, {title,desc}])
    settitle("")
    setdesc("")
    console.log(task)
  }

  const handleDelete=(idx)=>{
    let copyTodo=[...task]
    copyTodo.splice(idx,1)
    settask(copyTodo)
  }

  let renderTask = <h2> No Task Available</h2>
  if (task.length>0){
    renderTask= task.map((todo,idx)=>{
      return(
        <li key={idx} className='flex items-center justify-between mb-5 p-4 border-b-2 border-gray-200'>
          <div className='w-2/3'>
              <h3 className='font-bold text-xl mb-2'>{todo.title}</h3>
              <p className='font-medium text-gray-600'>{todo.desc}</p>
          </div>
          <button 
              onClick={()=>{
                  handleDelete(idx) 
              }}
              className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-sm font-bold transition-colors duration-200'>
              Delete
          </button>
        </li>
      )
    })
  }

  return (
    <>
       <h1 className='bg-black text-white p-5 text-2xl font-bold text-center'> To Do List </h1>
       <form onSubmit={handleSubmit}>
        <input  type='text' 
                className='text-2xl border-4 border-black m-8 px-4 py-2'
                placeholder='Enter Title here'
                value={title}
                onChange={(e)=>{
                  settitle(e.target.value)
                }}
        />
        <input  type='text' 
                className='text-2xl border-4 border-black m-8 px-4 py-2' 
                placeholder='Enter Description here'
                value={desc}
                onChange={(e)=>{
                  setdesc(e.target.value)
                }}
               />
        <button className='bg-black text-white px-4 py-2 text-2xl rounded-sm font-bold m-5'>Add Task</button>
       </form>
       <hr className='mx-5 ' />
       <div className=' mx-5 p-8 bg-green-100'>
         <ul>
          {renderTask}
         </ul>
       </div>
    </>
  )
}

export default page