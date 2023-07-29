import React from 'react'
import { projects } from '../../data';
const ProjectCard = () => {

    const SlideLeft = () => {
        let sliderLeft = document.getElementById('slidep');
        sliderLeft.scrollLeft = sliderLeft.scrollLeft - 300;

    }

    const SlideRight = () => {
        let sliderRight = document.getElementById('slidep');
        sliderRight.scrollLeft = sliderRight.scrollLeft + 300;

    }


    return (
        <>
            <div className='bg-neutral-100 w-[100%] py-14 px-6'>
                <div className='grid justify-items-center mt-4 '>
                    <span className=' w-[94%]'>
                        <h1 className=' text-4xl font-semibold w-[90%] lg:w-[80%] text-opacity-80 text-gray-900'>Inspiring work made on Fiverr</h1>
                    </span>
                </div>

                <div className='flex items-center  justify-center mt-4 '>
                    <div className='grid items-center justify-items-center text-4xl text-opacity-50 hover:text-opacity-100 text-black cursor-pointer  '><ion-icon name="caret-back-outline" onClick={SlideLeft}></ion-icon></div>

                    <div className='flex items-center gap-6  w-[94%] h-full  overflow-x-scroll  transition-all ease-in-out duration-1000  scroll-smooth overflow-y-hidden ' id='slidep'>
                        {
                            projects.map((item) => {

                                const { id, username, img, pp, cat } = item;
                                return (
                                    <>
                                        <a href="#" target="_blank h-[100%] w-auto ">
                                            <div className=' h-72 w-72 rounded-xl  items-center duration-700 cursor-pointer  hover:scale-105 mt-4 scroll-smooth ease-in-out transition-all  shadow shadow-gray-400 border  '>

                                                <div>
                                                    <img src={img} className=" h-48 w-72 rounded-t-xl object-cover " />
                                                </div>
                                                <div className=' flex items-center p-2'>

                                                    <div className='h-12 w-12 rounded-full mt-2'>
                                                        <img src={pp} className='rounded-full object-cover h-10 w-10' />
                                                    </div>

                                                    <div className=''>
                                                        <h1 className='font-semibold'>{username}</h1>
                                                        <p className='text-opacity-60 text-center text-sm'>{cat}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </a>

                                    </>
                                )

                            })

                        }
                    </div>
                    <div className='grid items-center justify-items-center text-4xl text-opacity-50 hover:text-opacity-100 text-black cursor-pointer'><ion-icon name="caret-forward-outline" onClick={SlideRight}></ion-icon></div>
                </div>
            </div>



        </>
    )
}

export default ProjectCard