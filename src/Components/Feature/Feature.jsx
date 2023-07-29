import React from 'react'
import "./Feature.scss"
import land from "../../Assets/land.png"
import logo from "../../Assets/logo.png"

const Feature = () => {
    return (
        <div className='feature grid w-[100%] h-auto justify-items-center p-4 '>
            <div className="container w-[100%] h-auto">
                <div className="left grid  ">

                    <h1>Find the right <i>freelance</i> service, right away</h1>
                    <div className=''>
                        <div className="search flex  bg-white w-[80%] md:w-auto rounded-lg">
                            <div className="flex items-center w-[100%] ">
                                <img src={logo} className='w-[25px] text-lg h-[20px] m-2 ' />
                                <input type="text" className=' h-[40px] w-80 md:w-[100%] outline-none text-black' placeholder=' try building mobile app ' />
                            </div>
                            <button className='btn'>Search </button>
                        </div>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>Wordpress</button>
                        <button>Logo Design</button>
                        <button>Services</button>

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