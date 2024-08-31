import React from 'react'

export default function TodoCards(props) {
  const {children ,handleDeleteTodo ,index , handleeditTodo} = props
  return (
   
      <li className='todoItem' >

          {children}
           <div className='actiosContainer'>
            <button onClick={()=>handleeditTodo(index)} >

            <i class="fa-solid fa-pen"></i>
            </button>
            <button onClick={()=>handleDeleteTodo(index)
            }
            >

            <i class="fa-solid fa-circle-minus"></i>

            </button>

           </div>
            </li>
    
  )
}
