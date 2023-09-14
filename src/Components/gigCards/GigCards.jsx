import React from 'react'
import { gigs } from '../../data'
import { Link } from 'react-router-dom';
import stars from "../../assets/star.png"
const GigCards = () => {


    return (
        <>
            <div className=' grid justify-items-center items-center mt-6  w-[100%]'>
                <div className=' grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[80%] md:w-[80%] '>
                    {
                        gigs.map((item) => {
                            const {  img, pp, desc, username, price, star, } = item;
                            return (
                                <>
                                    <Link to={`/sgig/${item.id}`}>
                                        <section className=' h-[100%] w-auto rounded-t-xl border'>
                                            <img src={img} className=' h-auto w-auto  object-cover rounded-xl' />
                                            <div className='p-4 w-auto '>
                                                <div className=' flex items-center justify-between w-[100%]  '>
                                                    <div className=' flex  items-center mt-2 w-auto'>
                                                        <img src={pp} className=' h-8 w-8 rounded-full object-cover' />
                                                        <span className=' text-sm ml-2'>
                                                            {username}
                                                        </span>
                                                    </div>
                                                    <div className=''>
                                                        <div className=' bg-indigo-950 text-white w-fit  text-sm'> FIVERR'S CHOICE</div>
                                                    </div>

                                                </div>
                                                <p className=' w-auto mt-2'>{desc}</p>
                                                <div className=' flex mt-2 align-top items-center'>

                                                    <span className='text-sm text-orange-400'>            <img className='h-4  w-4' src={stars} alt="" />
                                                    </span>

                                                    <span className='ml-2'>{star}<span className='text-opacity-70 text-gray-800'> (90)</span></span>

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