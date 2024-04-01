import React from 'react'
import Feature from '../../Components/Feature/Feature'
import TrustedBy from '../../Components/TrustedBy/TrustedBy'
import Slide from '../../Components/Slide/Slide'
import "../Home/Home.scss"
import video from "../../assets/video.mp4"
import Box from '../../Components/Box/Box'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import GigCards from '../../Components/gigCards/GigCards'
import tick from "../../assets/tick.png"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Test from '../../Components/Test/Text'
const Home = () => {
  const navigate = useNavigate();

  // useEffect(() => {

  //   let username = sessionStorage.getItem('username');
  //   if (username === "" || username === null) {
  //     navigate('/login')

  //   }

  // }, [])
  return (
    <>
      <div >
        <Feature />
        <TrustedBy />
        <Slide />
        <div className=' grid w-[100%] justify-items-center items-center'>
          <div className="container w-[70%] mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-12 items-center p-4 ">
            <div className="left  grid justify-items-start">
              <h1 className=' text-xl font-bold h-20 w-[80%]'>A Whole world of freelance talent at your finger tips</h1>
              <div className=' items-center  p-1 text-opacity-70'>
                <div className='flex items-center'>
                  <img src={tick} className='h-4 w-4 text-lg font-bold mt-1' alt="" />
                  <span className='ml-2 align-top font-semibold mt-1'>The best for every budget </span>
                </div>
                <p>We provide the high quality of services</p>
              </div>
              <div className=' items-center mt-2 p-1 text-opacity-70'>
                <div className='flex items-center'>
                  <img src={tick} className='h-4 w-4 text-lg font-bold mt-1' alt="" />
                  <span className='ml-2 align-top font-semibold mt-1'>The best for every budget </span>
                </div>
                <p>We provide the high quality of services</p>

              </div><div className=' items-center mt-2 p-1 text-opacity-70'>
                <div className='flex items-center'>
                  <img src={tick} className='h-4 w-4 text-lg font-bold mt-1' alt="" />
                  <span className='ml-2 align-top font-semibold mt-1'>The best for every budget </span>
                </div>
                <p>We provide the high quality of services</p>
              </div>

            </div>
            <div className="right grid justify-items-start ">

              <video src={video} className='h-56' controls />

            </div>
          </div>
        </div>

        <div className='main grid w-[100%] justify-items-center items-center p-10'>
          <div className="container w-[98%] mt-8 grid grid-cols-1 md:grid-cols-3  items-center text-white ">
            <div className="left  grid justify-items-start">
              <h1 className=' font-extrabold  text-2xl'>fiverr bussiness.</h1>
              <h1 className=' text-xl font-bold  w-[80%] mt-6'>A solution built for business
              </h1>
              <h1 className=' mt-6 text-xl w-[100%]'>Upgrade to a curated experience to access vetted talent and exclusive tools</h1>

              <div className=' items-center  p-1  mt-4'>
                <div className='flex items-center'>
                  <img src={tick} className='h-4 w-4 text-lg font-bold mt-1' alt="" />
                  <span className='ml-2 align-top font-semibold text-lg mt-1'>Talent Matching</span>
                </div>
              </div>

              <div className=' items-center  p-1 '>
                <div className='flex items-center'>
                  <img src={tick} className='h-4 w-4 text-lg font-bold mt-1' alt="" />
                  <span className='ml-2 align-top font-semibold text-lg mt-1'>Team Collaboration Roles</span>
                </div>
              </div>

              <div className=' items-center  p-1 '>
                <div className='flex items-center'>
                  <img src={tick} className='h-4 w-4 text-lg font-bold mt-1' alt="" />
                  <span className='ml-2 align-top font-semibold text-lg mt-1'>The Best For every Budget</span>
                </div>
              </div>
              <div className=' items-center  p-1'>
                <div className='flex items-center'>
                  <img src={tick} className='h-4 w-4 text-lg font-bold mt-1' alt="" />
                  <span className='ml-2 align-top font-semibold text-lg mt-1'>Bussiness Payement Solution</span>
                </div>
              </div>


              <button className=' bg-emerald-500 p-2 h-10 w-60 rounded mt-8'>Explore Fiverr Bussiness</button>

            </div>
            <div className="right grid md:col-span-2 justify-items-center items-center">

              <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png' className=" h-[500px] object-fill mt-4 lg:mt-0  md:object-cover " />

            </div>
          </div>
        </div>
        <Test />


        <Box />
        <ProjectCard />
        <div className=' w-[100%] grid justify-items-center '>
          <div className='bgimg w-[98%] p-10 md:p-20'>
            <h1 className=' text-5xl font-bold text-white italic'>Suddenly it's all so doable.
            </h1>
            <button className=' bg-green-500 p-1 h-10 w-36 text-lg font-bold text-white rounded mt-8'>Join</button>
          </div>

        </div>

        <GigCards />
      </div>

    </>
  )
}

export default Home