import React, { useState } from 'react'  
import {useSelector , useDispatch} from 'react-redux'
import {addTodo , remove , update} from '../Feature/todoSlice'

const TodoApp = () => {
  const [title,settitle] = useState("")
  const [date,setdate] = useState("")
  const todo = useSelector((state)=>state.todo.todo)
  const dispatch = useDispatch();
 

  return (
    <div>
        <h1>Todo List</h1>
        <input type="text" placeholder='Enter task : '  onChange={(e)=>settitle(e.target.value)}/>  &nbsp;
        <input type='date' placeholder='Enter Date :'  onChange={(e)=>setdate(e.target.value)}/>&nbsp;&nbsp;
       <button disabled={title=="" || date==""} onClick={()=>dispatch(addTodo({title : title , date:"(" + date + ")"}))}>Add task</button> 
 
      <div className="container">
            <h2>Tasks</h2>
              

        {todo.map((el,index)=>(
          <div key={index}>
         
            <section>
                  <h3>{el.title}</h3>
                  <p>{el.date}</p>
                  <div>
                  <button style={{border:"2px solid red"}} onClick={()=>dispatch(remove())}>❌</button>
                  <button style={{border:"2px solid green" , marginLeft:"6px"}} onClick={()=>dispatch(update({index : index , title :"updated value" , date:"20/50/50"}))}>✏️</button>
                  </div>
              </section>
          
            </div>
        ))}
        </div>

    </div>
  )
}

export default TodoApp
