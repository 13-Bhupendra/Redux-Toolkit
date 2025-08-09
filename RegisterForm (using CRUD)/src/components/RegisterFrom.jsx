import React from 'react'

const RegisterFrom = () => {
  return (
    <div>
        <h1 className='fw-bold'>Registration Form</h1>
        <div className='container'>
            <form action="">
            <input type="text" placeholder='Enter Full name :'/> <br />
            <input type="Email" placeholder='Enter Email :'/><br />
            <input type="number" placeholder='Enter Mobile Number :' /><br />
            <input type="password" placeholder='Enter Password :' /> <br />
            <input type="submit" />
            </form>
        </div>
    </div>
  )
}

export default RegisterFrom