import React, { useState } from 'react'

export default function Todoinput(props) {
    const {handleAddTodos , todoValue , settodovalue} = props
    // const [todoValue, settodovalue] = useState('')
    
  return (
    <>
    <h1 className='title'>TODOLIST</h1>
    <header>
        
      <input value={todoValue} onChange={(e)=>{
        settodovalue(e.target.value)
      }}placeholder="enter task.." />
      <button onClick={()=>{
        handleAddTodos(todoValue)
        settodovalue('')
      }}>ADD</button>
    </header></>
  )
}
