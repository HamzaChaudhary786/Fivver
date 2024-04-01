import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { gigs } from '../../data';

const Text = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [sDesc, setSDesc] = useState("");

    const handleImgClick = (img, desc) => {
        setSelectedImg(img);
        setSDesc(desc)
    };

    const handleClose = () => {
        setSelectedImg(null);
        setSDesc("");
    };

    return (
        <>
            <div className='overflow-x-auto scroll-smooth transition-all duration-500 flex gap-x-10 p-7'>
                {gigs.map((itm, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => handleImgClick(itm.img, itm.desc)}
                        className='cursor-pointer'
                    >
                        <section className='h-[100%] w-[100%]'>
                            <div className='w-80 h-80'>
                                <img src={itm.img} className='h-[100%]' alt='' />
                            </div>

                        </section>
                    </motion.div>
                ))}
            </div>

            {selectedImg && (
                <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50'
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1.5 }}
                        transition={{ ease: "easeOut", duration: 0.6 }}
                        className='w-[100%] h-[100%] relative grid justify-items-center'
                    >
                        <img src={selectedImg} alt='' className='absolute inset-0 w-[100%] h-[100%] lg:object-contain' />
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1, y: '20%' }}
                            transition={{ ease: "easeOut", duration: 0.6 }}

                            className='w-[65%] lg:w-[100%] lg:h-[100%] relative grid justify-items-center'>
                            <div className='absolute  p-4'>

                                <p  className='text-white'>{sDesc}</p>


                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default Text;
