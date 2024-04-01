
import React, { useEffect, useRef } from 'react';
import { cards } from '../../data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

const Slide = () => {
    const sectionRef = useRef(null); // useRef to get reference to the DOM element

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
        const section_2 = sectionRef.current;

        if (section_2) {
            let box_items = gsap.utils.toArray(".horizontal__item");

            gsap.to(box_items, {
                xPercent: -75 * (box_items.length - 1),
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: section_2,
                    start: "center center", // Start animation from the center of the screen
                    pin: true,
                    scrub: 12,
                    snap: 1 / (box_items.length - 1),
                    end: () => `+=${section_2.scrollWidth - section_2.offsetWidth}` // Adjust end value
                }
            });
        }
    }, []); // Remove 'cards' from the dependency array

    return (
        <div className=' grid justify-items-center items-center' ref={sectionRef} >
            <div className='container overflow-x-auto  '>
                <div className='flex gap-x-6'>
                    {cards.map((item, index) => {
                        const { title, desc, img, id } = item;
                        return (
                            <section key={id} className='horizontal__item'>
                                <div className='relative flex h-64 w-64 rounded-xl items-center cursor-pointer mt-4'>
                                    <div>
                                        <img src={img} alt={title} className="h-64 w-64 object-cover" />
                                    </div>
                                    <div className='absolute top-10 justify-items-center text-yellow-50 grid text-lg font-bold w-60'>
                                        <p>{title}</p>
                                        <p>{desc}</p>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Slide;
