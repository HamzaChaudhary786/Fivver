import React from 'react'
import star from "../../assets/star.png"
import SliderB from './SliderB'
const SGig = () => {
  return (
    <>
      <div className=' grid justify-items-center items-center p-14'>
        <div className=' w-[96%] h-auto grid grid-cols-2 justify-items-center' >
          <div>
            <div className=' text-lg '>
              <span><ion-icon name="home"></ion-icon></span>
              <span> Fiverr
                /Graphics & Design / AI Artists / Custom Image Prompts
              </span>
            </div>
            <h1 className=' font-bold text-4xl mt-6'>I will train a lora model for you</h1>
            <div className=' text-lg mt-6 '>
              <span>
                <div className=' text-lg '>
                  <span><img src='#' /></span>
                  <span className='flex items-center'>
                    konanai Konan @konanai Level 1 Seller
                    <span className=' flex h-4 w-4 ml-2 '>
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </span>
                    <span className=' ml-20' >5 (90) 1 Order in Queue</span>

                  </span>
                </div>
              </span>
            </div>

            <SliderB />

            <div>
              <h2 className=' text-xl font-bold'>
                About this gig
              </h2>
              <p className=' text-sm font-semibold'>
                This gig includes the creation of a character or style LORA (.safetensors) of your choice.
                If your request is a known character, or style, I will gather the dataset and tag it myself.
                For an OC, send me any relevant imagery of that character. I will tag all of those images.
                If you could provide at least 15 images that would be great.
                I will provide you with several exemples of what the LoRA can produce, and write out all the details used in the prompt (strenghts used, full terms...).
                You can check my Civitai profile in my portfolio for some of my works (all free).
                The LoRA made for this Gig will not be published on my profile except if you authorize me to do it, as it is a paid service only for your personal use.

              </p>
            </div>



          </div>
          <div className=' grid justify-items-center  '>
            <section className=' fixed w-[35%] h-96 border bg-yellow-50  justify-center p-8 text-lg'>
              <div className=' flex justify-between font-bold  text-gray-800 opacity-90  '>
                <span  >1 LoRA of your choice</span>
                <span>PKR 4,313</span>
              </div>
              <p className='w-[95%] mt-3'>Includes 1 Lora, 5 example pictures and prompt activator</p>
              <div className='flex mt-3'>
                <span className='items-center flex'>
                  <ion-icon name="time-outline"></ion-icon>
                  <span className='ml-2 mr-2'>3 Days Delivery</span>
                </span>
                <span className='items-center flex'>
                  <ion-icon name="refresh-outline"></ion-icon>
                  <span className='ml-2 mr-2'>1 Revision</span>
                </span>
              </div>
              <div className=' items-center text-lg text-gray-800 w-auto h-auto  '>
                <span className='text-xl items-center flex  '><ion-icon name="checkmark-outline"></ion-icon><span className=' ml-2'> 5 prompts</span></span>

                <span className='text-xl items-center flex'><ion-icon name="checkmark-outline"></ion-icon> <span className='ml-2'>Prompt creation</span></span>


                <span className='text-xl items-center flex '><ion-icon name="checkmark-outline"></ion-icon> <span className='ml-2'>Prompt delivery</span></span>


                <span className='text-xl items-center flex '><ion-icon name="checkmark-outline"></ion-icon> <span className='ml-2'>Sample images</span></span>


                <span className='text-xl items-center flex '><ion-icon name="checkmark-outline"></ion-icon>  <span className=' ml-2'>Instructions</span></span>
              </div>
              <div className=' text-center grid justify-items-center items-center mt-4 '>
                <button className=' bg-black text-lg font-bold text-white w-[95%] h-10 rounded'>
                  Continue
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default SGig