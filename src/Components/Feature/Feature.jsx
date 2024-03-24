import React from 'react'
import "./Feature.scss"
import land from "../../Assets/land.png"
import logo from "../../Assets/logo.png"

const Feature = () => {
    return (
        <div className='feature grid  justify-items-center p-4 bg-green-700'>
            <div className=" flex flex-col lg:flex-row items-center">
                <div className=" grid gap-y-5">

                    <h1 className='text-4xl lg:text-5xl  font-bold p-2'>Find the right <i className='text-red-500'>freelance</i> service, right away</h1>
                    <div className=" flex  bg-white justify-between gap-x-2 rounded-lg w-full lg:w-96">
                        <div className=" flex  gap-x-2 items-center w-full  ">
                            <img src={logo} className='h-5 w-8 ' />
                            <input type="text" className='outline-none w-full' placeholder=' try building mobile app ' />
                        </div>
                        <button className='btn p-2'>Search </button>
                    </div>
                    <div className="popular flex flex-wrap gap-2 mt-2 items-center">
                        <span>Popular:</span>
                        <button className=' p-1 border rounded-lg '>Web Design</button>
                        <button className=' p-1 border rounded-lg '>Wordpress</button>
                        <button className=' p-1 border rounded-lg '>Logo Design</button>
                        <button className=' p-1 border rounded-lg '>Services</button>
                    </div>

                </div>
                <div className="right ">
                    <img src={land} className='' />

                </div>
            </div>

        </div>
    )
}

export default Feature