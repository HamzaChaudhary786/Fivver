import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const GigDetail = () => {

    const { id } = useParams()

    const [data, setData] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:3001/gigs/${id}`).then((res) => {

            setData(res.data)

            console.log(data)

        }).catch((err) => {
            console.log("error", err)
        })
    }, [])


    return (
        <>
            <div className='grid justify-items-center items-center'>
                <section className='border-2 shadow-slate-900 shadow-2xl border-grey-900  w-80 '>

                    <div className='p-2 w-80 object-cover'>
                        <img src={data.images} alt="" />
                    </div>
                    <div className='p-2'>
                        <div className=' flex justify-between'>
                            <div className='flex gap-x-2'>
                                <div className='h-10 w-10 rounded-full object-cover'>
                                    <img src={data.poster} className='rounded-full h-10 w-10 object-cover' alt="" />
                                </div>
                                <h1>
                                    {data.title}
                                </h1>
                            </div>
                            <div className='w-fit'>
                                <div className='p-1 bg-sky-900 text-white font-bold'>
                                    Fivver Choice
                                </div>
                            </div>
                        </div>
                        <p>{data.description}</p>
                        <h2>Price:{data.price}$</h2>
                    </div>

                </section>

            </div>
        </>
    )
}

export default GigDetail