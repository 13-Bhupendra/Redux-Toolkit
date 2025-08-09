import { useState } from 'react'
import './App.css'
import RegisterFrom from './components/RegisterFrom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RegisterFrom />
    </>
  )
}

export default App
