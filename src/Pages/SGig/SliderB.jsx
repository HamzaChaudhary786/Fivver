import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const SliderB = () => {
    return (
        <>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={70}
                totalSlides={3}
        
            >
                <div className=' flex justify-between  mt-4'>
                    <ButtonBack className=' h-6 w-6 rounded-full flex justify-center items-center bg-indigo-300 border text-lg font-bold text-white'>{"<"}</ButtonBack>
                    <ButtonNext className='h-6 w-6 flex justify-center items-center rounded-full bg-indigo-300 border text-lg font-bold text-white'>{">"}</ButtonNext>
                </div>
                <Slider className=' mt-4 h-fit'>
                    <Slide index={0}> <img
                        src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    /></Slide>
                    <Slide index={1}>  <img
                        src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    /></Slide>
                    <Slide index={2}>  <img
                        src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    /></Slide>

                </Slider>


            </CarouselProvider>

        </>
    )
}

export default SliderB