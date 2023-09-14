import { useState } from "react"
import React from 'react'

const Login = () => {


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <div className=' w-[100%] grid justify-items-center items-center h-screen' >
        <div className=' p-6  bg-slate-300'>
          <form className=' grid w-[40%] h-[450px]  rounded-lg' action="">

            <div className=' bg-slate-500 h-22 w-full text-center flex items-center justify-center'>
              <h1 className=' font-bold text-3xl  text-white '>Login</h1>
            </div>

            <div className='  text-lg justify-center mt-2  rounded-lg'>
              <div className=''>
                <label htmlFor="">UserName
                </label><br />
                <input type="text" className=' w-60 h-12' value="" />
              </div>
              <div className=''>
                <label htmlFor="">Password
                </label><br />
                <input type="password" className=' w-60 h-12' value="" />
              </div>


            </div>
            <div className=' text-center '>
              <input type="submit" className=' h-14 w-32 bg-indigo-500 rounded-lg' />
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default Login