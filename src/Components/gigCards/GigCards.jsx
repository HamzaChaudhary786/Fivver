import React from 'react'
import { gigs } from '../../data'
import { Link } from 'react-router-dom';
const GigCards = () => {
    return (
        <>
            <div className=' grid justify-items-center items-center mt-4'>
                <div className=' grid grid-cols-4 w-[96%] gap-8 justify-items-center items-center'>
                    {
                        gigs.map((item) => {
                            const { id, img, pp, desc, username, price, star, } = item;
                            return (
                                <>
                                    <Link to="/sgig/:id">
                                        <section className=' h-96 w-80 rounded-t-xl border'>
                                            <img src={img} className=' h-48 w-80 object-cover rounded-xl' />
                                            <div className='p-3 w-80'>
                                                <div className=' flex justify-start w-[100%] '>
                                                    <div className=' flex  items-center mt-2 w-[50%]'>
                                                        <img src={pp} className=' h-8 w-8 rounded-full object-cover' />
                                                        <span className=' text-sm ml-2'>
                                                            {username}
                                                        </span>
                                                    </div>
                                                    <div className='flex items-center w-[50%] justify-end'>
                                                        <div className=' bg-indigo-950 text-white w-fit px-1 text-sm'> FIVERR'S CHOICE</div>
                                                    </div>

                                                </div>
                                                <p className=' w-[90%] mt-2'>{desc}</p>
                                                <div className=' mt-2 align-top items-center'>

                                                    <span className='text-sm text-orange-400'><ion-icon name="star"></ion-icon></span>
                                                    <span className='ml-2'>{star}<span className='opacity-70 text-gray-800'> (90)</span></span>

                                                </div>
                                                <strong>
                                                    From PKR {price}
                                                </strong>
                                            </div>

                                        </section>
                                    </Link>
                                </>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default GigCards