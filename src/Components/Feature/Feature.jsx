import React from 'react'
import "./Feature.scss"
import land from "../../Assets/land.png"
import logo from "../../Assets/logo.png"

const Feature = () => {
    return (
        <div className='feature grid w-[100%] justify-items-center'>
            <div className="container w-[100%]">
                <div className="left ">

                    <h1>Find the right <i>freelance</i> service, right away</h1>
                    <div className="search">
                        <div className="searchinput">
                            <img src={logo} />
                            <input type="text" className='border-none hover:border-none' placeholder=' try building mobile app ' />
                        </div>
                        <button className='btn'>Search </button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>Wordpress</button>
                        <button>Logo Design</button>
                        <button>Services</button>

                    </div>

                </div>
                <div className="right">
                    <img src={land} className='' />

                </div>
            </div>

        </div>
    )
}

export default Feature