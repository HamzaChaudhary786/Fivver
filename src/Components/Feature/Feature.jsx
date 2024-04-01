import React from 'react'
import "./Feature.scss"
import land from "../../assets/land.png"
import logo from "../../assets/logo.png"

const Feature = () => {
    return (
        <div className='feature grid  justify-items-center lg:w-screen lg:h-screen px-8 bg-gray-900 border-2 border-white'>
            <div className=" flex flex-col lg:flex-row items-center">
                <div className=" grid gap-y-5 w-80 lg:w-[60%]">

                    <h1 className='text-4xl animated-text lg:text-6xl  font-bold     bg-clip-text text-transparent inline-block bg-gradient-to-br from-yellow-500 via-rose-600 to-pink-500 stroke-red-600 stroke-2 '><span className='-pt-3'>Find the </span><i className='bg-clip-text text-transparent inline-block bg-gradient-to-br from-yellow-500 via-rose-600 to-pink-500 pb-3'>right service,</i>right away</h1>
                    <div className=" flex  bg-transparent justify-between gap-x-2 ring-2 ring-red-600  rounded-lg w-80 ">
                        <div className=" flex  gap-x-2 items-center w-full outline-none  ">
                            <img src={logo} className=' h-5 w-8 ' />
                            <input type="text" className='outline-none w-full bg-transparent' placeholder=' try building mobile app ' />
                        </div>
                        <button className='btn bg-clip-text text-transparent inline-block bg-gradient-to-br from-yellow-500 via-rose-600 to-pink-500 p-2 text-lg font-bold'>Search </button>
                    </div>
                    <div className="popular flex flex-wrap gap-2 mt-2 items-center w-screen">
                        <span className='font-bold p-3 text-lg    bg-clip-text text-transparent inline-block bg-gradient-to-br  from-yellow-500 via-rose-600 to-pink-500 stroke-red-600 stroke-2 '>Popular:</span>
                        <button className=' p-2  bg-clip-text text-transparent inline-block bg-gradient-to-br from-yellow-500 via-rose-600 to-pink-500 text-lg font-bold border-2 stroke-2 stroke-red-600 rounded-lg '>Wordpress</button>
                        <button className=' p-2  bg-clip-text text-transparent inline-block bg-gradient-to-br from-yellow-500 via-rose-600 to-pink-500 text-lg font-bold border-2 stroke-2 stroke-red-600 rounded-lg '>Logo Design</button>
                        <button className=' p-2  bg-clip-text text-transparent inline-block bg-gradient-to-br from-yellow-500 via-rose-600 to-pink-500 text-lg font-bold border-2 stroke-2 stroke-red-600 rounded-lg '>Services</button>
                        <button className=' p-2  bg-clip-text text-transparent inline-block bg-gradient-to-br from-yellow-500 via-rose-600 to-pink-500 text-lg font-bold border-2 stroke-2 stroke-red-600 rounded-lg '>Web Design</button>
                    </div>

                </div>
                <div className="right lg:w-[40%] ">
                    <img src={land} className='  h-screen' />

                </div>
            </div>

        </div>
    )
}

export default Feature