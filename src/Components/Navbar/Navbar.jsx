import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const { pathname } = useLocation();
    const currentUser = {
        id: 1,
        username: "john Doe",
        isSeller: true
    }
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(true);
    const [opened, setOpened] = useState(true);


    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)
        return () => {

            window.removeEventListener("scroll", isActive)

        }

    })
    return (
        <>
            <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
                <div className="container w-full flex justify-between p-4">
                    <div className=" text-3xl font-bold  invisible w-0 md:w-auto sm:visible " >
                        <Link to="/" className='link'>
                            <span className='text'>
                                Fiverr
                            </span>
                        </Link>
                        <span className='dot'>
                            .

                        </span>
                    </div>
                    <div className="links">
                        <Link to="/bussiness">Fiverr Bussiness</Link>
                        <span>Explore</span>
                        <span>English</span>
                        <span>Sign In</span>

                        {!currentUser?.isSeller && <span>Become a Seller</span>}
                        {!currentUser && <button className='btn'>Join</button>}
                        {
                            currentUser && (
                                <>
                                    <div className='user pr-2' onClick={() => setOpen(!open)}>
                                        <img src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-65479.jpg" />
                                        <span> {currentUser?.username}</span>
                                        {
                                            !open &&
                                            <div className="option">
                                                {
                                                    currentUser?.isSeller && (
                                                        <>
                                                            <Link to="/gigs">Gigs</Link>
                                                            <Link to="/mygigs">MyGigs</Link>
                                                            <Link to="/add">Add New Gigs</Link>

                                                        </>
                                                    )
                                                }
                                                <Link to="/order">Order</Link>
                                                <Link to="/message">Messages</Link>
                                                <Link>Logout</Link>

                                            </div>
                                        }

                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
                {
                    (active || pathname !== "/") && (
                        <>
                            <hr className='w-[100%]' />


                            <div className=" w-full  pl-3 pr-3 p-1 flex justify-between ease-in-out duration-500 transition-all text-gray-700 overflow-x-scroll md:overflow-x-hidden   ">




                                <div className='group w-auto '>
                                    <Link to="/" className='group' >Grahics & Design</Link>


                                    <div className='absolute hidden group-hover:block     hover:block'>
                                        <div className='  mt-3 flex gap-x-8  bg-white text-black'>
                                            <Link to="/">Grahics & Design</Link>
                                            <Link to="/">Grahics & Design</Link>
                                            <Link to="/">Grahics & Design</Link>
                                            <Link to="/">Grahics & Design</Link>

                                        </div>
                                    </div>



                                </div>
                                <div className=' group w-auto'>
                                    <Link to="/" className=' group'>Video & Animation</Link>

                                    <div className='absolute group-hover:block hover:block hidden   h-auto w-auto'>
                                        <div className=' flex gap-x-9 p-10 bg-white text-black mt-3'>
                                            <div>
                                                <h1 className=' font-bold'>
                                                    Logo & Brand Identity
                                                </h1>

                                                <Link>Logo Design</Link>
                                                <Link>Brand Style Guides</Link>
                                                <Link>Business Cards & Stationery</Link>
                                                <Link>Fonts & Typography</Link>
                                                <Link>Business Cards & Stationery</Link>
                                                <Link>Portraits & Caricatures</Link>

                                                <h1 className=' font-bold'>Art & Illustration</h1>

                                                <Link>Logo Design</Link>
                                                <Link>Brand Style Guides</Link>
                                                <Link>Business Cards & Stationery</Link>
                                                <Link>Portraits & Caricatures</Link>
                                                <Link>Logo Design</Link>
                                                <Link>Brand Style Guides</Link>

                                            </div>
                                            <div>
                                                <h1 className=' font-bold'>
                                                    Logo & Brand Identity
                                                </h1>

                                                <Link>Logo Design</Link>
                                                <Link>Brand Style Guides</Link>
                                                <Link>Business Cards & Stationery</Link>
                                                <Link>Fonts & Typography</Link>
                                                <Link>Business Cards & Stationery</Link>
                                                <Link>Portraits & Caricatures</Link>

                                                <h1 className=' font-bold'>Art & Illustration</h1>

                                                <Link>Logo Design</Link>
                                                <Link>Brand Style Guides</Link>
                                                <Link>Business Cards & Stationery</Link>
                                                <Link>Portraits & Caricatures</Link>
                                                <Link>Logo Design</Link>
                                                <Link>Brand Style Guides</Link>

                                            </div>
                                            <div>
                                                <h1 className=' font-bold'>
                                                    Logo & Brand Identity
                                                </h1>

                                                <Link>Logo Design</Link>
                                                <Link>Brand Style Guides</Link>
                                                <Link>Business Cards & Stationery</Link>
                                                <Link>Fonts & Typography</Link>
                                                <Link>Business Cards & Stationery</Link>
                                                <Link>Portraits & Caricatures</Link>

                                                <h1 className=' font-bold'>Art & Illustration</h1>

                                                <Link>Logo Design</Link>
                                                <Link>Brand Style Guides</Link>
                                                <Link>Business Cards & Stationery</Link>
                                                <Link>Portraits & Caricatures</Link>
                                                <Link>Logo Design</Link>
                                                <Link>Brand Style Guides</Link>

                                            </div>
                                            <div>
                                                <h1 className=' font-bold'>
                                                    Logo & Brand Identity
                                                </h1>

                                                <Link>Logo Design</Link>
                                                <Link>Brand Style Guides</Link>
                                                <Link>Business Cards & Stationery</Link>
                                                <Link>Fonts & Typography</Link>
                                                <Link>Business Cards & Stationery</Link>
                                                <Link>Portraits & Caricatures</Link>

                                                <h1 className=' font-bold'>Art & Illustration</h1>

                                                <Link>Logo Design</Link>
                                                <Link>Brand Style Guides</Link>
                                                <Link>Business Cards & Stationery</Link>
                                                <Link>Portraits & Caricatures</Link>
                                                <Link>Logo Design</Link>
                                                <Link>Brand Style Guides</Link>

                                            </div>

                                        </div>
                                    </div>



                                </div>
                                <div><Link to="/" className=''>Ai Services</Link></div>
                                <div><Link to="/" className='' >Writting & Translation</Link></div>
                                <div><Link to="/" className=''>Digital Marketing</Link></div>
                                <div>
                                    <Link to="/" className=''>Music & Audio</Link>
                                </div>
                                <div>                                <Link to="/" className=''>Programming & Tech</Link>
                                </div>
                                <div> <Link to="/" className=''>Bussiness</Link></div>

                            </div>

                        </>
                    )
                }

                <hr className='w-screen' />

            </div>
        </>
    )
}

export default Navbar