import React from 'react'
import { cards } from '../../data';


const Slide = () => {


    const SlideLeft = () => {
        let sliderLeft = document.getElementById('slide');
        sliderLeft.scrollLeft = sliderLeft.scrollLeft - 300;

    }

    const SlideRight = () => {
        let sliderRight = document.getElementById('slide');
        sliderRight.scrollLeft = sliderRight.scrollLeft + 300;

    }

    return (
        <>
            <div className='flex items-center  justify-center  '>
                <div className='grid items-center justify-items-center text-4xl text-opacity-50 hover:text-opacity-100  cursor-pointer  '><ion-icon name="caret-back-outline" onClick={SlideLeft}></ion-icon></div>

                <div className='flex relative  items-center gap-6  w-[80%] h-full  overflow-x-scroll  transition-all ease-in-out duration-1000  scroll-smooth overflow-hidden scrollbar-hide ' id='slide'>
                    {
                        cards.map((item) => {

                            const { title, desc, img, id } = item;
                            return (
                                <>
                                    <a href="#" target="_blank h-[100%] ">
                                        <div className='  flex h-64 w-64 rounded-xl  items-center duration-700 cursor-pointer  hover:scale-105 mt-4 '>

                                            <div>
                                                <img src={img} className=" h-64 w-64 object-cover  " />
                                            </div>
                                        </div>
                                        <div className=' -mt-60 justify-items-center text-yellow-50 grid text-lg text- font-bold absolute  w-60'>
                                            <p>{title}</p>
                                            <p>{desc}</p>
                                        </div>
                                    </a>

                                </>
                            )

                        })

                    }
                </div>
                <div className='grid items-center justify-items-center text-4xl text-opacity-50 hover:text-opacity-100 text-black cursor-pointer'><ion-icon name="caret-forward-outline" onClick={SlideRight}></ion-icon></div>
            </div>



        </>
    )
}

export default Slide