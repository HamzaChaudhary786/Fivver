import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { gigs } from '../../data';
import { useParams } from 'react-router-dom';

const SliderB = () => {
    const { id } = useParams();

    let slidedata = gigs.filter((product) => product.id === parseInt(id))
    return (
        <>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={70}
                totalSlides={slidedata[0].slideimg.length} // Set the totalSlides based on the length of slideimg
            >
                <div className=' flex justify-between  mt-4'>
                    <ButtonBack className=' h-6 w-6 rounded-full flex justify-center items-center bg-indigo-300 border text-lg font-bold text-white'>{"<"}</ButtonBack>
                    <ButtonNext className='h-6 w-6 flex justify-center items-center rounded-full bg-indigo-300 border text-lg font-bold text-white'>{">"}</ButtonNext>
                </div>
                {
                    slidedata.map((item) => (
                        <Slider key={item.id} className=' mt-4 h-fit'>
                            {item.slideimg.map((slide, index) => (
                                <Slide key={slide.imgid} index={index}>
                                    <img
                                        src={slide.url}
                                        alt=""
                                    />
                                </Slide>
                            ))}
                        </Slider>
                    ))
                }
            </CarouselProvider>
        </>
    )
}

export default SliderB;
