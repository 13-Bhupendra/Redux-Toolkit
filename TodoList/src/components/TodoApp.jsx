import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { todotask  } from '../feature/todoSlice'

const TodoApp = () => {
    const dispatch = useDispatch()
    const todo = useSelector((state)=> state.todotask.value)
  return (
    <div>
        
    </div>
  )
}

export default TodoApp
