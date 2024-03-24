// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {


//   const [username, usernameupdate] = useState('')
//   const [password, passwordupdate] = useState('')

//   const navigate = useNavigate()

//   useEffect(() => {
//     sessionStorage.clear();
//   }, []);


//   const proceedLogin = (e) => {
//     e.preventDefault();



//     if (validate()) {
//       fetch("http://localhost:3000/users/" + username).then((res) => {
//         return res.json();
//       }).then((resp) => {
//         if (Object.keys(resp).length === 0) {
//           alert("Please Enter Valid UserName")

//         }
//         else {
//           if (resp.password === password) {
//             alert("sucessfully login")
//             sessionStorage.setItem('username', username)
//             navigate('/')

//           }
//           else {
//             alert("Please Enter Valid Password")

//           }
//         }

//       }).catch((err) => {
//         alert('Login Failed due to :' + err.message);
//       });
//     }

//   }

//   const validate = () => {
//     let result = true;
//     if (username === '' || username === null) {
//       result = false;
//       alert('Please Enter Username');
//     }
//     if (password === '' || password === null) {
//       result = false;
//       alert('Please Enter Password');
//     }
//     return result;
//   }

//   return (
//     <>
//       <div className=' w-[100%] grid justify-items-center items-center h-screen' >
//         <div className=' p-6  bg-slate-300'>
//           <form className=' grid w-[40%] h-[450px]  rounded-lg' action="" onSubmit={proceedLogin}>

//             <div className=' bg-slate-500 h-22 w-full text-center flex items-center justify-center'>
//               <h1 className=' font-bold text-3xl  text-white '>Login</h1>
//             </div>

//             <div className='  text-lg justify-center mt-2  rounded-lg'>
//               <div className=''>
//                 <label htmlFor="">UserName
//                 </label><br />
//                 <input type="text" className=' w-60 h-12' value={username} onChange={e => usernameupdate(e.target.value)} />
//               </div>
//               <div className=''>
//                 <label htmlFor="">Password
//                 </label><br />
//                 <input type="password" className=' w-60 h-12' value={password} onChange={e => passwordupdate(e.target.value)} />
//               </div>


//             </div>
//             <div className=' text-center '>
//               <input type="submit" className=' h-14 w-32 bg-indigo-500 rounded-lg' />
//             </div>
//           </form>
//         </div>

//       </div>
//     </>
//   )
// }

// export default Login


import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login