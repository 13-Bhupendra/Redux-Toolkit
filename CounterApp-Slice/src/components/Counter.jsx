import {useDispatch , useSelector} from 'react-redux'
import { increment , decrement } from '../features/counterSlice'

const Counter = () => {
  
   const count = useSelector((state) => state.counter.value);
   console.log(count)
  const dispatch = useDispatch()
  
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(decrement())}>-1</button> 
        <button onClick={()=>dispatch(increment())}>+1</button>
    </div>
  )
}

export default Counter
