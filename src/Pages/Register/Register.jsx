// import React from 'react'
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'

// const Register = () => {


//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [country, setCountry] = useState("india");
//   const [address, setAddress] = useState("");
//   const [gender, setGender] = useState("female");


//   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   const navigate = useNavigate();

//   const IsValidate = () => {
//     let IsProceed = true;

//     let errormessage = 'Please enter the value in ';

//     if (id === null || id === '') {
//       IsProceed = false;
//       errormessage += ' Username';
//     }
//     if (name === null || name === '') {
//       IsProceed = false;
//       errormessage += ' Fullname';
//     }
//     if (password === null || password === '') {
//       IsProceed = false;
//       errormessage += ' Password';
//     }
//     if (email === null || email === '') {
//       IsProceed = false;
//       errormessage += ' Email';
//     }

//     if (!IsProceed) {
//       alert(errormessage)
//     }
//     else {
//       if (emailPattern.test(email)) {

//       } else {
//         IsProceed = false;
//         alert('Please enter the valid email')
//       }
//     }

//     return IsProceed;
//   }

//   const handlesubmit = (e) => {

//     e.preventDefault();

//     const regobj = { email, name, password, id, phone, country, address, gender }

//     if (IsValidate()) {

//       fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify(regobj)
//       }).then((res) => {
//         alert('Registered successfully.');
//         navigate('/login')

//       }).catch((err) => {
//         alert('Failed :' + err.message);
//       });

//     }
//   }





//   return (
//     <>

//       <div className=' w-[100%] grid justify-items-center items-center h-screen' >
//         <div className=' p-6  bg-slate-300'>
//           <form className=' grid w-[40%] h-[550px]  rounded-lg' action="" onSubmit={handlesubmit}>
//             <div className=' bg-slate-500 h-22 w-full text-center flex items-center justify-center'>
//               <h1 className=' font-bold text-3xl  text-white '>Registration Form</h1>
//             </div>
//             <div className=' flex text-lg gap-10 justify-center mt-4  rounded-lg'>
//               <div className=''>
//                 <div className=''>
//                   <label htmlFor="">User Name
//                   </label><br />
//                   <input type="text" className=' w-60 h-12' value={id} onChange={e => setId(e.target.value)} />
//                 </div>
//                 <div>
//                   <label htmlFor="">Full Name
//                   </label><br />
//                   <input type="text" className=' w-60 h-12' value={name} onChange={e => setName(e.target.value)} />
//                 </div>
//                 <div>
//                   <label htmlFor="">Phone
//                   </label><br />
//                   <input type="number" className=' w-60 h-12' value={phone} onChange={e => setPhone(e.target.value)} />
//                 </div>
//                 <div>
//                   <label>Gender</label>
//                   <br></br>
//                   <input type="radio" checked={gender === 'male'} onChange={e => setGender(e.target.value)} name="gender" value="male" className="app-check m-2" ></input>
//                   <label>Male</label>
//                   <input type="radio" checked={gender === 'female'} onChange={e => setGender(e.target.value)} name="gender" value="female" className="app-check m-2" ></input>
//                   <label>Female</label>
//                 </div>
//               </div>
//               <div className=''>
//                 <div className=''>
//                   <label htmlFor="">Pasword
//                   </label><br />
//                   <input type="password" className=' w-60 h-12' value={password} onChange={e => setPassword(e.target.value)} />
//                 </div>
//                 <div>
//                   <label htmlFor="">Email
//                   </label><br />
//                   <input type="email" className=' w-60 h-12' value={email} onChange={e => setEmail(e.target.value)} />
//                 </div>
//                 <div>
//                   <label htmlFor="">Country
//                   </label><br />
//                   <select name="Country" id="" className=' w-60 h-12' value={country} onChange={e => countrychange(e.target.value)}>

//                     <option value="">pakistan</option>
//                     <option value="">Turkey</option>

//                   </select>
//                 </div>
//                 <div>
//                   <label htmlFor="">Address
//                   </label><br />
//                   <textarea name="" id="" cols="30" rows="10" className=' w-60 h-24' value={address} onChange={e => setAddress(e.target.value)}></textarea>                            </div>


//               </div>
//             </div>
//             <div className=' text-center mt-6'>
//               <input type="submit" className=' h-14 w-32 bg-indigo-500 rounded-lg' />                    </div>
//           </form>
//         </div>

//       </div>
//     </>
//   )
// }

// export default Register



import React from 'react'

const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register