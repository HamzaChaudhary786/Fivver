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
                <div className="container ">
                    <div className="logo">
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
                        <span>Fiverr Bussiness</span>
                        <span>Explore</span>
                        <span>English</span>
                        <span>Sign In</span>
                        {!currentUser?.isSeller && <span>Become a Seller</span>}
                        {!currentUser && <button className='btn'>Join</button>}
                        {
                            currentUser && (
                                <>
                                    <div className='user' onClick={() => setOpen(!open)}>
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
                            <hr className='w-screen' />
                            <div className="menu   ease-in-out duration-700 ">
                                <Link to="/">Grahics & Design</Link>
                                <Link to="/">Video & Animation</Link>
                                <Link to="/">Writting & Translation</Link>
                                <Link to="/">Ai Services</Link>
                                <Link to="/">Digital Marketing</Link>
                                <Link to="/">Music & Audio</Link>
                                <Link to="/">Programming & Tech</Link>
                                <Link to="/">Bussiness</Link>

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