import React from 'react'
import star from "../../assets/star.png"
import SliderB from './SliderB'
import tick from "../../assets/tick.png"
import clock from "../../assets/clock.png"
import cycle from "../../assets/recycle.png"

const SGig = () => {
  return (
    <>
      <div className=' grid justify-items-center items-center p-14'>
        <div className=' w-[98%] h-auto grid grid-cols-2 justify-items-center' >
          <div>
            <div className=' text-lg '>
              <span> Fiverr
                /Graphics & Design / AI Artists / Custom Image Prompts
              </span>
            </div>
            <h1 className=' font-bold text-4xl mt-6'>I will train a lora model for you</h1>
            <div className=' text-lg mt-6 '>
              <span>
                <div className=' text-sm flex  '>
                  <span><img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/0a942eaf07f700413307cb83bcc725db-1679042705998/bb5a591c-bcff-4ee0-9cdd-db64f26eee95.png" className='h-6 w-6 rounded-full mr-2 object-cover' alt="" />
                  </span>
                  <span className='flex items-center'>
                    konanai Konan @konanai Level 1 Seller
                    <span className=' flex h-4 w-4 ml-1 mr-1  '>
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </span>
                    <span className='ml-16' >5 (90) 1 Order in Queue</span>

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
              <hr className=' w-[100%] border mt-8' />
              <div>

                <div>
                  <div className=' flex items-center mt-6 '>
                    <div>
                      <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/0a942eaf07f700413307cb83bcc725db-1679042705998/bb5a591c-bcff-4ee0-9cdd-db64f26eee95.png" className='h-16 w-16 rounded-full object-cover' alt="" />
                    </div>
                    <div className=' ml-4'>
                      <h1>Kato
                        <span className='ml-2'>@kattnolett0</span></h1>
                      <span className='flex items-center '>
                        <img className='h-4  w-4' src={star} alt="" />
                        <img className='h-4  w-4' src={star} alt="" />
                        <img className='h-4  w-4' src={star} alt="" />
                        <img className='h-4  w-4' src={star} alt="" />
                        <img className='h-4  w-4' src={star} alt="" />
                        (32)
                      </span>
                      <button className='h-8 w-28 text-center border rounded border-black mt-1'>Contact Me</button>
                    </div>
                  </div>
                  <div className='w-[80%] h-auto border  mt-4 p-8'>
                    <div className=' flex'>
                      <div>
                        <div>
                          <span>From</span>
                          <h1 className="font-bold text-opacity-70">Argentina</h1>
                        </div>
                        <div>
                          <span>Avg. response time</span>
                          <h1 className="font-bold text-opacity-70">1 hour</h1>
                        </div>
                        <div>
                          <span>Languages</span>
                          <h1 className="font-bold text-opacity-70">English, Spanish, Japanese</h1>
                        </div>
                      </div>
                      <div className=' ml-4'>
                        <div>
                          <span>
                            Argentina Member since
                          </span>
                          <h1 className="font-bold text-opacity-70">Jan 2023
                          </h1>
                        </div>
                        <div>
                          <span>
                            Last delivery

                          </span>
                          <h1 className="font-bold text-opacity-70">About 10 hours
                          </h1>
                        </div>
                      </div>
                    </div>

                    <hr className=' w-[80%] border mt-4' />
                    <p className='mt-4'>Hi! I'm Lucas, I've been using AI for a while so now I think I can take some requests.
                      I keep studying and learning more about the AI generated images everyday, so I'll do my best!</p>


                  </div>


                </div>

              </div>

              <hr className=' w-[100%] border mt-8' />


              <div className="reviews">
                <div className=' flex items-center mt-6 '>
                  <div>
                    <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/0a942eaf07f700413307cb83bcc725db-1679042705998/bb5a591c-bcff-4ee0-9cdd-db64f26eee95.png" className='h-16 w-16 rounded-full object-cover' alt="" />
                  </div>
                  <div className=' ml-4'>
                    <h1 className='font-bold'>ryviann

                      <span className=' flex items-center'><span><img src="https://www.freeiconspng.com/thumbs/germany-flag/icons-of-germany-flag-fatherland-icon-png-3.png" className='h-8 w-8 object-cover' alt="" /></span>Germany</span></h1>
                    <span className='flex items-center '>
                      <img className='h-4  w-4' src={star} alt="" />
                      <img className='h-4  w-4' src={star} alt="" />
                      <img className='h-4  w-4' src={star} alt="" />
                      <img className='h-4  w-4' src={star} alt="" />
                      <img className='h-4  w-4' src={star} alt="" />
                      (32)
                    </span>

                  </div>
                </div>
                <p className=' ml-16 mt-4'>Was a bit skeptical about ai art to begin with but was positively surprised by the result. They managed to translate my description into something that fit very well with what I wanted and was even able to modify minor details after the fact. They definitely know how to whisper to the ai!</p>
              </div>

              <hr className=' w-[100%] border mt-8' />


              <div className="reviews">
                <div className=' flex items-center mt-6 '>
                  <div>
                    <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/0a942eaf07f700413307cb83bcc725db-1679042705998/bb5a591c-bcff-4ee0-9cdd-db64f26eee95.png" className='h-16 w-16 rounded-full object-cover' alt="" />
                  </div>
                  <div className=' ml-4'>
                    <h1 className='font-bold'>ryviann

                      <span className=' flex items-center'><span><img src="https://www.freeiconspng.com/thumbs/germany-flag/icons-of-germany-flag-fatherland-icon-png-3.png" className='h-8 w-8 object-cover' alt="" /></span>Germany</span></h1>
                    <span className='flex items-center '>
                      <img className='h-4  w-4' src={star} alt="" />
                      <img className='h-4  w-4' src={star} alt="" />
                      <img className='h-4  w-4' src={star} alt="" />
                      <img className='h-4  w-4' src={star} alt="" />
                      <img className='h-4  w-4' src={star} alt="" />
                      (32)
                    </span>

                  </div>
                </div>
                <p className=' ml-16 mt-4'>Was a bit skeptical about ai art to begin with but was positively surprised by the result. They managed to translate my description into something that fit very well with what I wanted and was even able to modify minor details after the fact. They definitely know how to whisper to the ai!</p>
              </div>


            </div>



          </div>

          <div className='sticky top-[150px] h-[400px] flex gap-[20px] p-[20px] border   bg-yellow-50  text-lg'>
            <section >
              <div className=' flex justify-between font-bold  text-gray-800 text-opacity-70  '>
                <span  >1 LoRA of your choice</span>
                <span>PKR 4,313</span>
              </div>
              <p className='w-[95%] mt-3'>Includes 1 Lora, 5 example pictures and prompt activator</p>
              <div className='flex mt-3'>
                <span className='items-center flex'>
                  <img src={clock} className='h-4 w-4' alt="" />
                  <span className='ml-2 mr-2'>3 Days Delivery</span>
                </span>
                <span className='items-center flex'>
                  <img src={cycle} className='h-4 w-4' alt="" />

                  <span className='ml-2 mr-2'>1 Revision</span>
                </span>
              </div>
              <div className=' items-center text-lg text-gray-800 w-auto h-auto  '>
                <span className='text-xl items-center flex  '><img src={tick} className='h-4 w-4' alt="" /><span className=' ml-2'> 5 prompts</span></span>

                <span className='text-xl items-center flex'><img src={tick} className='h-4 w-4' alt="" /> <span className='ml-2'>Prompt creation</span></span>


                <span className='text-xl items-center flex '><img src={tick} className='h-4 w-4' alt="" /> <span className='ml-2'>Prompt delivery</span></span>


                <span className='text-xl items-center flex '><img src={tick} className='h-4 w-4' alt="" /> <span className='ml-2'>Sample images</span></span>


                <span className='text-xl items-center flex '><img src={tick} className='h-4 w-4' alt="" /> <span className=' ml-2'>Instructions</span></span>
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