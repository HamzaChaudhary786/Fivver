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
                <div className='grid items-center justify-items-center text-4xl   cursor-pointer  '><ion-icon name="caret-back-outline" onClick={SlideLeft}></ion-icon></div>

                <div className='flex  overflow-x-scroll  gap-x-6  scrollbar-hide ' id='slide'>
                    {
                        cards.map((item, index) => {

                            const { title, desc, img, id } = item;
                            return (
                                <>
                                    <a key={index} href="#" target="_blank">
                                        <div className='relative  flex h-64 w-64 rounded-xl items-center duration-500 ease-in-out cursor-pointer mt-4 '>

                                            <div className=''>
                                                <img src={img} className=" h-64 w-64 object-cover  " />
                                            </div>
                                            <div className='absolute top-10  justify-items-center text-yellow-50 grid text-lg font-bold  w-60'>
                                            <p>{title}</p>
                                            <p>{desc}</p>
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



        </>
    )
}

export default Slide