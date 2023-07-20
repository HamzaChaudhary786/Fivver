import React from 'react'

const Add = () => {
  return (
    <>
      <div className=' w-[100%] flex justify-center items-center '>
        <div className=' flex gap-14  w-[80%] justify-center'>

          <div className="left  w-[50%] h-auto p-4">
            <h1 className=' text-lg font-semibold '>Add New Gig</h1>
            <div className='w-auto h-auto mt-4'>
              <label>Title</label>
              <br></br>
              <input type="text" className=' h-8 w-96 border outline-none p-1' />
            </div>
            <div className='mt-4'>
              <label>Categories</label>
              <br></br>

              <select name="" id=""  className='h-8 w-96 border outline-none p-1'>
                <option value="Name 1">Name 1</option>
                <option value="Name 2">Name 2</option>
                <option value="Name 3">Name 3</option>

              </select>
            </div>
            <div className='mt-4'>
              <h1>Cover Image</h1>
              <br></br>

              <input type="file" />
            </div>
            <div className='mt-4'>
              <h1>Upload Image</h1>
              <br></br>

              <input type="file" />
            </div>
            <div className='mt-4'>
              <h1>Description</h1>
              <br></br>

              <textarea className='p-2 w-96 h-auto border outline-none' name="" id="" cols="30" rows="5" placeholder='Enter Text'></textarea>
            <button className='p-2 w-96 h-auto bg-green-500 text-white text-lg'>Create</button>
            </div>



          </div>
          <div className="right  w-[50%] h-auto p-4">
            <div className='w-auto h-auto mt-4'>
              <label>Service Title</label>
              <br></br>
              <input type="text" className=' h-8 w-96 border outline-none p-1 mt-2' />
            </div>
            <div className='mt-4'>
              <label>Short Description</label>
              <br></br>
              <textarea className=' h-auto w-96 border outline-none p-1 mt-2' name="" id="" cols="30" rows="3"></textarea>
            </div>

            <div className='w-auto h-auto mt-4'>
              <label>Delivery Time</label>
              <br></br>
              <input type="text" className=' h-8 w-96 border outline-none p-1 mt-2' />
            </div>
            <div className='w-auto h-auto mt-4'>
              <label>Revision Number</label>
              <br></br>
              <input type="text" className=' h-8 w-96 border outline-none p-1 mt-2' />
            </div>
            <div className='w-auto h-auto mt-4'>
              <label>Add Feature</label>
              <br></br>
              <input type="text" className=' h-8 w-96 border outline-none p-1 mt-2' />
              <input type="text" className=' h-8 w-96 border outline-none p-1 mt-2' />
              <input type="text" className=' h-8 w-96 border outline-none p-1 mt-2' />
              <input type="text" className=' h-8 w-96 border outline-none p-1 mt-2' />

            </div>
            <div className='w-auto h-auto mt-4'>
              <label>Price</label>
              <br></br>
              <input type="text" className=' h-8 w-96 border outline-none p-1 mt-2' />
            </div>


          </div>
        </div>
      </div>


    </>
  )
}

export default Add