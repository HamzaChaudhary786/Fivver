import React from 'react'
import { Link } from 'react-router-dom'
import "../SMessage/SMessage.scss"
const SMessage = () => {
  return (
    <>
      <div className='message flex justify-center w-[100%]'>

        <div className='container w-[70%] m-16 text-lg font-medium '>
          <span><Link to="/message">Messages</Link>{">"}John Doe{">"}</span>
          <div className='messages m-8 flex flex-col p-8 gap-10 h-[500px] overflow-scroll overflow-x-hidden '>
            <div className="item flex gap-3">
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-8 w-8 rounded-full object-cover'
                alt="" />
              <p className=' w-[50%] bg-slate-400 h-auto p-2 rounded-tl-none rounded-lg '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi odit impedit. </p>
            </div>
            <div className="item owner flex gap-3 self-end">
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-8 w-8 rounded-full object-cover'
                alt="" />
              <p className=' w-[50%] bg-indigo-700 h-auto p-2 rounded-tl-none rounded-lg '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi odit impedit. </p>
            </div>
            <div className="item flex gap-3">
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-8 w-8 rounded-full object-cover'
                alt="" />
              <p className=' w-[50%] bg-slate-400 h-auto p-2 rounded-tl-none rounded-lg '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi odit impedit. </p>
            </div>
            <div className="item owner flex gap-3 self-end">
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-8 w-8 rounded-full object-cover'
                alt="" />
              <p className=' w-[50%] bg-indigo-700 h-auto p-2 rounded-tl-none rounded-lg '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi odit impedit. </p>
            </div>
            <div className="item flex gap-3">
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-8 w-8 rounded-full object-cover'
                alt="" />
              <p className=' w-[50%] bg-slate-400 h-auto p-2 rounded-tl-none rounded-lg '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi odit impedit. </p>
            </div>
            <div className="item owner  flex gap-3 self-end">
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-8 w-8 rounded-full object-cover'
                alt="" />
              <p className=' w-[50%] bg-indigo-700 h-auto p-2 rounded-tl-none rounded-lg '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi odit impedit. </p>
            </div>

          </div>

          <hr className=' w-[100%] border' />

          <div className='write flex justify-between items-center '>
            <textarea className='w-[80%] h-[100px] p-4 border' name="" id="" cols="30" rows="10" placeholder='Write & Message'></textarea>
            <button className=' bg-green-400 h-10 w-28 rounded'>Send</button>
          </div>




        </div>
      </div>
    </>
  )
}

export default SMessage