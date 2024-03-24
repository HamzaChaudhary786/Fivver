import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {

    const [getdata, setGetData] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:8000/users", {
    //         method: "GET",
    //         headers: { 'Content-Type': 'application/json' },
    //     })
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return res.json(); // Parse the response JSON
    //         })
    //         .then((data) => {
    //             // Assuming `data` is an array or an object you want to store in your component state
    //             setGetData(data);
    //         })
    //         .catch((err) => {
    //             alert('Failed: ' + err.message);
    //         });

    // }, []);


    const { pathname } = useLocation();
    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true
    }
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(true);
    const [explore, setExplore] = useState(true);

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
            <div className={active || pathname !== "/" ? "navbar active w-full" : "navbar"}>
                <div className=" flex justify-between p-4 w-full">
                    <div className=' items-center hidden md:block  flex'>
                        <Link to="/" className=' text-3xl font-bold '>
                            <span className=''>
                                Fiverr
                            </span>
                        </Link>
                        <span className='text-3xl'>
                            .
                        </span>
                    </div>


                    <div className="links flex gap-x-3 items-center justify-around w-full">
                        <Link to="/bussiness">Fiverr Bussiness</Link>
                        <span onClick={() => setExplore(!explore)}>Explore</span>
                        {!explore &&

                            <div className=' absolute bg-slate-400 w-96 h-96 top-16'>
                                <div className=' flex gap-10'>
                                    <div>
                                        <div>
                                            <h1>
                                                Discover
                                            </h1>
                                            <span>Inspiring projects made on Fiverr</span>
                                        </div>
                                        <div>
                                            <h1>
                                                Guides
                                            </h1>
                                            <span>In-depth guides covering business topics</span>
                                        </div>
                                        <div>
                                            <h1>
                                                Learn
                                            </h1>
                                            <span>Professional online courses, led by experts</span>
                                        </div>
                                        <div>
                                            <h1>
                                                Logo Maker
                                            </h1>
                                            <span>Create your logo instantly</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h1>
                                                Discover
                                            </h1>
                                            <span>Inspiring projects made on Fiverr</span>
                                        </div>
                                        <div>
                                            <h1>
                                                Guides
                                            </h1>
                                            <span>In-depth guides covering business topics</span>
                                        </div>
                                        <div>
                                            <h1>
                                                Learn
                                            </h1>
                                            <span>Professional online courses, led by experts</span>
                                        </div>
                                        <div>
                                            <h1>
                                                Logo Maker
                                            </h1>
                                            <span>Create your logo instantly</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        }
                        <span>English</span>

                        {!currentUser?.isSeller && <span>Become a Seller</span>}
                        {!currentUser && <button className='btn'>Join</button>}
                        {
                            currentUser && (
                                <>
                                    <div className='user pr-1 flex gap-x-1 items-center relative' onClick={() => setOpen(!open)}>
                                        <img src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-65479.jpg" className=' h-7 w-7 rounded-full' />
                                        <span> {currentUser?.username}</span>
                                        {
                                            !open &&
                                            <div className="option absolute p-6 bg-white text-black flex flex-col w-36  top-9">
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
                                                <Link to="/logout">Logout</Link>

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


                            <div className="w-full  flex flex-row whitespace-nowrap px-4 gap-x-4 overflow-x-auto   ">




                                <div className='group'>
                                    <Link to="/" className='group ' >Grahics & Design</Link>


                                    <div className='absolute w-28 border-4 border-l-0 border-r-0 border-b-0   hover:border-t-blue-600 hidden group-hover:block hover:block'>


                                        <div className=' w-screen  gap-x-10 p-8  flex flex-col duration-500  overflow-y-auto   lg:flex-row   bg-gray-200 text-black mt-1 '>
                                            <div className=''>
                                                <h1 className=' font-bold'>
                                                    Logo & Brand Identity
                                                </h1>

                                                <div className='mt-4 h-auto cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Fonts & Typography</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                </div>
                                                <Link className=' hover:text-blue-600'>Logo Design</Link><br />

                                                <h1 className=' font-bold mt-4'>Art & Illustration</h1>

                                                <div className='mt-4 cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                </div>

                                            </div>
                                            <div>
                                                <h1 className=' font-bold'>
                                                    Logo & Brand Identity
                                                </h1>

                                                <div className=' mt-4 cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Fonts & Typography</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />

                                                </div>

                                                <h1 className=' font-bold mt-4'>Art & Illustration</h1>

                                                <div className='mt-4 cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                </div>

                                            </div>
                                            <div>
                                                <h1 className=' font-bold'>
                                                    Logo & Brand Identity
                                                </h1>

                                                <div className=' mt-4 cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Fonts & Typography</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                </div>

                                                <h1 className=' font-bold mt-4'>Art & Illustration</h1>

                                                <div className='mt-4 cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                </div>

                                            </div>

                                            <div>
                                                <h1 className=' font-bold '>
                                                    Logo & Brand Identity
                                                </h1>

                                                <div className=' mt-4 cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link>
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Fonts & Typography</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                    <Link className=' hover:text-blue-600'>Fonts & Typography</Link><br />
                                                </div>

                                                <h1 className=' font-bold mt-4'>Art & Illustration</h1>
                                                <div className=' mt-4 cursor-pointer'>

                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                </div>

                                            </div>

                                        </div>
                                    </div>



                                </div>
                                <div className=' group'>
                                    <Link to="/" className=' group'>Video & Animation</Link>

                                    <div className='absolute  group-hover:block hover:block hidden   w-32 border-4 border-b-0 border-r-0 border-l-0 hover:border-t-blue-600 h-auto '>

                                        <div className=' flex gap-x-10 p-5 w-[1000px] h-[800px]  bg-gray-200 text-black mt-1 '>
                                            <div className=''>
                                                <h1 className=' font-bold'>
                                                    Logo & Brand Identity
                                                </h1>

                                                <div className='mt-4 h-auto cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Fonts & Typography</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                </div>
                                                <Link className=' hover:text-blue-600'>Logo Design</Link><br />

                                                <h1 className=' font-bold mt-4'>Art & Illustration</h1>

                                                <div className='mt-4 cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                </div>

                                            </div>
                                            <div>
                                                <h1 className=' font-bold'>
                                                    Logo & Brand Identity
                                                </h1>

                                                <div className=' mt-4 cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Fonts & Typography</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />

                                                </div>

                                                <h1 className=' font-bold mt-4'>Art & Illustration</h1>

                                                <div className='mt-4 cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                </div>

                                            </div>
                                            <div>
                                                <h1 className=' font-bold'>
                                                    Logo & Brand Identity
                                                </h1>

                                                <div className=' mt-4 cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Fonts & Typography</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                </div>

                                                <h1 className=' font-bold mt-4'>Art & Illustration</h1>

                                                <div className='mt-4 cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                </div>

                                            </div>

                                            <div>
                                                <h1 className=' font-bold '>
                                                    Logo & Brand Identity
                                                </h1>

                                                <div className=' mt-4 cursor-pointer'>
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link>
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Fonts & Typography</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                    <Link className=' hover:text-blue-600'>Fonts & Typography</Link><br />
                                                </div>

                                                <h1 className=' font-bold mt-4'>Art & Illustration</h1>
                                                <div className=' mt-4 cursor-pointer'>

                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                    <Link className=' hover:text-blue-600'>Business Cards & Stationery</Link><br />
                                                    <Link className=' hover:text-blue-600'>Portraits & Caricatures</Link><br />
                                                    <Link className=' hover:text-blue-600'>Logo Design</Link><br />
                                                    <Link className=' hover:text-blue-600'>Brand Style Guides</Link><br />
                                                </div>

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