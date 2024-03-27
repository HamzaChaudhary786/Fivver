import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import stars from "../../assets/star.png"
import axios from 'axios';
const GigCards = () => {

    const [gigs, setGigs] = useState([])
    useEffect(() => {


        axios
            .get("http://localhost:3001/gigs")
            .then((response) => {
                setGigs(response.data.data);
            })
            .catch((err) => console.log(err));
    }, [])

    console.log("Data is funny", gigs)


    return (
        <>
            <div className=' grid justify-items-center items-center mt-6  w-[100%]'>
                <div className=' grid  grid-cols-1  md:grid-cols-2   xl:grid-cols-3  gap-4 px-4 w-[90%]  '>
                    {
                        gigs.map((gig, index) => {

                            return (
                                <>
                                    <Link key={index} to={`/sgig/${gig._id}`}>
                                        <section className=' w-[100%] ring-2 ring-cyan-300 h-[100%]'>

                                            <div className='w-[100%] h-80 '>
                                                <img src={gig.images} className='object-cover w-[100%] p-1 h-80' alt="" />
                                            </div>

                                            <div className='p-3 grid gap-y-3'>
                                                <div className='flex justify-between items-center '>
                                                    <div className='flex gap-x-2 items-center'>
                                                        <div className='h-10 w-10  '>
                                                            <img src={gig.poster} className='object-cover rounded-full h-10 w-10 ' alt="" />
                                                        </div>
                                                        <div>
                                                            <h1>{gig.title}</h1>
                                                            <h3>{gig.sTitle}</h3>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3 className='text-white bg-blue-900 p-1 text-xs'>Fivver Choice</h3>
                                                    </div>
                                                </div>
                                                <p>{gig.description}</p>
                                                <h1 className='text-lg font-bold text-right text-red-500'>${gig.price}</h1>
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