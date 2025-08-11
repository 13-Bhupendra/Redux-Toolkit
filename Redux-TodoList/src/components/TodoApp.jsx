import React, { useState } from 'react'  
import {useSelector , useDispatch} from 'react-redux'
import {addTodo , remove , update} from '../Feature/todoSlice'

const TodoApp = () => {
  const [title,settitle] = useState("")
  const [date,setdate] = useState("")
  const [edit , setedit] = useState(null)

  const todo = useSelector((state)=>state.todo.todo)
  const dispatch = useDispatch();
 
  const handleSubmit = ()=>{
      if(edit !== null){
        dispatch(update({index : edit , title ,date}))
        setedit(null)
      }else{
          dispatch(addTodo({title : title , date: date }))
      }
      settitle("")
      setdate("")
  }
  
  return (
    <div>
        <h1>Todo List</h1>
        <input value={title} type="text" placeholder='Enter task : '  onChange={(e)=>settitle(e.target.value)}/>  &nbsp;
        <input value={date} type='date' placeholder='Enter Date :'  onChange={(e)=>setdate(e.target.value)}/>&nbsp;&nbsp;
       <button disabled={title=="" || date==""} onClick={()=>handleSubmit()}>{edit ==null ? "Add task" : "Update task"}</button> 
 
      <div className="container">
            <h2>Tasks</h2>
              

        {todo.length > 0 ? todo.map((el,index)=>(
          <div key={index}>
         
            <section>
                  <h3>{el.title}</h3>
                  <p>{el.date}</p>
                  <div>
                  <button style={{border:"2px solid red"}} onClick={()=>dispatch(remove())}>❌</button>
                  <button style={{border:"2px solid green" , marginLeft:"6px"}} onClick={()=>{
                    setdate(el.date)
                    settitle(el.title)
                    setedit(index)
                  }}>✏️</button>
                  </div>
              </section>
          
            </div>
        )) : "Data not found !"}
        </div>

    </div>
  )
}

export default TodoApp
