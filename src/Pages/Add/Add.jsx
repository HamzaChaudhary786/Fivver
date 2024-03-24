import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Add = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [poster, setPoster] = useState('');
  const [images, setImages] = useState('');
  const [description, setDescription] = useState('');
  const [sTitle, setSTitle] = useState('');
  const [sDescription, setSDescription] = useState('');
  const [price, setPrice] = useState('');
  const [dTime, setDTime] = useState('');
  const [rNumber, setRNumber] = useState('');
  const [aFeature, setAFeature] = useState('');
  const formRef = useRef(null); // Create a ref for the form element
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = {
      title,
      category,
      poster,
      images,
      description,
      sTitle,
      sDescription,
      dTime,
      rNumber,
      aFeature,
      price
    };
    console.log('Form data:', formData);

    axios.post("http://localhost:3001/gigs", formData).then(
      () => {

        navigate("/mygigs")
      }
    ).catch(err => {
      console.log(err)

    })
  };

  return (
    <>
      <div className=' w-[100%] flex justify-center items-center '>
        <form action="" ref={formRef} className='w-[80%] justify-center' onSubmit={handleSubmit}>
          <div className=' flex gap-14 '>

            <div className="left  w-[50%] h-auto p-4">
              <h1 className=' text-lg font-semibold '>Add New Gig</h1>
              <div className='w-auto h-auto mt-4'>
                <label>Title</label>
                <br></br>
                <input type="text" className=' h-8 w-96 border outline-none p-1' value={title} placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className='mt-4'>
                <label>Categories</label>
                <br></br>

                <select name="" id="" value={category} className='h-8 w-96 border outline-none p-1' onChange={(e) => setCategory(e.target.value)}>
                  <option value="Name 1">Name 1</option>
                  <option value="Name 2">Name 2</option>
                  <option value="Name 3">Name 3</option>

                </select>
              </div>
              <div className='mt-4'>
                <h1>Cover Image</h1>
                <br></br>

                <input type="text" className=' h-8 w-96 border outline-none p-1' placeholder='poster' onChange={(e) => setPoster(e.target.value)} />
              </div>
              <div className='mt-4'>
                <h1>Upload Image</h1>
                <br></br>

                <input type="text" className=' h-8 w-96 border outline-none p-1' placeholder='image...' onChange={(e) => setImages(e.target.value)} />
              </div>
              <div className='mt-4'>
                <h1>Description</h1>
                <br></br>

                <textarea className='p-2 w-96 h-auto border outline-none' name="" id="" cols="30" rows="5" placeholder='Enter Text' onChange={(e) => setDescription(e.target.value)}></textarea>
                <button type='submit' className='p-2 w-96 h-auto bg-green-500 text-white text-lg'>Create</button>
              </div>



            </div>
            <div className="right  w-[50%] h-auto p-4">
              <div className='w-auto h-auto mt-4'>
                <label>Service Title</label>
                <br></br>
                <input type="text" className=' h-8 w-96 border outline-none p-1 mt-2' placeholder='service title' onChange={(e) => setSTitle(e.target.value)} />
              </div>
              <div className='mt-4'>
                <label>Short Description</label>
                <br></br>
                <textarea className=' h-auto w-96 border outline-none p-1 mt-2' name="" id="" cols="30" rows="3" placeholder='Short Description...' onChange={(e) => setSDescription(e.target.value)}></textarea>
              </div>

              <div className='w-auto h-auto mt-4'>
                <label>Delivery Time</label>
                <br></br>
                <input type="number" className=' h-8 w-96 border outline-none p-1 mt-2' placeholder='Delievery Time...' onChange={(e) => setDTime(e.target.value)} />
              </div>
              <div className='w-auto h-auto mt-4'>
                <label>Revision Number</label>
                <br></br>
                <input type="number" className=' h-8 w-96 border outline-none p-1 mt-2' placeholder='Revision Number...' onChange={(e) => setRNumber(e.target.value)} />
              </div>
              <div className='w-auto h-auto mt-4'>
                <label>Add Feature</label>
                <br></br>
                <input type="text" className=' h-8 w-96 border outline-none p-1 mt-2' placeholder='Add Feature...' onChange={(e) => setAFeature(e.target.value)} />

              </div>
              <div className='w-auto h-auto mt-4'>
                <label>Price</label>
                <br></br>
                <input type="number" className=' h-8 w-96 border outline-none p-1 mt-2' placeholder='Add Price...' onChange={(e) => setPrice(e.target.value)} />
              </div>


            </div>
          </div>
        </form>
      </div>


    </>
  )
}

export default Add