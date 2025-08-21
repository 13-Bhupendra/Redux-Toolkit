import React, { useState } from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import { addUserData ,  remove , edit } from '../feature/formSlice'

const RegisterFrom = () => {
const [name , setname] = useState("")
const [email , setemail] = useState("")
const [number , setnumber] = useState("")
const [password , setpassword] = useState("")
const [editIndex , seteditIndex]  = useState(null)

  const userData = useSelector((state)=>state.userData.userData)

  const dispatch = useDispatch()

  const handleAddAndUpdateData = ()=>{

    if (editIndex !== null) {
      dispatch(edit({ index: editIndex, name, email, number, password }));
      seteditIndex(null);
      alert("Form Updated ✅");
    } else {
      dispatch(
        addUserData({
          name: name,
          email: email,
          number: number,
          password: password,
        })
      );
      alert("Registration Successful ✅");
    }
    setname("");
    setemail("");
    setnumber("");
    setpassword("");
        
  }

  return (
    <div>
        <h1 className='fw-bold text-center'>Registration Form</h1>
      
<div className='container  d-flex mt-5' >
            <div className=' text-center form'>
            <input className='mt-3' value={name} type="text" placeholder='Enter Full name :' onChange={(el)=>setname(el.target.value)} required/> <br />
            <input className='mt-3' value={email} type="email" placeholder='Enter Email :' onChange={(el)=>setemail(el.target.value)} required/><br />
            <input className='mt-3' value={number} type="tel" placeholder='Enter Mobile Number :'  onChange={(el)=>setnumber(el.target.value)} maxLength={10} required /><br />
            <input className='mt-3' value={password} type="password" placeholder='Enter Password :'  onChange={(el)=>setpassword(el.target.value)} required/> <br />
            <button disabled={!name || !email || !number || !password} className='mt-5 mb-3 btn btn-primary' onClick={()=>handleAddAndUpdateData()}>{editIndex !== null ? "Update" : "Submit" }</button>
            </div>

 <div className='dataContainer ms-5 '>
        {userData.length  > 0 ?  (userData.map((el,index)=>(
          
                <section key={index}>
                <h5 className='text-primary'>User  : {index+1}</h5>
                <span><strong>Name :</strong> {el.name}</span> <br />
                <span><strong>Email : </strong>{el.email}</span><br />
                <span><strong>Mobile Number : </strong>{el.number}</span><br />
                <span><strong>Password : </strong>{el.password}</span><br />
                <button className='me-3 btn btn-outline-danger' onClick={()=>dispatch(remove())}>❌</button>
                <button  className=" btn btn-outline-success" onClick={()=>{
                  seteditIndex(index)
                  setname(el.name)
                  setemail(el.email)
                  setnumber(el.number)
                  setpassword(el.password)
                }}>✏️</button>
                </section>

        )) ):( <h2 className='text-center text-danger'>Data not Found !</h2>)}
        </div>
        </div>

    </div>
  )
}

export default RegisterFrom