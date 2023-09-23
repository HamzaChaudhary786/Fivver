import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {

    const [getdata, setGetData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/users", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json(); // Parse the response JSON
            })
            .then((data) => {
                // Assuming `data` is an array or an object you want to store in your component state
                setGetData(data);
            })
            .catch((err) => {
                alert('Failed: ' + err.message);
            });

    }, []);


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
                        <span>
                            {
                                getdata.map((pdt) => {
                                    return (
                                        <>
                                            <div key={pdt.id}>{pdt.name}</div>
                                        </>
                                    )

                                })}
                        </span>

                    </div>
                    <div className="links">
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


                            <div className=" w-full  pl-3 pr-3 p-1 flex justify-between ease-in-out duration-500 transition-all text-gray-700 overflow-x-scroll md:overflow-x-hidden   ">




                                <div className='group w-auto '>
                                    <Link to="/" className='group ' >Grahics & Design</Link>


                                    <div className='absolute w-28 border-4 border-l-0 border-r-0 border-b-0   hover:border-t-blue-600 hidden group-hover:block     hover:block'>


                                        <div className=' flex-wrap overflow-y-scroll w-screen  h-[1200px]  flex  gap-x-10 p-5 md:w-[1000px] md:h-[800px]  bg-gray-200 text-black mt-1 '>
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
                                <div className=' group w-auto'>
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