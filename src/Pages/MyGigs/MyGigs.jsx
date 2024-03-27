import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../MyGigs/MyGigs.scss"
import axios from 'axios'
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const MyGigs = () => {
  const [gigs, setGigs] = useState([])
  useEffect(() => {


    axios
      .get("http://localhost:3001/gigs")
      .then((response) => {
        setGigs(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [])
  return (
    <>
      <div className='w-[100%] h-auto grid justify-items-center items-center'>
        <div className='w-[70%]'>
          <div className='flex justify-between mt-4'>
            <h1>Gigs</h1>
            <Link to="/add">
              <button className=' bg-green-500 h-8 w-28 p-1 rounded'>Add New Gig</button>
            </Link>
          </div>
          <div className="mt-6">

            <table className=' border w-[100%]'>
              <thead className=''>
                <th className='p-1'>Image</th>
                <th className='p-1'>Tittle</th>
                <th className='p-1'>Price</th>
                <th className='p-1'>Sales</th>
                <th className='p-1'>Action</th>
              </thead>
              {
                gigs.map((gig) => {
                  return (
                    <>
                      <tr className=' bg-sky-100 h-10  text-center  '>
                        <td><img src={gig.images} className=' w-[50px] h-[25px] object-cover' alt="" /></td>
                        <td>{gig.title}</td>
                        <td>{gig.price}</td>
                        <td>{gig.rNumber}</td>
                        <td>
                          <div className="flex justify-center gap-x-4">
                            <Link to={`/gigs/gigDetail/${gig._id}`}>
                              <BsInfoCircle className=" text-2xl text-green-800" />
                            </Link>
                            <Link to={`/gigs/editGig/${gig._id}`}>
                              <AiOutlineEdit className=" text-2xl text-yellow-600" />
                            </Link>

                            <Link to={`/gigs/deleteGig/${gig._id}`}>
                              <MdOutlineDelete className=" text-2xl text-red-600" />
                            </Link>
                          </div>
                        </td>

                      </tr>
                    </>
                  )
                })
              }



            </table>


          </div>

        </div>
      </div>
    </>
  )
}

export default MyGigs