import React from 'react'
import Feature from '../Feature/Feature'
import { FBussiness } from '../../data'
import { BCard } from '../../data'
const FiverrBuss = () => {

    return (
        <>
            <div>
                <Feature />
            </div>
            <div className='grid justify-items-center items-center w-[100%]'>
                <div className=' text-start w-[90%] mt-6 p-1'>
                    <h1 className=' text-3xl font-bold '>Popular services for business</h1>

                </div>
                <div className=' w-[90%] grid gap-4 justify-items-center items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 mt-4'>

                    {
                        FBussiness.map((item) => {
                            const { id, title, img, color } = item;
                            return (
                                <>
                                    <section className='w-[100%] h-[100%] grid justify-items-center rounded-lg ' style={{ backgroundColor: `${color}` }} >
                                        <img src={img} alt="" className='h-36 w-36  object-contain ' />
                                        <span className='text-lg font-bold'>{title}</span>

                                    </section>
                                </>
                            )
                        })
                    }
                </div>

                <div className=' grid justify-items-center text-center mt-9 '>
                    <h1 className=' text-3xl  md:text-5xl font-bold '>
                        Access a catalog of verified, trusted talent
                    </h1>
                    <p className='mt-5 text-opacity-60 font-bold text-gray-700 text-lg'>Expand your team as needed with experienced freelancers already vetted for business projects.</p>
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2Feb395dc6092e4fe692d4c516d4d9e471" alt="" className=' mt-6 object-cover' />

                </div>

                <div className=' grid grid-cols-1 lg:grid-cols-3 w-[100%] h-auto  text-lg items-center p-4'>
                    <div className='col-span-2'>
                        <img src="https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F3ac747706d674d8fbe9688136adf6a6e" alt="" className=' object-contain' />
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold'>Finding the right talent? Leave that to us</h1>


                        <p className=' mt-8 w-auto'>A team of Fiverr Business Success Managers is here to help match you with the best talent for your team - no need for endless guessing and interviews.</p>
                    </div>
                </div>

                <div className=' grid  grid-cols-1 lg:grid-cols-3 w-[100%] h-auto  text-lg items-center p-4'>
                    <div className='col-span-2 order-2'>
                        <img src="https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F65bab57757d44a32843ca3102639a5a8" alt="" className=' object-contain' />
                    </div>
                    <div className='order-1'>
                        <h1 className='text-3xl font-bold'>Turn scattered feedback into productive teamwork</h1>


                        <p className=' mt-8 w-auto'>Collaborate with your team, manage projects, and share freelancers - all in one workspace.</p>
                    </div>
                </div>
                <div className=' grid  grid-cols-1 lg:grid-cols-3 w-[100%] h-auto  text-lg items-center p-4'>
                    <div className='col-span-2 '>
                        <img src="https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2F71098c3cbb80478aadccd1b0f918fe21" alt="" className=' object-contain' />
                    </div>
                    <div className=''>
                        <h1 className='text-3xl font-bold'>Simplify budgeting and manage with transparency</h1>


                        <p className=' mt-8 w-auto'>Skip all the overhead of multiple freelancers, monitor your team's progress, approve transactions, and set budgets with ease.</p>
                    </div>
                </div>


                <div>

                </div>




            </div>


        </>
    )
}

export default FiverrBuss