import React from 'react'
import { Link } from 'react-router-dom'
import msg from "../../assets/message.png"
const Order = () => {

  const currentUser = {
    id: 1,
    username: "john Doe",
    isSeller: true
  }

  return (
    <>
      <div className='w-[100%] h-auto grid justify-items-center items-center'>
        <div className='w-[70%]'>
          <div className='flex justify-between mt-4'>
            <h1>Orders</h1>

          </div>
          <div className="mt-6">

            <table className=' border w-[100%] text-left'>
              <tr className=' h-10  '>
                <th className=' p-1'>Image</th>
                <th className=' p-1'>Tittle</th>
                <th className=' p-1'>Price</th>
                <th className=' p-1'>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                <th className=' p-1'>Contact</th>
              </tr>
              <tr className=' bg-sky-100 h-10 '>
                <td><img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" className=' w-[50px] h-[25px] object-cover' alt="" /></td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                  <img src={msg
} className='h-5 w-5 cursor-pointer' alt="" />
                </td>

              </tr>
              <tr className=' h-10 '>
                <td><img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600 " className=' w-[50px] h-[25px] object-cover' alt="" /></td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                  <img src={msg
} className='h-5 w-5 cursor-pointer' alt="" />
                </td>

              </tr>
              <tr className=' bg-sky-100 h-10'>
                <td><img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600 " className=' w-[50px] h-[25px] object-cover' alt="" /></td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>


                  <img src={msg
} className='h-5 w-5 cursor-pointer' alt="" />
                </td>

              </tr>
              <tr className=' h-10 '>
                <td><img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600 " className=' w-[50px] h-[25px] object-cover' alt="" /></td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                  <img src={msg
} className='h-5 w-5 cursor-pointer' alt="" />
                </td>

              </tr>
              <tr className='  bg-sky-100 h-10'>
                <td><img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600 " className=' w-[50px] h-[25px] object-cover' alt="" /></td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                  <img src={msg
} className='h-5 w-5 cursor-pointer' alt="" />
                </td>

              </tr>
              <tr className=' h-10 '>
                <td><img src=" https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" className=' w-[50px] h-[25px] object-cover' alt="" /></td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                  <img src={msg
} className='h-5 w-5 cursor-pointer ' alt="" />
                </td>

              </tr>
              <tr className=' bg-sky-100 h-10 '>
                <td><img src=" https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" className=' w-[50px] h-[25px] object-cover' alt="" /></td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                  <img src={msg
} className='h-5 w-5 cursor-pointer ' alt="" />
                </td>

              </tr>

            </table>


          </div>

        </div>
      </div>
    </>
  )
}

export default Order