import React from 'react'
import "../Messages/Message.scss"
import { Link } from 'react-router-dom'
const Message = () => {

  const currentUser = {
    id: 1,
    username: "john Doe",
    isSeller: true
  }

  const message = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut aspernatur dignissimos, ipsa sapiente atque, officia fugiat molestias illo iusto qui vel unde? Magnam molestias, veniam eius asperiores inventore ipsam quia.`




  return (
    <>
      <div className='w-[100%] h-auto grid justify-items-center items-center'>
        <div className='w-[80%]'>
          <div className='flex justify-between mt-4'>
            <h1>Message</h1>

          </div>
          <div className="mt-6">

            <table className=' border w-[100%] text-left'>
              <tr className=' h-10  '>
                <th className=' p-1'>Buyer</th>
                <th className=' p-1'>Last Message</th>
                <th className=' p-1'>Date</th>
                <th className=' p-1'>Action</th>
              </tr>
              <tr className='Active  h-10 '>
                <td>John Doe</td>
                <Link to="/smessage/123"><td>{message.substring(0, 99)}</td></Link>
                <td>1 day ago</td>

                <td><button className='Active bg-green-500 h-10 w-28 rounded'>Mark as Read</button></td>



              </tr>
              <tr className='Active  h-10 '>
                <td>John Doe</td>
                <Link to="/smessage/123"><td>{message.substring(0, 99)}</td></Link>                <td>1 day ago</td>

                <td><button className=' bg-green-500 h-10 w-28 rounded'>Mark as Read</button></td>



              </tr>
              <tr className='  h-10 '>
                <td>John Doe</td>
                <Link to="/smessage/123"><td>{message.substring(0, 99)}</td></Link>                <td>1 day ago</td>
                <td></td>


              </tr>
              <tr className='  h-10 '>
                <td>John Doe</td>
                <Link to="/smessage/123"><td>{message.substring(0, 99)}</td></Link>                <td>1 day ago</td>
                <td></td>


              </tr>
              <tr className='  h-10 '>
                <td>John Doe</td>
                <Link to="/smessage/123"><td>{message.substring(0, 99)}</td></Link>                <td>1 day ago</td>
                <td></td>


              </tr>
              <tr className='  h-10 '>
                <td>John Doe</td>
                <Link to="/smessage/123"><td>{message.substring(0, 99)}</td></Link>                <td>1 day ago</td>
                <td></td>


              </tr>
              <tr className='  h-10 '>
                <td>John Doe</td>
                <Link to="/smessage/123"><td>{message.substring(0, 99)}</td></Link>                <td>1 day ago</td>
                <td></td>


              </tr>

            </table>


          </div>

        </div>
      </div>
    </>
  )
}

export default Message