import React, { useState } from 'react'
import down from "../../assets/down.png"
import GigCards from '../../Components/gigCards/GigCards'
const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setOpen(false);
    setSort(type)
  }

  return (
    <>
      <div className=' p-14'>
        <div>
          <div className=' text-lg '>
            <span><ion-icon name="home"></ion-icon></span>
            <span> Fiverr
              /Graphics & Design
            </span>
          </div>
          <h1 className=' text-3xl font-bold italic mt-2'>
            AI Artists
          </h1>
          <div className='icons mt-2'>
            <span className=' text-lg opacity-70 text-gray-800'>
              Explore the boundaries of art and technology with Fiverr's AI artists  <span className=' opacity-60 text-gray-800'>  || </span>

            </span>
            <span className=' bg-slate-400 bg-opacity-50 rounded-2xl p-1'>
              <span className='h-8 w-auto align-middle '><ion-icon name="play-circle"></ion-icon></span>
              <span>How Fiverr Works</span>
            </span>
          </div>

          <div className=' flex justify-between items-center  mt-6'>
            <div className=' '>
              <span>Budget  </span>
              <input type='text' className='w-36 h-8 border outline-none' placeholder='min' />
              <input type='text' className='w-36 h-8 border outline-none ' placeholder='max' />
              <button className=' bg-green-500  text-center w-24 h-8 rounded text-white'>Apply</button>
            </div>
            <div className='  w-60 relative align-middle '>
              <div className='flex  '>
                <span className='w-16'>Sort By </span>
                <span className='w-fit mr-2 font-bold'>{sort === "sales" ? "Sort By" : "Best Selling"}</span>
                <img src={down} className='h-4 w-4 mt-2 text-xl font-bold' onClick={() => setOpen(!open)} />
              </div>
              {
                open &&

                <div className='  absolute  bg-slate-500 mt-2 h-24 w-32 p-2 text-white cursor-pointer  '>
                  <div className='hover:text-indigo-600 ' onClick={() => reSort("createdAt")}>Newest </div>
                  <div className='hover:text-indigo-600 ' onClick={() => reSort("sales")}>Best Selling</div>
                </div>
              }

            </div>
          </div>

        </div>
      </div>
      <GigCards />


    </>
  )
}

export default Gigs