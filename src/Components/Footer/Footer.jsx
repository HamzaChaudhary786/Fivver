import React from 'react'
import "../Footer/Footer.scss"
const Footer = () => {
    return (
        <>
            <hr className=' w-[100%] h-auto border mt-8'></hr>

            <div className=' w-[100%] h-[70%] '>
                <div className=' grid gap-6 p-8 w-[100%] h-[70%] grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>

                    <div>
                        <h1 className=' text-lg font-bold'>
                            Categories
                        </h1>
                        <div className='foot  mt-4'>
                            <span className=" mt-4">Graphics & Design</span><br/>
                            <span className=" mt-4">Digital Marketing</span><br/>
                            <span className=" mt-4">Writing & Translation</span><br/>
                            <span className=" mt-4">Video & Animation</span><br/>
                            <span className=" mt-4">Music & Audio</span><br/>
                        </div>


                    </div>
                    <div>
                        <h1 className=' text-lg font-bold'>
                            About
                        </h1>
                        <div className='foot mt-4'>
                            <span className=" mt-2">Careers</span><br/>
                            <span className=" mt-2">Press & News</span><br/>
                            <span className=" mt-2">Partnerships</span><br/>
                            <span className=" mt-2">Privacy Policy</span><br/>
                            <span className=" mt-2">Terms of Service</span><br/>
                        </div>

                    </div>
                    <div>
                        <h1 className=' text-lg font-bold'>
                            Support
                        </h1>
                        <div className='foot mt-4'>
                            <span className=" mt-2">Help & Support</span><br/>
                            <span className=" mt-2">Trust & Safety</span><br/>
                            <span className=" mt-2">Selling on Fiverr</span><br/>
                            <span className=" mt-2">Buying on Fiverr</span><br/>
                            <span className=" mt-2">Fiverr Guides</span><br/>
                        </div>

                    </div>
                    <div>
                        <h1 className=' text-lg font-bold'>
                            Community
                        </h1>
                        <div className='foot mt-4'>
                            <span className=" mt-4">Customer Success Stories</span><br/>
                            <span className=" mt-4">Community Hub</span><br/>
                            <span className=" mt-4">Forum</span><br/>
                            <span className=" mt-4">Events</span><br/>
                            <span className=" mt-4">Blog</span><br/>
                        </div>

                    </div>
                    <div>
                        <h1 className=' text-lg font-bold'>
                            More From Fiverr
                        </h1>
                        <div className='foot mt-4'>
                            <span className=" mt-2">Fiverr Enterprise</span><br/>
                            <span className=" mt-2">Fiverr Business</span><br/>
                            <span className=" mt-2">Forum</span><br/>
                            <span className=" mt-2">Community Hub</span><br/>
                            <span className=" mt-2">Customer Success Stories</span><br/>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Footer