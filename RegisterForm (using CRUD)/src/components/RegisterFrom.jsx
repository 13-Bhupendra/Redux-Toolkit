import React, { useState } from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import { addUserData ,  remove , edit } from '../feature/formSlice'

const RegisterFrom = () => {
const [name , setname] = useState("")
const [email , setemail] = useState("")
const [number , setnumber] = useState("")
const [password , setpassword] = useState("")

  const userData = useSelector((state)=>state.userData.userData)

  const dispatch = useDispatch()

  const handleDispatch = (e)=>{
    e.preventDefault()
    dispatch(addUserData({name : name , email:email , number : number , password:password}))    
  }

  return (
    <div>
        <h1 className='fw-bold text-center'>Registration Form</h1>
      
<div className='container d-flex mt-5' >
            <form action="" className=' text-center'  onSubmit={handleDispatch}>
            <input className='mt-3' type="text" placeholder='Enter Full name :' onChange={(el)=>setname(el.target.value)} required/> <br />
            <input className='mt-3' type="Email" placeholder='Enter Email :' onChange={(el)=>setemail(el.target.value)} required/><br />
            <input className='mt-3' type="tel" placeholder='Enter Mobile Number :'  onChange={(el)=>setnumber(el.target.value)} maxLength={10} required /><br />
            <input className='mt-3' type="password" placeholder='Enter Password :'  onChange={(el)=>setpassword(el.target.value)} required/> <br />
            <input className='mt-5 mb-3 btn btn-primary' type="submit"/>
            </form>

 <div className='dataContainer ms-5 '>
        {userData.length  > 0 ?  (userData.map((el,index)=>(
          
                <section key={index}>
                <h5 className='text-primary'>User  : {index+1}</h5>
                <span><strong>Name :</strong> {el.name}</span> <br />
                <span><strong>Email : </strong>{el.email}</span><br />
                <span><strong>Mobile Number : </strong>{el.number}</span><br />
                <span><strong>Password : </strong>{el.password}</span><br />
                <button className='me-3 btn btn-outline-danger' onClick={()=>dispatch(remove())}>❌</button>
                <button  className=" btn btn-outline-success" onClick={()=>dispatch(edit({index : index , name : "pratik" , email : "pratik@gmail.com" , number:"7484788542" , password:"createIt" }))}>✏️</button>
                </section>

        )) ):( <h2 className='text-center text-danger'>data not find !</h2>)}
        </div>
        </div>

    </div>
  )
}

export default RegisterFrom