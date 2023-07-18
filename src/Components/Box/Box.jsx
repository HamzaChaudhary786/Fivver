import React from 'react'

const Box = () => {
    return (
        <>
            <div className=' justify-items-center items-center grid mt-6'>
                <div className='box h-auto w-[96%] grid grid-cols-3  px-20 py-8 pb-0 bg-blue-500    '>
                    <div className="left h-auto w-auto text-white">
                        <h1 className=' text-2xl font-extrabold '><span className=' font-extrabold text-2xl mt-6'>Fivver</span> Logo Maker.</h1>
                        <h1 className=' font-bold text-4xl  mt-4'>Make an incredible logo
                           <span className=' text-3xl font-semibold'> in minutes</span></h1>
                        <p className=' mt-6'>Pre-designed by top talent. Just add your touch.</p>

                        <button className='bg-white  h-10 w-60 rounded mt-8  text-blue-500'>Try Fivver Logo Maker
                        </button>

                    </div>
                    <div className="right grid justify-items-start col-span-2 mr-12 h-auto w-auto ">
                        <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png' className=' h-[300px] w-[900px] object-fit' />

                    </div>


                </div>
            </div>

        </>
    )
}

export default Box