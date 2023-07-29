import React from "react"

const SignIn = () => {
    return (
        <>
            {

                !opened && <div className='  absolute  text-black h-[100%]    '>

                    <div className=' flex'>
                        <div className=' bggimg bg-slate-100  w-96 h-96 '>
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/layout-server/standard.c6d3ba7.png" className='h-96 w-96 object-cover' alt="" />
                        </div>

                        <form className='bg-slate-100  w-96 h-96 p-8 '>
                            <h1 className=' font-bold text-xl '>Continue  with your email</h1>
                            <div className=' mt-2'>
                                <label className=''>Email</label>
                                <div className='mt-2'>
                                    <input type="text" placeholder='type email...' />
                                </div>
                                <label>Password</label>
                                <div className='mt-2'>
                                    <input type="password" placeholder='type password...' />
                                </div>

                                <div className='mt-2'>
                                    <span>Forget Email</span>
                                </div>
                                <button className=' w-80 h-10 mt-8 text-center bg-green-500'>Sign In</button>

                            </div>
                        </form>
                    </div>

                </div>
            }
        </>
    )
}

export default SignIn