import React from 'react'
import Feature from '../../Components/Feature/Feature'
import TrustedBy from '../../Components/TrustedBy/TrustedBy'
import Slide from '../../Components/Slide/Slide'
import "../Home/Home.scss"
import video from "../../assets/video.mp4"
import Box from '../../Components/Box/Box'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import GigCards from '../../Components/gigCards/GigCards'

const Home = () => {
  return (
    <>
      <Feature />
      <TrustedBy />
      <Slide />
      <div className='mains grid w-[100%] justify-items-center items-center'>
        <div className="container w-[70%] mt-8 grid grid-cols-2 gap-x-12 items-center p-4 ">
          <div className="left  grid justify-items-start">
            <h1 className=' text-xl font-bold h-20 w-[80%]'>A Whole world of freelance talent at your finger tips</h1>
            <div className=' items-center  p-1 opacity-70'>
              <span className=' text-lg font-bold mt-1'><ion-icon name="checkmark-circle-outline"></ion-icon></span>
              <span className='ml-2 align-top font-semibold mt-1'>The best for every budget </span>
              <p>We provide the high quality of services</p>
            </div>
            <div className=' items-center mt-2 p-1 opacity-70'>
              <span className=' text-lg font-bold mt-1'><ion-icon name="checkmark-circle-outline"></ion-icon></span>
              <span className='ml-2 align-top font-semibold mt-1'>The best for every budget </span>
              <p>We provide the high quality of services</p>

            </div><div className=' items-center mt-2 p-1 opacity-70'>
              <span className=' text-lg font-bold mt-1'><ion-icon name="checkmark-circle-outline"></ion-icon></span>
              <span className='ml-2 align-top font-semibold mt-1'>The best for every budget </span>
              <p>We provide the high quality of services</p>
            </div>

          </div>
          <div className="right grid justify-items-start ">

            <video src={video} className='h-56' controls />

          </div>
        </div>
      </div>

      <div className='main grid w-[100%] justify-items-center items-center p-10'>
        <div className="container w-[98%] mt-8 grid grid-cols-3  items-center text-white ">
          <div className="left  grid justify-items-start">
            <h1 className=' font-extrabold  text-2xl'>fiverr bussiness.</h1>
            <h1 className=' text-xl font-bold  w-[80%] mt-6'>A solution built for business
            </h1>
            <h1 className=' mt-6 text-xl w-[100%]'>Upgrade to a curated experience to access vetted talent and exclusive tools</h1>

            <div className=' items-center  p-1  mt-4'>
              <span className=' text-2xl font-extrabold mt-1 opacity-70 '><ion-icon name="checkmark-circle-outline"></ion-icon></span>
              <span className='ml-2 align-top text-xl font-semibold '>Talent matching </span>
            </div>

            <div className=' items-center  p-1 '>
              <span className=' text-2xl font-extrabold mt-1 opacity-70 '><ion-icon name="checkmark-circle-outline"></ion-icon></span>
              <span className='ml-2 align-top text-lg font-semibold mt-1'>Team collaboration tools
              </span>
            </div>

            <div className=' items-center  p-1 '>
              <span className=' text-2xl font-extrabold  mt-1 opacity-70 '><ion-icon name="checkmark-circle-outline"></ion-icon></span>
              <span className='ml-2 align-top text-xl font-semibold mt-1'>The best for every budget </span>
            </div>
            <div className=' items-center  p-1'>
              <span className=' text-2xl font-extrabold mt-1 opacity-70 '><ion-icon name="checkmark-circle-outline"></ion-icon></span>
              <span className='ml-2 align-top text-xl font-semibold '>Business payment solutions
              </span>
            </div>


            <button className=' bg-emerald-500 p-2 h-10 w-60 rounded mt-8'>Explore Fiverr Bussiness</button>

          </div>
          <div className="right grid col-span-2 justify-items-center items-center">

            <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png' className=" h-[500px] object-cover " />

          </div>
        </div>
      </div>


      <Box />
      <ProjectCard />
      <div className=' w-[100%] grid justify-items-center '>
        <div className='bgimg w-[98%] p-20'>
          <h1 className=' text-5xl font-bold text-white italic'>Suddenly it's all so doable.
          </h1>
          <button className=' bg-green-500 p-1 h-10 w-36 text-lg font-bold text-white rounded mt-8'>Join</button>
        </div>

      </div>

      <GigCards />







    </>
  )
}

export default Home