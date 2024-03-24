import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const DeleteGig = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const handleDelete = () => {
        axios.delete(`http://localhost:3001/gigs/${id}`)
            .then(res => {
                console.log('book deleted', res)
                navigate("/mygigs")

            })
            .catch(err => {
                console.error('could not delete book', err)
            });
    }

    return (
        <>
            <div className=' grid items-center justify-items-center  py-6'>

                <div className='border border-red-500 grid items-center justify-items-center  rounded-md p-4 w-[550px] h-72'>
                    <h1>Are you sure you to delete this <span className='text-red-500 text-xl'>{id}</span></h1>
                    <button className=' bg-red-600 text-white p-2  ' onClick={handleDelete}>Delte Gig</button>
                </div>
            </div>
        </>
    )
}

export default DeleteGig